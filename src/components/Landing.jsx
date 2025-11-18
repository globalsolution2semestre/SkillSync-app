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
          {/* Cartoon illustration (inline SVG) */}
          <div className={`w-full max-w-md p-6 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}> 
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-64">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="200" height="200" rx="20" fill={darkMode ? '#0f1724' : '#ffffff'} />
              <circle cx="100" cy="70" r="36" fill="#FFD28A" />
              <ellipse cx="85" cy="78" rx="6" ry="8" fill="#111827" />
              <ellipse cx="115" cy="78" rx="6" ry="8" fill="#111827" />
              <path d="M80 95 Q100 110 120 95" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
              <rect x="40" y="120" width="120" height="36" rx="8" fill="url(#g)" opacity="0.95" />
              <text x="100" y="145" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="700">SkillSync</text>
            </svg>
            <p className={`mt-4 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Uma maneira mais humana de encontrar talentos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
