# ====================================================================
# SkillMatch AI - V4: Profissões Dinâmicas (Formato Básico/Didático)
# Foco: Uso Explícito de Estruturas de Repetição e Decisão (Sem List Comprehensions)
# ====================================================================

import os
import json
from google import genai
from google.genai.errors import APIError
import datetime  # Para obter a data atual de forma segura

# Constante para o arquivo de persistência
NOME_ARQUIVO_DADOS = 'perfis_skillmatch.json'

# O dicionário PROFISSOES_DO_FUTURO foi removido para dar lugar à geração dinâmica da IA.
PERFIS_USUARIOS = {}
PROXIMO_ID_USUARIO = 1


# ====================================================================
# FUNÇÕES DE PERSISTÊNCIA DE DADOS (JSON)
# ====================================================================

def carregar_dados():
    """Carrega os dados dos perfis do arquivo JSON para o dicionário PERFIS_USUARIOS."""
    global PERFIS_USUARIOS
    global PROXIMO_ID_USUARIO

    if os.path.exists(NOME_ARQUIVO_DADOS):
        try:
            # CORREÇÃO: Especificar encoding='utf-8' para a leitura
            with open(NOME_ARQUIVO_DADOS, 'r', encoding='utf-8') as arquivo:
                dados_carregados = json.load(arquivo)

                # REESCRITO: Conversão de chaves de string para int explicitamente (sem dict comprehension)
                temp_perfis = {}
                for k, v in dados_carregados.items():
                    temp_perfis[int(k)] = v
                PERFIS_USUARIOS = temp_perfis

                if PERFIS_USUARIOS:
                    # Define o próximo ID a partir do maior ID existente
                    PROXIMO_ID_USUARIO = max(PERFIS_USUARIOS.keys()) + 1
                    print(f"✅ Dados de {len(PERFIS_USUARIOS)} usuários carregados do arquivo JSON.")
                return True
        except json.JSONDecodeError:
            print("⚠️ Erro ao decodificar o arquivo JSON. Iniciando com dados vazios.")
            return False
        except Exception as e:
            print(f"⚠️ Erro ao carregar dados: {e}. Iniciando com dados vazios.")
            return False
    else:
        print("ℹ️ Arquivo de dados não encontrado. Iniciando o sistema pela primeira vez.")
        return False


def salvar_dados():
    """Salva o dicionário PERFIS_USUARIOS no arquivo JSON (com ensure_ascii=False para acentos)."""
    try:
        # Usa encoding='utf-8' e ensure_ascii=False para garantir que acentos sejam salvos legivelmente.
        with open(NOME_ARQUIVO_DADOS, 'w', encoding='utf-8') as arquivo:
            json.dump(PERFIS_USUARIOS, arquivo, indent=4, ensure_ascii=False)
        print("\n✅ Dados salvos com sucesso no arquivo JSON.")
        return True
    except Exception as e:
        print(f"\n❌ ERRO ao salvar dados: {e}")
        return False


# ====================================================================
# FUNÇÕES DE USABILIDADE E VALIDAÇÃO
# ====================================================================

def listar_perfis_cadastrados():
    """Exibe a lista de perfis cadastrados e seus IDs para login."""
    print("\n--- Perfis Cadastrados (Login) ---")
    if not PERFIS_USUARIOS:
        print("❌ Nenhum perfil encontrado.")
        return False

    # Estrutura de Repetição para listar os perfis
    for user_id, user_data in PERFIS_USUARIOS.items():
        print(f"ID: **{user_id}** | Nome: {user_data['nome']}")
    print("-" * 35)
    return True


def valida_entrada_int(mensagem, minimo=1, maximo=999):
    """
    Realiza validação de entrada de dados do usuário, garantindo que seja um número
    inteiro dentro de um intervalo. Aplica tratamento de exceções (ValueError).
    """
    while True:  # Estrutura de Repetição
        try:
            valor = input(mensagem)
            numero = int(valor)
            if minimo <= numero <= maximo:  # Estrutura de Decisão
                return numero
            else:
                print(f"❌ Valor fora do intervalo permitido ({minimo} a {maximo}).")
        except ValueError:  # Tratamento de Exceções
            print("❌ Entrada inválida. Por favor, digite apenas números inteiros.")


# ====================================================================
# FUNÇÃO DE IA 1: MAPEAR SKILLS E CALCULAR PRONTIDÃO DINAMICAMENTE
# ====================================================================

def mapear_skills_ia(profissao_nome, skills_atuais_usuario):
    """
    Chama a API Gemini para gerar as skills E calcular o Nível de Prontidão
    do usuário em relação a essa profissão, retornando o resultado em JSON.
    """
    api_key = ""  # << SUBSTITUA PELA SUA CHAVE REAL

    if not api_key:
        print("\n❌ ERRO DE API: Chave não configurada.")
        return None

    # REESCRITO: Converte a lista de skills para string explicitamente (sem list comprehension)
    skills_atuais_formatadas = []
    for skill in skills_atuais_usuario:
        skills_atuais_formatadas.append(skill)
    skills_atuais_str = ", ".join(skills_atuais_formatadas)

    prompt = (
        "Você é um avaliador especializado em análise de competências profissionais. "
        f"A profissão alvo é: \"{profissao_nome}\". "
        f"O usuário possui atualmente as habilidades: [{skills_atuais_str}]. "
        "Sua tarefa é: "
        "1. Identificar as 5 Hard Skills essenciais e as 5 Soft Skills essenciais para essa profissão. "
        "2. Calcular o Nível de Prontidão do usuário (0–100%), comparando semanticamente as habilidades atuais com as essenciais. "
        "3. Gerar a lista de Habilidades Faltantes (reskilling necessário). "
        "A resposta deve ser exclusivamente um JSON válido com as chaves: "
        "\"score_prontidao (número, inteiro ou float)\", \"hard_skills (lista de strings)\", \"soft_skills (lista de strings)\", \"skills_faltantes (lista de strings)\". "
        "Não inclua nenhuma explicação, texto fora do JSON ou formatação Markdown."
    )

    print(f"\n⏳ **Aguarde:** A IA está mapeando e calculando a prontidão para '{profissao_nome}'...")

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )

        raw_text = response.text.strip()

        # --- FILTRO ROBUSTO ---
        if raw_text.startswith('```json'):
            raw_text = raw_text[7:]
        if raw_text.endswith('```'):
            raw_text = raw_text[:-3]

        # 2. Tenta extrair e carregar o JSON
        dados_ia = json.loads(raw_text.strip())

        # Estrutura de Decisão para validar o formato do score
        if 'score_prontidao' not in dados_ia or not isinstance(dados_ia['score_prontidao'], (int, float)):
            raise ValueError("IA não retornou o score no formato correto.")

        # REESCRITO: Mapeamento dos resultados sem list comprehension
        hard_skills = []
        if 'hard_skills' in dados_ia:
            for s in dados_ia['hard_skills']:
                hard_skills.append(s.strip())

        soft_skills = []
        if 'soft_skills' in dados_ia:
            for s in dados_ia['soft_skills']:
                soft_skills.append(s.strip())

        faltantes = []
        if 'skills_faltantes' in dados_ia:
            for s in dados_ia['skills_faltantes']:
                faltantes.append(s.strip())

        return {
            'nome': profissao_nome,
            'score': float(dados_ia['score_prontidao']),
            'hard_skills': hard_skills,
            'soft_skills': soft_skills,
            'faltantes': faltantes
        }

    except json.JSONDecodeError:
        print(f"❌ A IA não retornou o formato JSON esperado.")
        return None
    except APIError as e:
        print(f"❌ ERRO DE CONEXÃO/API: {e}")
        return None
    except Exception as e:
        print(f"❌ ERRO INESPERADO ao mapear skills: {e}")
        return None


# ====================================================================
# FUNÇÃO DE IA 2: GERAR ROTEIRO DE APRENDIZADO
# ====================================================================

def gerar_roteiro_ia(profissao_alvo_nome, skills_faltantes):
    """
    Chama a API Gemini para gerar um roteiro de aprendizado real.
    """
    api_key = ""  # << SUBSTITUA PELA SUA CHAVE REAL

    if not api_key:
        return "\n(Plano de Aprendizado: Configure sua chave de API para habilitar a IA!)"

    # REESCRITO: Converte a lista de skills para string explicitamente (sem list comprehension)
    skills_formatadas = []
    for skill in skills_faltantes:
        skills_formatadas.append(skill.capitalize())
    skills_str = ", ".join(skills_formatadas)

    prompt = (
        f"Gere um plano de estudos detalhado de 4 semanas para requalificar um profissional que deseja se tornar \"{profissao_alvo_nome}\". "
        f"O profissional deve focar em adquirir as seguintes habilidades: {skills_str}. "
        "Estruture o conteúdo da seguinte forma: "
        "Título: Plano de Estudos — {profissao_alvo_nome} (4 semanas). "
        "Para cada semana (Semana 1 a Semana 4): "
        "- Objetivo da semana; "
        "- Hard Skills (tarefas e conteúdos específicos); "
        "- Soft Skills (tarefas e exercícios práticos); "
        "- Atividades práticas / projetos; "
        "- Tempo estimado (horas). "
        "Seja claro, detalhado e específico."
    )

    print("\n⏳ **Aguarde:** A IA Gemini está gerando seu roteiro de aprendizado personalizado...")

    try:
        client = genai.Client(api_key=api_key)
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )

        if response.text:
            return f"\n🤖 **ROTEIRO DE APRENDIZADO GERADO PELA IA GEMINI**\n{'-' * 50}\n{response.text}\n{'-' * 50}"
        else:
            return "\n❌ A IA não conseguiu gerar um roteiro de aprendizado. Tente novamente."

    except APIError as e:  # Tratamento de exceção para erros da Google API
        return f"\n❌ ERRO DE CONEXÃO/API: Houve um problema ao chamar o modelo. Detalhes: {e}"
    except Exception as e:
        return f"\n❌ ERRO INESPERADO: Verifique sua conexão e chave de API. Detalhes: {e}"


# ====================================================================
# FLUXO PRINCIPAL
# ====================================================================

def cadastrar_usuario():
    """Cadastra um novo perfil no Dicionário PERFIS_USUARIOS e salva no JSON."""
    global PROXIMO_ID_USUARIO
    print("\n--- 1. Cadastro de Usuário ---")

    nome = input("Digite seu nome (Obrigatório): ").strip()
    if not nome:  # Estrutura de Decisão
        print("❌ O nome não pode ser vazio. Retornando ao menu.")
        return

    print("\nListe suas Habilidades ATUAIS (Separe por vírgula, ex: Excel, Vendas, Empatia):")
    skills_input = input("> ")

    # REESCRITO: Coleta e filtro das skills com laço for (sem list comprehension)
    skills_atuais_brutas = skills_input.split(',')
    skills_atuais = []
    for s in skills_atuais_brutas:
        s_limpa = s.strip().lower()
        if s_limpa:
            skills_atuais.append(s_limpa)

    if not skills_atuais:
        print("⚠️ Você deve cadastrar pelo menos uma habilidade. Cadastro cancelado.")
        return

    PERFIS_USUARIOS[PROXIMO_ID_USUARIO] = {
        'nome': nome,
        'skills_atuais': skills_atuais,
        # Adicionado 'data_cadastro' para manter o padrão didático e persistência segura
        'data_cadastro': datetime.date.today().isoformat()
    }
    print(f"✅ Perfil de **{nome}** cadastrado com sucesso! Seu ID para login é: **{PROXIMO_ID_USUARIO}**")
    PROXIMO_ID_USUARIO += 1
    salvar_dados()  # Salva o novo cadastro


def consultar_reskilling():
    """Controla o fluxo de consulta, mapeando a profissão dinamicamente e obtendo o score pela IA."""
    print("\n--- 2. Consultar Caminho de Reskilling ---")

    if not listar_perfis_cadastrados():
        return

    # Usando valida_entrada_int para garantir que o ID é válido
    id_usuario = valida_entrada_int("Digite o ID do seu perfil (login): ", 1, PROXIMO_ID_USUARIO - 1)

    # Estrutura de Decisão
    if id_usuario not in PERFIS_USUARIOS:
        print("❌ ID de usuário não encontrado.")
        return

    usuario = PERFIS_USUARIOS[id_usuario]
    print(f"\nPerfil de **{usuario['nome']}** encontrado.")

    # ORGANIZAÇÃO DA SAÍDA: Mostrando as skills do usuário em lista
    print("Suas Habilidades Atuais:")
    for skill in usuario['skills_atuais']:
        print(f"- {skill.capitalize()}")
    print("-" * 30)

    # NOVA ETAPA: USUÁRIO DIGITA A PROFISSÃO
    profissao_alvo_nome = input("➡️ Digite o NOME EXATO da profissão futura que você deseja mapear: ").strip()
    if not profissao_alvo_nome:
        print("❌ Nome da profissão não pode ser vazio.")
        return

    # CHAMA A FUNÇÃO DE IA PARA MAPEAR SKILLS E CALCULAR O SCORE
    resultado_ia = mapear_skills_ia(profissao_alvo_nome, usuario['skills_atuais'])

    if not resultado_ia:
        print("❌ Falha no mapeamento e cálculo da IA. Tente novamente.")
        return

    # Extração dos dados do resultado da IA
    score = resultado_ia['score']
    faltantes = resultado_ia['faltantes']

    # Exibição do Resultado
    print("\n" + "=" * 70)
    print(f"**PROFISSÃO ALVO:** {resultado_ia['nome'].upper()}")

    # ORGANIZAÇÃO DA SAÍDA: Mostrando Hard e Soft Skills em blocos separados
    print("\n**HARD SKILLS ESSENCIAIS (Geradas pela IA):**")
    for skill in resultado_ia['hard_skills']:
        print(f" • {skill}")

    print("\n**SOFT SKILLS ESSENCIAIS (Geradas pela IA):**")
    for skill in resultado_ia['soft_skills']:
        print(f" • {skill}")

    print("\n" + "-" * 70)
    print(f"**NÍVEL DE PRONTIDÃO:** {score:.2f}%")
    print("=" * 70)

    # Feedback de Prontidão (Estrutura de Decisão)
    if score >= 80:
        print("🚀 **PRONTO PARA O FUTURO!** Seu perfil tem alta compatibilidade. Foque em experiência prática.")
    elif score >= 50:
        print("💡 **BOM PROGESSO!** O roteiro de aprendizado da IA é crucial para fechar sua lacuna.")
    else:
        print("🌱 **INÍCIO DA JORNADA.** Foque nas Hard Skills listadas abaixo.")

    print("\n**CAMINHO DE RESKILLING (Habilidades a Adquirir):**")
    if faltantes:
        for i, skill in enumerate(faltantes, 1):  # Estrutura de Repetição
            print(f"{i}. {skill.capitalize()}")

        # CHAMA A FUNÇÃO DE IA PARA GERAR O ROTEIRO
        print("\n" + "#" * 70)
        roteiro_ia = gerar_roteiro_ia(resultado_ia['nome'], faltantes)
        print(roteiro_ia)
        print("#" * 70)

        # CHAMA A FUNÇÃO PARA SALVAR O ROTEIRO
        salvar_roteiro_arquivo(usuario['nome'], roteiro_ia, resultado_ia['nome'])

    else:
        # Se não há faltantes, a IA ainda gera um plano de manutenção
        roteiro_ia = gerar_roteiro_ia(resultado_ia['nome'], faltantes)
        print("- Você já possui todas as habilidades requeridas para esta profissão!")
        print(roteiro_ia)
        salvar_roteiro_arquivo(usuario['nome'], roteiro_ia, resultado_ia['nome'])


def adicionar_skill():
    """Simula a aquisição de novas habilidades (Upskilling) e salva no JSON."""
    print("\n--- 3. Adicionar Nova Skill (Upskilling) ---")

    if not listar_perfis_cadastrados():
        return

    # Usando valida_entrada_int para garantir que o ID é válido
    id_usuario = valida_entrada_int("Digite o ID do seu perfil: ", 1, PROXIMO_ID_USUARIO - 1)

    # Estrutura de Decisão
    if id_usuario not in PERFIS_USUARIOS:
        print("❌ ID de usuário não encontrado.")
        return

    usuario = PERFIS_USUARIOS[id_usuario]

    # ORGANIZAÇÃO DA SAÍDA: Mostrando as skills do usuário em lista
    print(f"Perfil atual de **{usuario['nome']}**.")
    print("Suas Habilidades Atuais:")
    for skill in usuario['skills_atuais']:
        print(f"- {skill.capitalize()}")
    print("-" * 30)

    nova_skill = input("Digite a nova habilidade adquirida (ex: Python Básico): ").strip().lower()

    if nova_skill and nova_skill not in usuario['skills_atuais']:  # Estrutura de Decisão
        usuario['skills_atuais'].append(nova_skill)
        print(
            f"✅ Habilidade **'{nova_skill.capitalize()}'** adicionada ao seu perfil! Execute a opção 2 novamente para ver seu score subir.")
        salvar_dados()  # Salva a nova skill
    elif nova_skill in usuario['skills_atuais']:
        print(f"ℹ️ Você já possui a habilidade **'{nova_skill.capitalize()}'**.")
    else:
        print("❌ Habilidade inválida.")


# ====================================================================
# FUNÇÃO ADICIONAL: SALVAR ROTEIRO EM ARQUIVO (MARKDOWN)
# ====================================================================

def salvar_roteiro_arquivo(nome_usuario, roteiro_ia, profissao_alvo):
    """Salva o roteiro de aprendizado gerado pela IA em um arquivo .md (Markdown)."""

    # Cria um nome de arquivo único
    nome_arquivo = f"roteiro_{nome_usuario.lower().replace(' ', '_')}_{profissao_alvo.lower().replace(' ', '_')}.md"

    try:
        # Abre o arquivo com encoding='utf-8' para garantir que os acentos funcionem
        with open(nome_arquivo, 'w', encoding='utf-8') as f:
            f.write(f"# 🚀 Roteiro de Aprendizado SkillMatch AI para {profissao_alvo.upper()}\n\n")
            f.write(f"**Usuário:** {nome_usuario}\n")
            # Usa datetime para obter a data atual de forma segura e padronizada
            f.write(f"**Data da Geração:** {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n\n")
            f.write("---\n")
            f.write(roteiro_ia)
            f.write("\n---\n")
            f.write("Este roteiro foi gerado por Inteligência Artificial.")

        print(f"\n✅ Roteiro salvo com sucesso no arquivo: **{nome_arquivo}**")
        return True
    except Exception as e:
        print(f"\n❌ ERRO ao salvar o roteiro: {e}")
        return False


# ====================================================================
# LOOP PRINCIPAL (Estrutura de Repetição e Menu)
# ====================================================================

def main():
    """Função principal que executa o sistema."""

    # TENTATIVA DE FORÇAR UTF-8 NO CONSOLE (Windows/Terminais problemáticos)
    # Comando 'chcp 65001' define a codificação de página (code page) como UTF-8
    try:
        os.system('chcp 65001')
    except Exception:
        pass  # Ignora se não puder executar o comando

    carregar_dados()  # Carrega os dados ao iniciar

    while True:  # Estrutura de Repetição
        print("\n" + "#" * 70)
        print("## SkillMatch AI: Consultor de Reskilling Dinâmico com IA ##")
        print("#" * 70)

        # Estrutura de Menu
        print("1. Cadastrar Novo Perfil")
        print("2. Consultar Caminho de Reskilling (Login e Mapeamento Dinâmico)")
        print("3. Adicionar Nova Skill (Upskilling)")
        print("4. Sair")  # Removida a opção de Listar Profissões

        escolha = input("\nEscolha uma opção: ")

        # Estrutura de Decisão para navegação
        if escolha == '1':
            cadastrar_usuario()
        elif escolha == '2':
            consultar_reskilling()
        elif escolha == '3':
            adicionar_skill()
        elif escolha == '4':
            print("\nObrigado por usar o SkillMatch AI. Adaptar-se é o futuro! 🚀")
            salvar_dados()  # Salva os dados antes de sair
            break
        else:
            print("❌ Opção inválida. Tente novamente.")


# Execução do Programa
if __name__ == "__main__":
    main()