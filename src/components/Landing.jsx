import React from 'react';

export default function Landing({ setPage, darkMode }) {
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
          {/* Rocket illustration card */}
          <div className={`w-full max-w-2xl p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <div className="relative w-full h-80 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-600">
              {/* Use user's image placed at public/door-illustration.png */}
              <img
                src="/door-ilustration.png.png"
                alt="Entrada"
                className="w-full h-full object-cover filter contrast-[0.95] brightness-[0.9] saturate-[0.85] mix-blend-normal"
              />

              {/* Color overlay to tint image to site tones */}
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
