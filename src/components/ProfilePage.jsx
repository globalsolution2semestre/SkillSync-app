import React from 'react';

export default function ProfilePage({ profile, darkMode, setPage }) {
  if (!profile) {
    return (
      <div className={`pt-24 min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="max-w-2xl p-8 rounded-lg bg-gray-800 text-white">
          <p>Perfil não encontrado.</p>
          <button onClick={() => setPage('home')} className="mt-4 bg-purple-600 px-4 py-2 rounded">Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-24 pb-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Cover */}
        <div className="relative h-44 w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&q=80&auto=format&fit=crop')" }} />
          <div className={`absolute inset-0 ${darkMode ? 'bg-black/45' : 'bg-gradient-to-b from-transparent to-white/60'}`} />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start md:items-center md:space-x-6">
            <img src={profile.foto} alt={profile.nome} className={`w-28 h-28 rounded-full -mt-16 md:mt-0 ${darkMode ? 'border-4 border-purple-500 shadow-lg' : 'ring-4 ring-white shadow-md'}`} />
            <div className="flex-1 mt-2 md:mt-0">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl md:text-3xl font-bold">{profile.nome}</h1>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-50 text-blue-700">Adicionar selo de verificação</span>
                <div className="ml-auto hidden md:block">
                  <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-800">{profile.area}</span>
                </div>
              </div>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{profile.cargo} {profile.habilidadesTecnicas && <span className="hidden md:inline">| {profile.habilidadesTecnicas.slice(0,6).join(' | ')}</span>}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>{profile.localizacao} · Informação de contato</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-full font-semibold`}>Tenho interesse em...</button>
                <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} border px-4 py-2 rounded-full`}>Adicionar seção ao perfil</button>
                <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} border px-4 py-2 rounded-full`}>Aprimorar perfil</button>
                <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} border px-4 py-2 rounded-full`}>Recursos</button>
              </div>

            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 rounded-lg`}>
                <h3 className="font-semibold mb-2">Buscando emprego</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Cargos de Estagiário de TI e Engenheiro de software júnior</p>
                <a className="text-sm text-blue-600 hover:underline mt-2 inline-block">Exibir detalhes</a>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mt-6 p-4 rounded-lg shadow-sm`}>
                <h3 className="font-semibold mb-2">Sobre</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{profile.resumo}</p>
              </div>

              {/* Skills */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mt-6 p-4 rounded-lg shadow-sm`}>
                <h3 className="font-semibold mb-3">Habilidades Técnicas</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.habilidadesTecnicas.map(s => (
                    <span key={s} className={`${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full text-sm`}>{s}</span>
                  ))}
                </div>
              </div>

            </div>

            <aside>
              <div className={`${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'} p-4 rounded-lg` }>
                <p className="text-sm">+ de 500 conexões</p>
                <div className="mt-4">
                  <img src="https://placehold.co/160x100/000000/ffffff?text=FIAP" alt="empresa" className="w-24 h-10 object-contain" />
                </div>
              </div>

              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} mt-6 p-4 rounded-lg shadow-sm`}>
                <button className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'} w-full text-white px-4 py-2 rounded`}>Enviar Mensagem</button>
                <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} w-full mt-3 border px-4 py-2 rounded`}>Conectar</button>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}
