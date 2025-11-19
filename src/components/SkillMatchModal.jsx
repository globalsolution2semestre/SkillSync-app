import React, { useState, useEffect, useRef } from 'react';

const SkillMatchModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: Inicio, 1: Nome, 2: Profissao, 3: Skills, 4: Finalizado
  const [userData, setUserData] = useState({ nome: '', profissao: '', skills: '' });
  const [loading, setLoading] = useState(false);
  const [planContent, setPlanContent] = useState(null);
  
  const messagesEndRef = useRef(null);
  const mountedRef = useRef(true);
  const timersRef = useRef([]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Initialize when modal opens; use mountedRef and timersRef for safe cleanup
  useEffect(() => {
    mountedRef.current = true;

    if (isOpen && messages.length === 0) {
      // initialize messages
      setMessages([
        { sender: 'bot', text: 'Olá! Sou a IA do SkillMatch. Vamos planejar sua carreira.' },
        { sender: 'bot', text: 'Primeiro, qual é o seu nome?' }
      ]);
      setStep(1);
    }

    return () => {
      // cleanup on unmount/close
      mountedRef.current = false;
      // clear any pending timeouts
      timersRef.current.forEach(id => clearTimeout(id));
      timersRef.current = [];
    };
    // we intentionally depend only on isOpen here
  }, [isOpen]);

  // Scroll when messages change (safe to run while mounted)
  useEffect(() => {
    if (mountedRef.current) scrollToBottom();
  }, [messages]);

  if (!isOpen) return null; // Não renderiza nada se não estiver aberto

  const handleSend = async () => {
    if (!input.trim() && step !== 4) return; // Não permite enviar vazio, a menos que seja o último passo

    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput('');

    if (step === 1) {
      setUserData(prev => ({ ...prev, nome: currentInput }));
      const t = setTimeout(() => {
        if (!mountedRef.current) return;
        setMessages(prev => [...prev, { sender: 'bot', text: `Prazer, ${currentInput}! Qual profissão ou cargo você deseja alcançar no futuro?` }]);
        setStep(2);
      }, 600);
      timersRef.current.push(t);
    } 
    
    else if (step === 2) {
      setUserData(prev => ({ ...prev, profissao: currentInput }));
      const t = setTimeout(() => {
        if (!mountedRef.current) return;
        setMessages(prev => [...prev, { sender: 'bot', text: 'Ótima escolha. Agora, me diga quais habilidades você JÁ POSSUI atualmente? (Separe por vírgula, ex: Python, Excel, Vendas)' }]);
        setStep(3);
      }, 600);
      timersRef.current.push(t);
    } 
    
    else if (step === 3) {
      setUserData(prev => ({ ...prev, skills: currentInput }));
      setLoading(true);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Entendi! Estou analisando seu perfil e gerando seu plano de 4 semanas...' }]);

      try {
        const response = await fetch('http://localhost:5000/processar-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: userData.nome,
            profissao: userData.profissao,
            skills: currentInput
          })
        });

        const data = await response.json();

          if (data.sucesso) {
          // Build structured plan data
          const plan = {
            nome: userData.nome || currentInput || 'Usuário',
            profissao: userData.profissao || 'Cargo alvo',
            prontidao: data.analise?.score_prontidao ?? 0,
            faltantes: data.analise?.skills_faltantes || [],
            roteiro: data.roteiro || '',
            fontes: data.fontes || []
          };

          // Create a markdown/text version for saving
          const md = [`# Plano de Estudos - ${plan.nome}`,
            `**Cargo alvo:** ${plan.profissao}`,
            `**Nível de prontidão:** ${plan.prontidao}%`,
            `**Habilidades faltantes:** ${plan.faltantes.join(', ') || 'Nenhuma identificada'}`,
            `\n## Plano de Estudos (resumo)`,
            plan.roteiro || 'Sem roteiro gerado',
            `\n## Fontes recomendadas`,
            (plan.fontes.length > 0 ? plan.fontes.map(f => `- ${f}`).join('\n') : '- Documentação oficial\n- Cursos e tutoriais (ex: freeCodeCamp, Coursera, Alura)\n- Repositórios e projetos práticos')
          ].join('\n\n');

          // Push a structured message that the UI will render as a formatted plan
          setMessages(prev => [...prev, { sender: 'bot', isPlan: true, plan }]);
          setPlanContent(md);
          setStep(4);
        } else {
          setMessages(prev => [...prev, { sender: 'bot', text: `❌ Erro do servidor: ${data.erro || 'Desconhecido'}` }]);
        }
      } catch (error) {
        setMessages(prev => [...prev, { sender: 'bot', text: '❌ Ocorreu um erro ao conectar com o servidor. Verifique se o Python está rodando.' }]);
      } finally {
        if (mountedRef.current) setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleReset = () => {
    // clear any pending timers
    timersRef.current.forEach(id => clearTimeout(id));
    timersRef.current = [];

    if (!mountedRef.current) return;

    setMessages([]);
    setStep(0);
    setUserData({ nome: '', profissao: '', skills: '' });
    const t = setTimeout(() => {
      if (!mountedRef.current) return;
      setMessages([
        { sender: 'bot', text: 'Olá! Sou a IA do SkillMatch. Vamos planejar sua carreira.' },
        { sender: 'bot', text: 'Primeiro, qual é o seu nome?' }
      ]);
      setStep(1);
    }, 100);
    timersRef.current.push(t);
  };

  return (
    // CONTAINER DO MODAL AJUSTADO: Fixo no canto inferior direito
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <div className="bg-white w-full max-w-sm h-[70vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-300 ease-in-out">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex justify-between items-center text-white rounded-t-2xl">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/robot-2.png" alt="AI" className="h-6 w-6" />
            SkillMatch Assistant
          </h2>
          <div className="flex gap-3">
            <button onClick={handleReset} className="text-sm hover:text-gray-200 underline">Reiniciar</button>
            <button onClick={onClose} className="font-bold hover:text-red-200">✕</button>
          </div>
        </div>

        {/* Área do Chat */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 custom-scrollbar">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-purple-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                }`}
              >
                {/* If message is a structured plan, render sections */}
                {msg.isPlan ? (
                  <div className="space-y-4">
                    <div className="text-base font-semibold">Plano de Estudos</div>
                    <div className="text-sm space-y-1">
                      <div><strong>Cargo alvo:</strong> {msg.plan.profissao}</div>
                      <div><strong>Nível de prontidão:</strong> {msg.plan.prontidao}%</div>
                      <div><strong>Habilidades faltantes:</strong> {msg.plan.faltantes.length ? msg.plan.faltantes.join(', ') : 'Nenhuma identificada'}</div>
                    </div>

                    <div className="pt-2">
                      <div className="font-semibold mb-2">Roteiro de Estudos</div>
                      <div className="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed bg-gray-50 p-3 rounded">{msg.plan.roteiro}</div>
                    </div>

                    <div>
                      <div className="font-semibold">Fontes recomendadas</div>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {(msg.plan.fontes && msg.plan.fontes.length > 0) ? (
                          msg.plan.fontes.map((f, i) => <li key={i}>{f}</li>)
                        ) : (
                          [
                            <li key="mdn">Documentação oficial / MDN / Docs</li>,
                            <li key="courses">Cursos práticos (freeCodeCamp, Coursera, Alura)</li>,
                            <li key="projects">Projetos práticos e repositórios no GitHub</li>
                          ]
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Render normal text or markdown-style text */
                  (msg.isMarkdown ? (
                    <div className="whitespace-pre-wrap font-mono text-xs md:text-sm">{msg.text}</div>
                  ) : (
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  ))
                )}
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
          {/* If we have a generated plan, show actions (save/copy) above input */}
          {step === 4 && planContent && (
            <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between gap-2">
              <div className="text-sm text-gray-600">Plano pronto — você pode salvar uma cópia.</div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    // download markdown
                    try {
                      const blob = new Blob([planContent], { type: 'text/markdown;charset=utf-8' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      const name = (userData && userData.nome) ? userData.nome.replace(/\s+/g, '_') : 'user';
                      a.download = `SkillMatch_Plan_${name}.md`;
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                      URL.revokeObjectURL(url);
                    } catch (err) {
                      console.error('Erro ao salvar plano', err);
                      alert('Não foi possível salvar o plano. Veja o console para detalhes.');
                    }
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Salvar Plano
                </button>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(planContent);
                      alert('Plano copiado para a área de transferência');
                    } catch (err) {
                      console.error('Erro ao copiar', err);
                      alert('Não foi possível copiar.');
                    }
                  }}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                  Copiar
                </button>
              </div>
            </div>
          )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2 rounded-b-2xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={step === 4 ? "Clique em Reiniciar para uma nova consulta." : "Digite sua resposta..."}
            disabled={loading || step === 4}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
          />
          <button 
            onClick={handleSend}
            disabled={loading || step === 4 || !input.trim()} // Desabilita se input estiver vazio também
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-95"
          >
            Enviar
          </button>
        </div>

      </div>
    </div>
  );
};

export default SkillMatchModal;