import React, { useState, useEffect } from 'react';
import { profissionaisData } from './data/profissionais';
import ProfilePage from './components/ProfilePage';

function Navbar({ setPage, isLoggedIn, setIsLoggedIn, darkMode, toggleDarkMode, selectedProfile, setSelectedProfile }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('home');
    setMobileOpen(false);
  };

  const openProfile = () => {
    if (selectedProfile) setPage('profile');
    setMobileOpen(false);
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 shadow-md transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 
          className="text-3xl font-bold cursor-pointer" 
          onClick={() => setPage('home')}
        >
          SkillSync
        </h1>
        <div className="hidden md:flex items-center space-x-6">
          <NavItem onClick={() => setPage('profissionais')} underline>Profissionais</NavItem>
          <NavItem onClick={() => setPage('porque')} underline>Porque o SkillSync?</NavItem>
          <NavItem href="#footer" underline>Suporte</NavItem>
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <button
              onClick={() => { setPage('login'); setMobileOpen(false); }}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Entrar
            </button>
          ) : (
            <>
              {/* Avatar clicável: leva ao perfil selecionado */}
              {selectedProfile ? (
                <img
                  src={selectedProfile.foto}
                  alt={selectedProfile.nome}
                  onClick={() => {
                    // já deve existir selectedProfile; navega para a página de perfil
                    openProfile();
                  }}
                  className={`w-10 h-10 rounded-full object-cover cursor-pointer ring-2 ${darkMode ? 'ring-gray-700' : 'ring-white'}`}
                />
              ) : (
                <button
                  onClick={() => setPage('profile')}
                  className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-semibold"
                >
                  ?
                </button>
              )}

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Sair
              </button>
            </>
          )}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
              className={`p-2 rounded-md ${darkMode ? 'text-white' : 'text-gray-700'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Mobile menu panel */}
    {mobileOpen && (
      <div className={`md:hidden fixed inset-0 z-40 ${darkMode ? 'bg-black/40' : 'bg-black/20'}`} onClick={() => setMobileOpen(false)}>
        <div onClick={(e) => e.stopPropagation()} className={`absolute top-16 left-4 right-4 p-4 rounded-lg ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
          <div className="flex flex-col space-y-3">
            <button onClick={() => { setPage('profissionais'); setMobileOpen(false); }} className="text-left font-medium">Profissionais</button>
            <button onClick={() => { setPage('porque'); setMobileOpen(false); }} className="text-left font-medium">Porque o SkillSync?</button>
            <a href="#footer" onClick={() => setMobileOpen(false)} className="text-left font-medium">Suporte</a>
            <button onClick={() => { toggleDarkMode(); setMobileOpen(false); }} className="text-left">{darkMode ? 'Modo claro' : 'Modo escuro'}</button>
            {!isLoggedIn ? (
              <button onClick={() => { setPage('login'); setMobileOpen(false); }} className="bg-purple-600 text-white px-3 py-2 rounded">Entrar</button>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {selectedProfile ? (
                    <img src={selectedProfile.foto} alt={selectedProfile.nome} onClick={openProfile} className="w-10 h-10 rounded-full object-cover cursor-pointer" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">?</div>
                  )}
                  <div>
                    <div className="font-semibold">{selectedProfile ? selectedProfile.nome : 'Perfil'}</div>
                    <div className="text-sm text-gray-500">Ver perfil</div>
                  </div>
                </div>
                <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-2 rounded">Sair</button>
              </div>
            )}
          </div>
        </div>
      </div>
    )}
    </>
  );
}

// Sub-componente para os itens da Navbar
function NavItem({ children, onClick, href, underline }) {
  const base = "font-medium text-lg hover:text-purple-600 transition-colors cursor-pointer";
    const underlineClasses = underline ? 'hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-4 decoration-2' : '';

  const classes = `${base} ${underlineClasses}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <span onClick={onClick} className={classes}>
      {children}
    </span>
  );
}

/**
 * Componente: Homepage
 * Descrição: Página inicial do site.
 */
function Homepage({ setPage, darkMode }) {
  return (
    <div className={`h-screen min-h-[700px] pt-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="md:w-1/2 text-center md:text-left p-8">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Encontre os Profissionais do Futuro, Hoje.
          </h2>
          <p className={`text-lg md:text-xl mb-8 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A SkillSync conecta você a uma rede exclusiva de talentos verificados em tecnologia, design e dados.
          </p>
          <button
            onClick={() => setPage('profissionais')}
            className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-transform hover:scale-105"
          >
            Explorar Profissionais
          </button>
        </div>

        {/* Imagem hero à direita em telas médias/maiores */}
        <div className="hidden md:block md:w-1/2 p-8">
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



function ValuePropCard({ title, description, darkMode }) {
  return (
    <div className="relative bg-purple-50 dark:bg-gray-800 p-12 rounded-lg shadow-lg flex flex-col items-center text-center transform-gpu transition-transform hover:scale-[1.02]">
      <div className={`absolute left-1/2 -top-6 transform -translate-x-1/2 w-12 h-12 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-purple-600'} flex items-center justify-center text-white shadow-md`}>
        <span className="text-xl font-bold">•</span>
      </div>
      <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-purple-800 dark:text-purple-300 leading-tight">{title}</h3>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl">{description}</p>
    </div>
  );
}

function PorqueSkillSync({ darkMode }) {
  return (
    <div className={`relative pt-24 pb-20 px-4 md:px-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Decorative blurred background image that fills the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80&auto=format&fit=crop')" }}
          className="absolute inset-0 bg-cover bg-center filter blur-[1px] opacity-30"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/40' : 'bg-white/20'}`} />
      </div>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-12 ${darkMode ? 'text-white' : 'text-purple-900'}`}>
          Porque escolher a SkillSync?
        </h2>

        <div className="relative">
          <div className={`hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 ${darkMode ? 'bg-gray-700' : 'bg-purple-100'}`} />
          <div className={`md:hidden absolute top-0 bottom-0 left-1/2 w-1 transform -translate-x-1/2 ${darkMode ? 'bg-gray-700' : 'bg-purple-100'}`} />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <ValuePropCard
              title="Talentos Verificados"
              description="Nossa plataforma pré-seleciona profissionais para garantir que você encontre apenas os melhores talentos."
              darkMode={darkMode}
            />
            <ValuePropCard
              title="Conexão Direta"
              description="Envie mensagens e agende entrevistas diretamente pela plataforma, sem intermediários."
              darkMode={darkMode}
            />
            <ValuePropCard
              title="Foco no Futuro"
              description="Perfis detalhados com foco em hard e soft skills, prontos para os desafios do amanhã."
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPage({ setPage, setIsLoggedIn, setSelectedProfile, darkMode }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // First, try to match a local professor evaluator account by localEmail/localPassword
    const localProf = profissionaisData.find(p => p.localEmail === email && p.localPassword === password);
    if (localProf) {
      setIsLoggedIn(true);
      // Use the embedded local snapshot (no backend)
      const merged = { ...localProf, ...(localProf.linkedinSnapshot || {}), isEvaluator: !!localProf.isEvaluator };
      setSelectedProfile(merged);
      setPage('profile');
      return;
    }

    // DEV professor account (institutional)
    const DEV_USER_EMAIL = 'professorfiap@skillsync.com';
    const DEV_USER_PASSWORD = 'ProfFiap@2025';

    if (email === DEV_USER_EMAIL && password === DEV_USER_PASSWORD) {
      const prof = profissionaisData.find(p => p.email === email) || profissionaisData.find(p => p.id === 61) || profissionaisData[0] || null;
      setIsLoggedIn(true);
      setSelectedProfile(prof);
      setPage('profile');
    } else {
      alert('Credenciais inválidas. Use a conta institucional do professor para acessar.');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className={`w-full max-w-md ${darkMode ? 'bg-gray-800/70' : 'bg-white'} backdrop-blur-md p-8 rounded-2xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg mb-3">SS</div>
          <h2 className="text-2xl font-semibold">Entrar no Painel</h2>
          <p className="text-sm text-gray-400 mt-1">Acesso restrito a professores (conta institucional)</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email institucional</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="professorfiap@skillsync.com"
              className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="password">Senha</label>
            <div className="relative">
              <input
                name="password"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} pr-12`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.98 9.98 0 012.09-5.8M3 3l18 18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.88 9.88A3 3 0 0114.12 14.12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold hover:opacity-95 transition">
            Entrar
          </button>

          <p className="text-xs text-center text-gray-400">Credenciais de desenvolvimento: use a conta institucional do professor. Não compartilhe em produção.</p>
        </form>
      </div>
    </div>
  );
}

/**
 * Componente: ProfissionaisPage
 * Descrição: Página que lista todos os profissionais.
 */
function ProfissionaisPage({ setModalProfile, darkMode, setSelectedProfile, setPage, connectedProfiles, toggleConnect, isLoggedIn, selectedProfile }) {
  // Estados para filtros (pode ser expandido)
  const [searchTerm, setSearchTerm] = useState('');
  const [filterArea, setFilterArea] = useState('');
  const [filterCidade, setFilterCidade] = useState('');
  
  const filteredProfissionais = profissionaisData.filter(p => {
    const nameMatch = p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      p.cargo.toLowerCase().includes(searchTerm.toLowerCase());
    const areaMatch = filterArea === '' || p.area === filterArea;
    const cidadeMatch = filterCidade === '' || p.localizacao === filterCidade;
    
    return nameMatch && areaMatch && cidadeMatch;
  });

  return (
    <div className={`pt-24 pb-20 px-4 md:px-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-purple-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-purple-900'}`}>
          Encontre os Melhores Profissionais
        </h2>
        <p className={`text-lg text-center mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Explore uma rede de profissionais talentosos em diversas áreas e tecnologias.
        </p>
        
        {/* Barra de Busca e Filtros */}
        <div className={`p-4 rounded-lg shadow-md mb-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              placeholder="Buscar por nome ou cargo..."
              className={`flex-grow p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Adicionar Dropdowns de Filtro Aqui */}
            <select 
              value={filterArea}
              onChange={(e) => setFilterArea(e.target.value)}
              className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            >
              <option value="">Todas as áreas</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
              <option value="Infraestrutura">Infraestrutura</option>
              <option value="Gestão">Gestão</option>
            </select>
            <select 
              value={filterCidade}
              onChange={(e) => setFilterCidade(e.target.value)}
              className={`p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            >
              <option value="">Todas as cidades</option>
              <option value="São Paulo/SP">São Paulo/SP</option>
              <option value="Rio de Janeiro/RJ">Rio de Janeiro/RJ</option>
              <option value="Belo Horizonte/MG">Belo Horizonte/MG</option>
              <option value="Porto Alegre/RS">Porto Alegre/RS</option>
              <option value="Curitiba/PR">Curitiba/PR</option>
              <option value="Recife/PE">Recife/PE</option>
            </select>
            <button className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} font-medium`}>
              Mais Filtros
            </button>
          </div>
        </div>
        
        {/* Grid de Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfissionais.map(profile => (
            <ProfessionalCard 
              key={profile.id} 
              profile={profile} 
              setModalProfile={setModalProfile}
              darkMode={darkMode}
              setSelectedProfile={setSelectedProfile}
              setPage={setPage}
              connectedProfiles={connectedProfiles}
              toggleConnect={toggleConnect}
              isLoggedIn={isLoggedIn}
              currentProfile={selectedProfile}
            />
          ))}
        </div>
        
        {filteredProfissionais.length === 0 && (
          <p className="text-center text-xl mt-10">Nenhum profissional encontrado.</p>
        )}
        
        <p className="text-center mt-12 text-gray-500">
          {filteredProfissionais.length} profissionais encontrados.
        </p>
      </div>
    </div>
  );
}

/**
 * Componente: ProfessionalCard
 * Descrição: Card individual de um profissional na lista.
 */
function ProfessionalCard({ profile, setModalProfile, darkMode, setSelectedProfile, setPage, connectedProfiles = [], toggleConnect, isLoggedIn, currentProfile }) {
  return (
    <div className={`p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02] ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center mb-4">
        <img 
          src={profile.foto} 
          alt={profile.nome} 
          className="w-16 h-16 rounded-full mr-4 border-2 border-purple-500"
          onError={(e) => e.target.src = 'https://placehold.co/100x100/CCCCCC/FFFFFF?text=??'}
        />
        <div>
          <h3 className="text-xl font-bold">{profile.nome}</h3>
          <p className={`${darkMode ? 'text-purple-300' : 'text-purple-600'} font-medium`}>{profile.cargo}</p>
        </div>
      </div>
      <p className={`mb-4 h-20 overflow-hidden ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{profile.resumo}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {profile.habilidadesTecnicas.slice(0, 3).map(skill => (
          <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
            {skill}
          </span>
        ))}
        {profile.habilidadesTecnicas.length > 3 && (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-300 text-gray-600'}`}>
            +{profile.habilidadesTecnicas.length - 3}
          </span>
        )}
      </div>
        <div className="flex gap-4">
        <button
            onClick={() => {
            // If a professor evaluator is logged in, do NOT replace their profile.
            // Instead, open a modal to view the clicked profile.
            const isProfessorViewing = isLoggedIn && currentProfile && !!currentProfile.isEvaluator;

            if (isProfessorViewing) {
              if (setModalProfile) setModalProfile(profile);
            } else {
              if (setSelectedProfile && setPage) {
                setSelectedProfile(profile);
                setPage('profile');
              } else if (setModalProfile) {
                setModalProfile(profile);
              }
            }
          }}
          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Ver Perfil
        </button>
        <button
          onClick={() => toggleConnect && toggleConnect(profile.id)}
          className={`${connectedProfiles && connectedProfiles.includes(profile.id) ? 'flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold' : 'flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ' + (darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300')}`}
        >
          {connectedProfiles && connectedProfiles.includes(profile.id) ? 'Conectado' : 'Conectar'}
        </button>
      </div>
    </div>
  );
}

/**
 * Componente: ProfileModal
 * Descrição: Modal com os detalhes do profissional (simulando image_82f4da.png).
 */
function ProfileModal({ profile, closeModal, darkMode, openWithMessage }) {
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(!!openWithMessage);
  const [recommended, setRecommended] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Lógica simulada
    setMessageSent(true);
    
    setTimeout(() => {
      setMessage('');
      setShowForm(false);
      setMessageSent(false);
    }, 3000); // Reseta o formulário após 3s
  };
  
  const handleRecommend = () => {
    setRecommended(true);
    // Lógica simulada
    setTimeout(() => setRecommended(false), 3000); // Reseta após 3s
  };

  useEffect(() => {
    if (openWithMessage) setShowForm(true);
  }, [openWithMessage]);

  if (!profile) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-70"
      onClick={closeModal}
    >
      <div 
        className={`relative w-full max-w-xl sm:max-w-3xl md:max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-6 sm:p-8 shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
      >
        <button 
          onClick={closeModal}
          className={`absolute top-4 right-4 text-3xl font-bold ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
        >
          &times;
        </button>
        
        {/* Cabeçalho do Perfil */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img 
            src={profile.foto} 
            alt={profile.nome} 
            className="w-16 h-16 md:w-32 md:h-32 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 border-4 border-purple-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">{profile.nome}</h2>
            <p className="text-lg md:text-2xl text-purple-500 dark:text-purple-300 mb-2">{profile.cargo}</p>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                {profile.area}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                {profile.localizacao}
              </span>
            </div>
          </div>
        </div>
        
        <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{profile.resumo}</p>
        
        {/* Botões de Ação */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={handleRecommend}
            disabled={recommended}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
              recommended 
              ? 'bg-green-600 text-white' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {recommended ? 'Recomendado! 👍' : 'Recomendar Profissional'}
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`px-6 py-3 rounded-lg font-bold text-lg transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {showForm ? 'Fechar Mensagem' : 'Enviar Mensagem'}
          </button>
        </div>
        
        {/* Formulário de Mensagem (Simulado) */}
        {showForm && (
          <form onSubmit={handleSendMessage} className={`p-4 rounded-lg mb-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {!messageSent ? (
              <>
                <h3 className="text-xl font-semibold mb-3">Mensagem para {profile.nome}</h3>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  rows="4"
                  className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="mt-3 bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Enviar
                </button>
              </>
            ) : (
              <div className={`text-center p-4 rounded-lg ${darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-700'}`}>
                <h4 className="font-semibold">Mensagem enviada com sucesso!</h4>
                <p>Você receberá uma resposta em breve.</p>
              </div>
            )}
          </form>
        )}
        
        {/* Seções Detalhadas */}
        <ProfileSection title="Habilidades Técnicas">
          <div className="flex flex-wrap gap-2">
            {profile.habilidadesTecnicas.map(skill => (
              <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                {skill}
              </span>
            ))}
          </div>
        </ProfileSection>
        
        <ProfileSection title="Soft Skills">
          <div className="flex flex-wrap gap-2">
            {profile.softSkills.map(skill => (
              <span key={skill} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                {skill}
              </span>
            ))}
          </div>
        </ProfileSection>
        
        <ProfileSection title="Experiências Profissionais">
          {profile.experiencias.map((exp, index) => (
            <div key={index} className={`p-4 rounded-lg mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg font-semibold">{exp.cargo} - {exp.empresa}</h4>
                <span className="text-sm text-gray-500">{exp.inicio} - {exp.fim}</span>
              </div>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </ProfileSection>
        
        <ProfileSection title="Formação Acadêmica">
          {profile.formacao.map((form, index) => (
            <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <h4 className="text-lg font-semibold">{form.curso}</h4>
              <p>{form.instituicao} - {form.ano}</p>
            </div>
          ))}
        </ProfileSection>
        
        <ProfileSection title="Projetos">
          {profile.projetos.map((proj, index) => (
            <div key={index} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-purple-600 dark:text-purple-300 hover:underline">
                {proj.titulo}
              </a>
              <p>{proj.descricao}</p>
            </div>
          ))}
        </ProfileSection>
        
      </div>
    </div>
  );
}

// Sub-componente para seções do modal
function ProfileSection({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-purple-500">{title}</h3>
      {children}
    </div>
  );
}

/**
 * Componente: Footer
 * Descrição: Rodapé do site, alvo do link "Suporte".
 */
function Footer({ darkMode, setPage }) {
  return (
    <footer id="footer" className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-200'}`}>
      <div className="max-w-7xl mx-auto mb-8 px-4 md:px-0">
        <p className={`text-2xl md:text-3xl font-semibold text-left md:text-left ${darkMode ? 'text-gray-400' : 'text-gray-200'}`}>
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-12">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-4 decoration-2">SkillSync</h3>
          <p>Conectando talentos, impulsionando o futuro.</p>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white">Links Rápidos</h4>
          <ul>
            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); if (setPage) setPage('profissionais'); }} className="hover:text-purple-300 hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-2 decoration-2 text-base md:text-lg">Profissionais</a></li>
            <li className="mb-2"><a href="#" onClick={(e) => { e.preventDefault(); if (setPage) setPage('porque'); }} className="hover:text-purple-300 hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-2 decoration-2 text-base md:text-lg">Porque o SkillSync?</a></li>
            <li className="mb-2"><a href="#" className="hover:text-purple-300 text-base md:text-lg">Criar Perfil</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-4 decoration-2">Suporte</h4>
          <p className="mb-2 text-base md:text-lg">Email: <a href="mailto:suporte@skillsync.com" className="hover:text-purple-300">suporte@skillsync.com</a></p>
          <p className="mb-4 text-base md:text-lg">Telefone: (11) 99999-9999</p>
          <div className="flex space-x-4">
            {/* Adicionar ícones de redes sociais */}
            <a href="https://github.com/globalsolution2semestre" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 text-lg">Github</a>
            <a href="https://www.linkedin.com/school/fiap/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 text-lg">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-gray-700 pt-8">
        <p className="text-base md:text-lg font-medium">&copy; {new Date().getFullYear()} SkillSync. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


/**
 * Componente: App (Principal)
 * Descrição: Gerencia o estado global e a renderização das páginas.
 */
export default function App() {
  // Estado para navegação
  const [page, setPage] = useState('home'); // 'home', 'profissionais', 'porque', 'login'
  
  // Estado de "fake login"
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Estado para o modal
  const [modalProfile, setModalProfile] = useState(null);
  // Estado para perfil selecionado (página de perfil após login)
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  // Estado para Dark Mode (padrão: true)
  const [darkMode, setDarkMode] = useState(true);

  // Estado para conexões (simulado)
  const [connectedProfiles, setConnectedProfiles] = useState([]);

  // Estado para abrir modal já com o formulário de mensagem
  const [modalOpenWithMessage, setModalOpenWithMessage] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const toggleConnect = (profileId) => {
    setConnectedProfiles(prev => {
      if (prev.includes(profileId)) return prev.filter(id => id !== profileId);
      return [...prev, profileId];
    });
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Homepage setPage={setPage} darkMode={darkMode} />;
      case 'profissionais':
        return <ProfissionaisPage setModalProfile={setModalProfile} darkMode={darkMode} setSelectedProfile={setSelectedProfile} setPage={setPage} connectedProfiles={connectedProfiles} toggleConnect={toggleConnect} isLoggedIn={isLoggedIn} selectedProfile={selectedProfile} />;
      case 'porque':
        return <PorqueSkillSync darkMode={darkMode} />;
      case 'login':
        return <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} setSelectedProfile={setSelectedProfile} darkMode={darkMode} />;
      case 'profile':
        return <ProfilePage profile={selectedProfile} darkMode={darkMode} setPage={setPage} setModalProfile={setModalProfile} setModalOpenWithMessage={setModalOpenWithMessage} connectedProfiles={connectedProfiles} toggleConnect={toggleConnect} />;
      default:
        return <Homepage setPage={setPage} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Navbar 
        setPage={setPage} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      
      <main>
        {renderPage()}
      </main>
      
      <SupportCallout darkMode={darkMode} />
      <Footer darkMode={darkMode} setPage={setPage} />
      
      {modalProfile && (
        <ProfileModal 
          profile={modalProfile} 
          closeModal={() => { setModalProfile(null); setModalOpenWithMessage(false); }}
          darkMode={darkMode}
          openWithMessage={modalOpenWithMessage}
        />
      )}
    </div>
  );
}

// Componente: SupportCallout
// Descrição: Bloco estilizado que direciona visualmente para o rodapé (footer)
function SupportCallout({ darkMode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0 -mt-12 mb-12">
      <div className={`rounded-2xl p-6 md:p-8 shadow-lg flex items-center justify-between gap-4 ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-purple-600 text-white'} relative z-20`}>
        <div>
          <h4 className="text-lg md:text-xl font-semibold">Precisa de ajuda?</h4>
          <p className="text-sm opacity-90 mt-1">Nosso suporte está pronto para ajudar com dúvidas e problemas.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#footer" className={`${darkMode ? 'text-purple-300 bg-transparent border border-purple-300 px-4 py-2 rounded-lg' : 'bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold'} inline-flex items-center gap-2 transition-all hover:scale-105`}> 
            Suporte
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}