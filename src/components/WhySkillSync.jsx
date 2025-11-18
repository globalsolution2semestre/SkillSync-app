import React, { useState, useRef, useEffect } from 'react';

export default function WhySkillSync({ darkMode, stats = null, testimonials = null, setPage = null }) {
  const [showHow, setShowHow] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // prevent background scroll when modal is open
    if (showHow) {
      document.body.style.overflow = 'hidden';
      // focus close button for accessibility
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showHow]);

  useEffect(() => {
    if (!showHow) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setShowHow(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showHow]);

  const handleStart = () => {
    if (setPage) setPage('profissionais');
    // smooth scroll to top
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0,0); }
  };

  const handleOpenHow = () => {
    // open modal and scroll to top for better focus
    setShowHow(true);
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0,0); }
  };
  const pillars = [
    {
      title: 'Match inteligente',
      desc: 'Encontre profissionais por habilidades aplicadas e projetos, não só por título.'
    },
    {
      title: 'Perfis com provas',
      desc: 'Mostre projetos, avaliações e recomendações para aumentar credibilidade.'
    },
    {
      title: 'Conexão direta',
      desc: 'Mensagens e agendamento simplificado entre empresa e profissional.'
    }
  ];

  const defaultStats = [
    { value: '5.2k', label: 'Profissionais' },
    { value: '400', label: 'Empresas' },
    { value: '12k', label: 'Conexões' }
  ];

  const shownStats = stats || defaultStats;

  return (
    <section className={`pt-24 pb-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`} aria-labelledby="why-title">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="why-title" className={`text-3xl md:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Por que usar o SkillSync?
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Conectamos empresas e profissionais com precisão usando perfis que exibem habilidades reais, projetos e recomendações.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={handleStart} className="bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700">Comece agora</button>
            <button onClick={handleOpenHow} className={`px-5 py-2 rounded-lg border ${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-200 text-gray-700'}`}>Ver como funciona</button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <article key={i} className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`} role="article">
              <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold mb-4">{i+1}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 grid grid-cols-3 gap-4">
            {shownStats.map((s, idx) => (
              <div key={idx} className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className={`md:w-1/3 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-sm`}>
            <h4 className="font-semibold mb-2">Depoimento</h4>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>"A SkillSync reduziu o tempo de contratação pela metade — encontramos candidatos mais alinhados."</p>
            <div className={`mt-3 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>— Ana Silva, Head de Talent Acquisition</div>
          </div>
        </div>
      </div>
      {/* How it works modal */}
      {showHow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" onClick={() => setShowHow(false)} />
          <div role="dialog" aria-modal="true" aria-labelledby="how-title" className={`relative max-w-3xl w-full rounded-lg p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-2xl`}> 
            <div className="flex items-start justify-between">
              <h3 id="how-title" className="text-xl font-bold">Como usar o SkillSync</h3>
              <button ref={closeBtnRef} onClick={() => setShowHow(false)} className="ml-4 text-sm rounded px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Fechar</button>
            </div>

            <div className="mt-4 space-y-4">
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Aqui está um guia rápido para aproveitar ao máximo a plataforma:</p>
              <ol className={`ml-4 list-decimal ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li className="mb-2"><strong>Buscar profissionais:</strong> Use a busca e filtros para encontrar candidatos por nome, cargo, habilidade ou cidade.</li>
                <li className="mb-2"><strong>Visualizar perfil:</strong> Abra o perfil para ver projetos, resumo, habilidades e depoimentos.</li>
                <li className="mb-2"><strong>Conectar:</strong> Clique em <em>Conectar</em> para adicionar candidatos à sua rede e acompanhar o status.</li>
                <li className="mb-2"><strong>Enviar mensagens:</strong> Use o botão de mensagem no perfil ou no card para iniciar uma conversa direta.</li>
                <li className="mb-2"><strong>Recomendar:</strong> Após uma boa experiência, você pode recomendar o profissional no perfil para aumentar visibilidade.</li>
              </ol>

              <div className="pt-4 border-t mt-4">
                <div className="flex items-center justify-end gap-3">
                  <button onClick={() => { setShowHow(false); handleStart(); }} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Ir para profissionais</button>
                  <button onClick={() => setShowHow(false)} className={`px-4 py-2 rounded border ${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-200 text-gray-700'}`}>Fechar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
