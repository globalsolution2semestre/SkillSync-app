import React, { useState, useEffect, useRef } from 'react';

const SkillMatchModal = ({ isOpen, onClose }) => {
  // Estados para controlar a conversa
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0); // 0: Inicio, 1: Nome, 2: Profissao, 3: Skills, 4: Finalizado
  const [userData, setUserData] = useState({ nome: '', profissao: '', skills: '' });
  const [loading, setLoading] = useState(false);
  
  // Referência para rolar o chat para baixo automaticamente
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial quando abre o modal
      setMessages([
        { sender: 'bot', text: 'Olá! Sou a IA do SkillMatch. Vamos planejar sua carreira.' },
        { sender: 'bot', text: 'Primeiro, qual é o seu nome?' }
      ]);
      setStep(1);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  if (!isOpen) return null;

  const handleSend = async () => {
    if (!input.trim()) return;

    // 1. Adiciona a resposta do usuário ao chat
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput(''); // Limpa o campo

    // 2. Lógica da Conversa (Máquina de Estados)
    if (step === 1) {
      setUserData(prev => ({ ...prev, nome: currentInput }));
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: `Prazer, ${currentInput}! Qual profissão ou cargo você deseja alcançar no futuro?` }]);
        setStep(2);
      }, 600);
    } 
    
    else if (step === 2) {
      setUserData(prev => ({ ...prev, profissao: currentInput }));
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Ótima escolha. Agora, me diga quais habilidades você JÁ POSSUI atualmente? (Separe por vírgula, ex: Python, Excel, Vendas)' }]);
        setStep(3);
      }, 600);
    } 
    
    else if (step === 3) {
      // Aqui temos tudo! Vamos chamar a API
      setUserData(prev => ({ ...prev, skills: currentInput }));
      setLoading(true);
      
      // Mensagem de "Pensando"
      setMessages(prev => [...prev, { sender: 'bot', text: 'Entendi! Estou analisando seu perfil e gerando seu plano de 4 semanas...' }]);

      try {
        // Chamada ao Python
        const response = await fetch('http://localhost:5000/processar-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: userData.nome,
            profissao: userData.profissao,
            skills: currentInput // O input atual é a skill
          })
        });

        const data = await response.json();

        if (data.sucesso) {
          // Exibir Score e Dados
          const scoreMsg = `Analisei seu perfil para **${userData.profissao || 'o cargo'}**.\n\n🎯 **Nível de Prontidão:** ${data.analise.score_prontidao}%\n\n⚠️ **Habilidades Faltantes:** ${data.analise.skills_faltantes.join(', ')}`;
          
          setMessages(prev => [...prev, { sender: 'bot', text: scoreMsg }]);

          // Exibir o Roteiro Completo
          setMessages(prev => [...prev, { sender: 'bot', text: data.roteiro, isMarkdown: true }]);
          
          setStep(4); // Fim
        }
      } catch (error) {
        setMessages(prev => [...prev, { sender: 'bot', text: '❌ Ocorreu um erro ao conectar com o servidor. Verifique se o Python está rodando.' }]);
      } finally {
        setLoading(false);
      }
    }
  };

  // Permitir enviar com Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  // Função para reiniciar
  const handleReset = () => {
    setMessages([]);
    setStep(0);
    setUserData({ nome: '', profissao: '', skills: '' });
    // O useEffect vai reiniciar a conversa
    setTimeout(() => {
      setMessages([
        { sender: 'bot', text: 'Olá! Sou a IA do SkillMatch. Vamos planejar sua carreira.' },
        { sender: 'bot', text: 'Primeiro, qual é o seu nome?' }
      ]);
      setStep(1);
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-2xl h-[80vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 flex justify-between items-center text-white">
          <h2 className="font-bold text-lg flex items-center gap-2">🤖 SkillMatch AI</h2>
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
                {/* Renderização condicional para Markdown simples (quebras de linha e negrito) */}
                {msg.isMarkdown ? (
                  <div className="whitespace-pre-wrap font-mono text-xs md:text-sm">
                    {msg.text}
                  </div>
                ) : (
                  // Converte quebras de linha simples em <br/> e **bold** visualmente
                  <div style={{whiteSpace: 'pre-wrap'}}>{msg.text}</div>
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

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={step === 4 ? "Conversa finalizada. Clique em Reiniciar." : "Digite sua resposta..."}
            disabled={loading || step === 4}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
          />
          <button 
            onClick={handleSend}
            disabled={loading || step === 4}
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