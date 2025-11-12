import React, { useState, useEffect } from 'react';
import { profissionaisData } from './data/profissionais';

function Navbar({ setPage, isLoggedIn, setIsLoggedIn, darkMode, toggleDarkMode }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('home');
  };

  return (
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
              onClick={() => setPage('login')}
              className="bg-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Entrar
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Sair
            </button>
          )}
          <div className="md:hidden">
            {/* Menu Hamburguer (pode ser implementado) */}
          </div>
        </div>
      </div>
    </nav>
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

/**
 * Componente: PorqueSkillSync
 * Descrição: Seção "Porque o SkillSync".
 */
function PorqueSkillSync({ darkMode }) {
  return (
    <div className={`pt-24 pb-16 px-4 md:px-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Porque escolher a SkillSync?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ValuePropCard
            title="Talentos Verificados"
            description="Nossa plataforma pré-seleciona profissionais para garantir que você encontre apenas os melhores talentos."
          />
          <ValuePropCard
            title="Conexão Direta"
            description="Envie mensagens e agende entrevistas diretamente pela plataforma, sem intermediários."
          />
          <ValuePropCard
            title="Foco no Futuro"
            description="Perfis detalhados com foco em hard e soft skills, prontos para os desafios do amanhã."
          />
        </div>
      </div>
    </div>
  );
}

function ValuePropCard({ title, description }) {
  return (
    <div className="bg-purple-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-3 text-purple-800 dark:text-purple-300">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}

/**
 * Componente: LoginPage
 * Descrição: Página de "fake login".
 */
function LoginPage({ setPage, setIsLoggedIn, darkMode }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Em um app real, aqui haveria uma chamada de API
    setIsLoggedIn(true);
    setPage('profissionais'); // Redireciona para a página de profissionais após o login
  };

  return (
    <div className={`flex items-center justify-center min-h-screen pt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className={`p-10 rounded-xl shadow-2xl w-full max-w-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className="text-3xl font-bold text-center mb-8">Bem-vindo(a) de volta!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              defaultValue="usuario@skillsync.com"
              className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Senha</label>
            <input 
              type="password" 
              id="password" 
              defaultValue="123456"
              className={`w-full p-3 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Entrar
          </button>
          <p className="text-center mt-6 text-sm">
            Não tem uma conta? 
            <span className="text-purple-600 hover:underline cursor-pointer ml-1">
              Crie um perfil (simulado)
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

/**
 * Componente: ProfissionaisPage
 * Descrição: Página que lista todos os profissionais.
 */
function ProfissionaisPage({ setModalProfile, darkMode }) {
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
    <div className={`pt-24 pb-16 px-4 md:px-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-800'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Encontre os Melhores Profissionais</h2>
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
function ProfessionalCard({ profile, setModalProfile, darkMode }) {
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
          onClick={() => setModalProfile(profile)}
          className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Ver Perfil
        </button>
        <button className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}>
          Conectar
        </button>
      </div>
    </div>
  );
}

/**
 * Componente: ProfileModal
 * Descrição: Modal com os detalhes do profissional (simulando image_82f4da.png).
 */
function ProfileModal({ profile, closeModal, darkMode }) {
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
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

  if (!profile) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-70"
      onClick={closeModal}
    >
      <div 
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-8 shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
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
            className="w-32 h-32 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 border-4 border-purple-500"
          />
          <div>
            <h2 className="text-4xl font-bold">{profile.nome}</h2>
            <p className="text-2xl text-purple-500 dark:text-purple-300 mb-2">{profile.cargo}</p>
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
function Footer({ darkMode }) {
  return (
    <footer id="footer" className={`py-16 px-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-gray-200'}`}>
      <div className="max-w-7xl mx-auto mb-8 px-4 md:px-0">
        <p className={`text-xl md:text-2xl font-semibold text-left md:text-left ${darkMode ? 'text-gray-400' : 'text-gray-200'}`}>
          Entre em contato conosco a partir dos links abaixo
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4 md:px-12">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-4 decoration-2">SkillSync</h3>
          <p>Conectando talentos, impulsionando o futuro.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-purple-300 hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-2 decoration-2">Profissionais</a></li>
            <li className="mb-2"><a href="#" className="hover:text-purple-300 hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-2 decoration-2">Porque o SkillSync?</a></li>
            <li className="mb-2"><a href="#" className="hover:text-purple-300 ">Criar Perfil</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white hover:underline decoration-purple-500 dark:decoration-purple-300 underline-offset-4 decoration-2">Suporte</h4>
          <p className="mb-2">Email: <a href="mailto:suporte@skillsync.com" className="hover:text-purple-300">suporte@skillsync.com</a></p>
          <p className="mb-4">Telefone: (11) 99999-9999</p>
          <div className="flex space-x-4">
            {/* Adicionar ícones de redes sociais */}
            <a href="#" className="hover:text-purple-300">Twitter</a>
            <a href="#" className="hover:text-purple-300">LinkedIn</a>
            <a href="#" className="hover:text-purple-300">Instagram</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 border-t border-gray-700 pt-8">
        <p>&copy; {new Date().getFullYear()} SkillSync. Todos os direitos reservados.</p>
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
  
  // Estado para Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Homepage setPage={setPage} darkMode={darkMode} />;
      case 'profissionais':
        return <ProfissionaisPage setModalProfile={setModalProfile} darkMode={darkMode} />;
      case 'porque':
        return <PorqueSkillSync darkMode={darkMode} />;
      case 'login':
        return <LoginPage setPage={setPage} setIsLoggedIn={setIsLoggedIn} darkMode={darkMode} />;
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
      />
      
      <main>
        {renderPage()}
      </main>
      
      <Footer darkMode={darkMode} />
      
      {modalProfile && (
        <ProfileModal 
          profile={modalProfile} 
          closeModal={() => setModalProfile(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
}