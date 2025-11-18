import React from 'react';

export default function Landing({ setPage, darkMode, isLoggedIn = false, selectedProfile = null }) {
  if (isLoggedIn) {
    const welcomeName = selectedProfile
      ? (selectedProfile.email === 'professorfiap@skillsync.com' ? 'Professor FIAP' : selectedProfile.nome || 'Professor')
      : 'Professor';

    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-8 py-20">
          <div className="md:w-1/2 text-center md:text-left p-8">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Bem-vindo(a), {welcomeName}</h2>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>A SkillSync conecta você a uma rede exclusiva de talentos verificados em tecnologia, design e dados.</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPage('profissionais')}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-transform hover:scale-105"
              >
                Explorar Profissionais
              </button>
              <button
                onClick={() => setPage('profile')}
                className="bg-gray-700 text-white px-6 py-4 rounded-lg font-medium hover:bg-gray-600 transition-transform"
              >
                Meu Perfil
              </button>
            </div>
          </div>

          <div className="md:w-1/2 p-8">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
              alt="Profissionais trabalhando"
              className="mx-auto rounded-xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl w-full px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bem-vindo(a) à SkillSync</h1>
          <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Conectamos talentos a oportunidades com foco em habilidades reais e projetos.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPage('login')}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Faça login
            </button>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Muito prazer — para continuar, faça o login.</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className={`w-full max-w-2xl p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600">
              <img
                src="/door-ilustration.png.png"
                alt="Entrada"
                className="w-full h-full object-cover filter contrast-[0.95] brightness-[0.9] saturate-[0.85] mix-blend-normal"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-indigo-900/30 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/20 pointer-events-none" />
            </div>
            <p className={`mt-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Uma maneira mais humana de encontrar talentos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
