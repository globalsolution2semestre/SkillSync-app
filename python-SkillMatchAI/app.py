from flask import Flask, request, jsonify
from flask_cors import CORS
from google import genai
import json
import os

app = Flask(__name__)
CORS(app)

# Load API key from environment for security. Do NOT hard-code keys in source.
API_KEY = os.environ.get('SKILLMATCH_API_KEY') or os.environ.get('GOOGLE_API_KEY')

if not API_KEY:
    print("[WARNING] No SKILLMATCH_API_KEY found in environment. Set SKILLMATCH_API_KEY before running the server.")
# ⚠️ COLOQUE SUA CHAVE AQUI
API_KEY = ""

def mapear_skills_ia(profissao_nome, skills_atuais_lista):
    if not API_KEY: return None
    skills_str = ", ".join(skills_atuais_lista)

    # Prompt focado em retornar JSON puro para dados estruturados
    prompt = (
        f"Analise a profissão: \"{profissao_nome}\". "
        f"Usuário tem: [{skills_str}]. "
        "Retorne APENAS um JSON com as chaves: "
        "\"score_prontidao\" (numero 0-100), \"hard_skills\" (lista), \"soft_skills\" (lista), \"skills_faltantes\" (lista). "
        "Sem markdown, sem explicações extras no início ou fim."
    )

    try:
        client = genai.Client(api_key=API_KEY)
        response = client.models.generate_content(model='gemini-2.0-flash', contents=prompt)
        
        raw_text = response.text.strip()
        if raw_text.startswith('```json'): raw_text = raw_text[7:]
        if raw_text.endswith('```'): raw_text = raw_text[:-3]

        return json.loads(raw_text)
    except Exception as e:
        print(f"Erro na IA Mapeamento: {e}")
        return None

def gerar_roteiro_ia(profissao_alvo, skills_faltantes):
    # Se não houver skills faltantes, gera um plano de aprimoramento
    skills_str = ", ".join(skills_faltantes) if skills_faltantes else "Aprimoramento geral e tendências de mercado"
    
    # --- AQUI ESTÁ A MÁGICA: O PROMPT ORIGINAL DETALHADO DO SEU MAIN.PY ---
    prompt = (
        f"Gere um plano de estudos detalhado de 4 semanas para requalificar um profissional que deseja se tornar \"{profissao_alvo}\". "
        f"O profissional deve focar em adquirir as seguintes habilidades: {skills_str}. "
        "Estruture o conteúdo da seguinte forma para cada uma das 4 semanas: "
        "Título: Plano de Estudos — {profissao_alvo} (4 semanas). "
        "\n\nPara cada semana (Semana 1 a Semana 4): "
        "\n- **Objetivo da semana**; "
        "\n- **Hard Skills** (tarefas e conteúdos específicos); "
        "\n- **Soft Skills** (tarefas e exercícios práticos); "
        "\n- **Atividades práticas / projetos**; "
        "\n- **Tempo estimado** (horas). "
        "\n\nSeja claro, detalhado e específico, usando formatação Markdown."
    )

    try:
        client = genai.Client(api_key=API_KEY)
        response = client.models.generate_content(model='gemini-2.0-flash', contents=prompt)
        return response.text
    except Exception as e:
        return f"Erro ao gerar roteiro: {e}"

@app.route('/processar-chat', methods=['POST'])
def processar_chat():
    dados = request.json
    # O frontend vai mandar tudo o que coletou até agora
    nome = dados.get('nome')
    profissao = dados.get('profissao')
    skills_input = dados.get('skills')

    # Transforma skills em lista
    if isinstance(skills_input, str):
        skills_atuais = [s.strip() for s in skills_input.split(',') if s.strip()]
    else:
        skills_atuais = skills_input

    print(f"Processando IA para: {nome}, Alvo: {profissao}")

    # 1. Mapeamento (Score e Skills)
    analise = mapear_skills_ia(profissao, skills_atuais)
    
    if not analise:
        return jsonify({"sucesso": False, "erro": "Erro na IA de mapeamento"}), 500

    # 2. Geração do Roteiro Detalhado
    roteiro = gerar_roteiro_ia(profissao, analise['skills_faltantes'])

    return jsonify({
        "sucesso": True,
        "analise": analise,
        "roteiro": roteiro
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)