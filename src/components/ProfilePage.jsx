import React, { useState, useEffect } from 'react';

export default function ProfilePage({ profile, currentUser, setSelectedProfile, darkMode, setPage, setModalProfile, setModalOpenWithMessage, connectedProfiles = [], toggleConnect }) {
  if (!profile) {
    return (
      <div className={`pt-24 min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
          <div className="max-w-2xl p-8 rounded-lg bg-gray-800 text-white">
          <p>Perfil não encontrado.</p>
          <button onClick={() => setPage('home')} className="mt-4 bg-purple-600 px-4 py-2 rounded text-white">Voltar</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-24 pb-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`max-w-3xl md:max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Cover */}
        <div className="relative h-44 w-full">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&q=80&auto=format&fit=crop')" }} />
          <div className={`absolute inset-0 ${darkMode ? 'bg-black/45' : 'bg-gradient-to-b from-transparent to-white/60'}`} />
        </div>

        <div className="px-4 py-6 md:p-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <img src={profile.foto} alt={profile.nome} className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto ${darkMode ? 'border-4 border-purple-500 shadow-lg' : 'ring-4 ring-white shadow-md'}`} />
            </div>

            <div className="w-full text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center items-center md:space-x-4 space-y-2 md:space-y-0 justify-center md:justify-start">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl md:text-3xl font-bold break-words flex items-center gap-2">{profile.nome}
                    {(profile.isEvaluator || (currentUser && currentUser.isEvaluator)) && (
                      <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="rgba(250,204,21,0.12)" />
                        <path d="M9 12.5l1.8 1.8L15 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </h1>
                  {(profile.isEvaluator || (currentUser && currentUser.isEvaluator)) && (
                    <span className="text-sm px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 border border-yellow-300">Avaliador</span>
                  )}
                </div>
                <div className="ml-auto hidden md:block">
                  <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-800">{profile.area}</span>
                </div>
              </div>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>{profile.cargo} {profile.habilidadesTecnicas && <span className="hidden md:inline">| {profile.habilidadesTecnicas.slice(0,6).join(' | ')}</span>}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-2`}>{profile.localizacao} · Informação de contato</p>

              <ProfileActions
                profile={profile}
                currentUser={currentUser}
                setSelectedProfile={setSelectedProfile}
                darkMode={darkMode}
                setPage={setPage}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-4 rounded-lg`}>
                <h3 className="font-semibold mb-2">Buscando emprego</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Cargos de Estagiário de TI e Engenheiro de software júnior</p>
                <a className="text-sm text-teal-600 hover:underline mt-2 inline-block">Exibir detalhes</a>
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
                <button
                  onClick={() => {
                    if (setModalProfile && setModalOpenWithMessage) {
                      setModalProfile(profile);
                      setModalOpenWithMessage(true);
                    }
                  }}
                  className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-teal-600 hover:bg-teal-700'} w-full text-white px-4 py-2 rounded`}
                >Enviar Mensagem</button>
                <button
                  onClick={() => toggleConnect && toggleConnect(profile.id)}
                  className={`${connectedProfiles && connectedProfiles.includes(profile.id) ? 'bg-green-600 text-white' : (darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700')} w-full mt-3 border px-4 py-2 rounded`}
                >{connectedProfiles && connectedProfiles.includes(profile.id) ? 'Conectado' : 'Conectar'}</button>
              </div>
            </aside>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProfileActions({ profile, currentUser, setSelectedProfile, darkMode, setPage }) {
  const isOwner = currentUser && profile && currentUser.id === profile.id;
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({});
  const [imageValid, setImageValid] = useState(true);

  useEffect(() => {
    if (profile) {
      setForm({
        nome: profile.nome || '',
        cargo: profile.cargo || '',
        resumo: profile.resumo || '',
        foto: profile.foto || '',
        habilidades: (profile.habilidadesTecnicas || []).join(', '),
      });
    }
  }, [profile]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const save = (e) => {
    e.preventDefault();
    if (!setSelectedProfile) return setEditing(false);

    const updated = {
      ...profile,
      nome: form.nome,
      cargo: form.cargo,
      resumo: form.resumo,
      foto: form.foto,
      habilidadesTecnicas: form.habilidades.split(',').map(s => s.trim()).filter(Boolean),
    };

    setSelectedProfile(updated);
    // Persist to local users.json via backend API (server.js)
    fetch('http://localhost:4000/api/users/' + (profile.id || updated.email), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    }).then(res => {
      if (!res.ok) console.warn('failed to persist user');
    }).catch(err => console.error(err));

    setEditing(false);
    setPage && setPage('profile');
  };

  if (editing) {
    return (
      <form onSubmit={save} className="mt-4 p-4 w-full max-w-full">
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="text-sm font-medium block mb-1">Nome (ex.: Professor Lucas)</label>
            <input name="nome" value={form.nome} onChange={handleChange} className="p-2 rounded border bg-transparent w-full" placeholder="Nome" />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Cargo / Título (ex.: Professor - FIAP)</label>
            <input name="cargo" value={form.cargo} onChange={handleChange} className="p-2 rounded border bg-transparent w-full" placeholder="Cargo" />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Foto (URL) (ex.: https://placehold.co/100x100)</label>
            <input name="foto" value={form.foto} onChange={handleChange} className="p-2 rounded border bg-transparent w-full" placeholder="URL da foto" />
            <p className="text-xs text-gray-400 mt-1">Dica: alguns provedores (ex.: LinkedIn) bloqueiam hotlink. Use URLs diretas (imgur, placehold.co, raw.githubusercontent.com).</p>
            {form.foto && (
              <div className="mt-2">
                <div className="w-24 h-24 rounded overflow-hidden border">
                  <img
                    src={form.foto}
                    alt="preview"
                    onLoad={() => setImageValid(true)}
                    onError={() => setImageValid(false)}
                    className="object-cover w-full h-full"
                  />
                </div>
                {!imageValid && (
                  <p className="text-xs text-red-400 mt-1">Não foi possível carregar a imagem — verifique a URL ou use um host diferente.</p>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Resumo / Descrição (ex.: Breve descrição sobre você)</label>
            <textarea name="resumo" value={form.resumo} onChange={handleChange} className="p-2 rounded border bg-transparent w-full" placeholder="Resumo" rows={4} />
          </div>

          <div>
            <label className="text-sm font-medium block mb-1">Habilidades (separadas por vírgula) (ex.: Ensino, Mentoria, Desenvolvimento Web)</label>
            <input name="habilidades" value={form.habilidades} onChange={handleChange} className="p-2 rounded border bg-transparent w-full" placeholder="Habilidades (separadas por vírgula)" />
          </div>

          <div className="flex gap-3">
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Salvar</button>
            <button type="button" onClick={() => setEditing(false)} className="border px-4 py-2 rounded">Cancelar</button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
      <button className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-teal-600 hover:bg-teal-700'} text-white px-4 py-2 rounded-full font-semibold`} onClick={() => setPage && setPage('profissionais')}>Tenho interesse em...</button>
      <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} border px-4 py-2 rounded-full`} onClick={() => setPage && setPage('profissionais')}>Adicionar seção ao perfil</button>
      {isOwner && (
        <button className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'} px-4 py-2 rounded-full`} onClick={() => setEditing(true)}>Editar Perfil</button>
      )}
      <button className={`${darkMode ? 'border-gray-700 text-gray-200' : 'border-gray-300 text-gray-700'} border px-4 py-2 rounded-full`} onClick={() => setPage && setPage('home')}>Voltar</button>
    </div>
  );
}
