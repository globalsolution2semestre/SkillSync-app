import React, { useState, useEffect } from 'react';

// --- Mock Data: Profissionais ---
// Em um projeto real, isso viria de um arquivo profissionais.json
const mockProfissionais = [
  {
    id: 1,
    nome: "Ana Silva",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=AS",
    cargo: "Engenheira de Software Sênior",
    resumo: "Especialista em desenvolvimento full-stack com 8 anos de experiência em React, Node.js e arquitetura de microsserviços.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Python", "JavaScript", "React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    softSkills: ["Liderança", "Comunicação", "Resolução de Problemas", "Trabalho em Equipe"],
    experiencias: [
      { empresa: "Tech Solutions", cargo: "Senior Developer", inicio: "2021-06", fim: "Atual", descricao: "Liderou equipe de 5 desenvolvedores em projetos de grande escala." },
      { empresa: "Web Innovate", cargo: "Pleno Developer", inicio: "2018-03", fim: "2021-05", descricao: "Desenvolvimento de aplicações web responsivas." }
    ],
    formacao: [
      { curso: "Bacharelado em Ciência da Computação", instituicao: "Universidade de São Paulo", ano: "2016" }
    ],
    projetos: [
      { titulo: "Plataforma E-commerce", link: "#", descricao: "Sistema completo de e-commerce com React e Node.js." }
    ],
    certificacoes: ["AWS Certified Developer"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }, { idioma: "Espanhol", nivel: "Intermediário" }],
    areaInteresses: ["IA ética", "Educação", "Computação Quântica"]
  },
  {
    id: 2,
    nome: "Carlos Santos",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=CS",
    cargo: "Product Designer",
    resumo: "Designer com foco em UX/UI e pesquisa de usuário, apaixonado por criar produtos intuitivos e acessíveis.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Sketch", "Adobe XD", "User Research", "Prototipagem"],
    softSkills: ["Empatia", "Colaboração", "Comunicação Visual"],
    experiencias: [
      { empresa: "Design Co.", cargo: "Lead Designer", inicio: "2020-01", fim: "Atual", descricao: "Liderança da equipe de design de produto." }
    ],
    formacao: [
      { curso: "Design Gráfico", instituicao: "Universidade Federal do Rio de Janeiro", ano: "2017" }
    ],
    projetos: [
      { titulo: "App de Meditação", link: "#", descricao: "Design e prototipagem de app mobile." }
    ],
    certificacoes: ["Certified UX Designer (NN/g)"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Acessibilidade", "Design Inclusivo"]
  },
  {
    id: 3,
    nome: "Mariana Oliveira",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=MO",
    cargo: "Data Scientist",
    resumo: "Cientista de dados com expertise em machine learning e análise preditiva. Focada em extrair insights de grandes volumes de dados.",
    localizacao: "Belo Horizonte/MG",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "SQL", "TensorFlow", "Pandas", "Scikit-learn"],
    softSkills: ["Pensamento Crítico", "Comunicação", "Curiosidade"],
    experiencias: [
      { empresa: "DataInsights", cargo: "Data Scientist", inicio: "2019-07", fim: "Atual", descricao: "Modelagem preditiva para o setor financeiro." }
    ],
    formacao: [
      { curso: "Mestrado em Ciência da Computação", instituicao: "UFMG", ano: "2019" },
      { curso: "Estatística", instituicao: "UFMG", ano: "2017" }
    ],
    projetos: [
      { titulo: "Modelo de Risco de Crédito", link: "#", descricao: "Desenvolvimento de modelo de ML para prever inadimplência." }
    ],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Machine Learning", "Big Data", "Fintech"]
  },
  {
    id: 4,
    nome: "Ricardo Lima",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=RL",
    cargo: "DevOps Engineer",
    resumo: "Especialista em infraestrutura cloud e automação de deployments, focado em CI/CD e monitoramento.",
    localizacao: "Porto Alegre/RS",
    area: "Infraestrutura",
    habilidadesTecnicas: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Prometheus"],
    softSkills: ["Colaboração", "Resiliência", "Foco em Resultados"],
    experiencias: [
      { empresa: "CloudFast", cargo: "DevOps Engineer", inicio: "2019-02", fim: "Atual", descricao: "Automação de pipelines CI/CD e gerenciamento de clusters K8s." }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "UFRGS", ano: "2018" }
    ],
    projetos: [
      { titulo: "Infraestrutura como Código", link: "#", descricao: "Migração de infraestrutura legada para AWS com Terraform." }
    ],
    certificacoes: ["AWS Certified DevOps Engineer", "CKA"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Cloud Computing", "Segurança", "Automação"]
  },
  {
    id: 5,
    nome: "Bruno Costa",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=BC",
    cargo: "Desenvolvedor Mobile (iOS/Android)",
    resumo: "Desenvolvedor mobile com 5 anos de experiência em React Native e Swift. Focado em performance e UX.",
    localizacao: "Curitiba/PR",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React Native", "Swift", "Kotlin", "Firebase", "Git"],
    softSkills: ["Proatividade", "Comunicação", "Adaptabilidade"],
    experiencias: [
      { empresa: "AppNext", cargo: "Mobile Developer", inicio: "2019-01", fim: "Atual", descricao: "Desenvolvimento de apps híbridos e nativos." }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "UTFPR", ano: "2018" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Mobile", "Flutter", "UX/UI"]
  },
  {
    id: 6,
    nome: "Juliana Pereira",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=JP",
    cargo: "UX/UI Designer Sênior",
    resumo: "Especialista em Design de Interação e Arquitetura de Informação. 7 anos de experiência em B2B e B2C.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Design Thinking", "User Journey", "Wireframing", "Testes de Usabilidade"],
    softSkills: ["Empatia", "Liderança", "Pensamento Analítico"],
    experiencias: [
      { empresa: "Fintech Growth", cargo: "UX/UI Designer Sênior", inicio: "2020-03", fim: "Atual", descricao: "Liderando o design de novos produtos financeiros." }
    ],
    formacao: [
      { curso: "Pós-graduação em Design de Interação", instituicao: "Senac", ano: "2019" },
      { curso: "Design Digital", instituicao: "Anhembi Morumbi", ano: "2016" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Design Systems", "Acessibilidade", "Fintech"]
  },
  {
    id: 7,
    nome: "Felipe Mendes",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=FM",
    cargo: "Engenheiro de Dados",
    resumo: "Experiência em construção e manutenção de pipelines de dados (ETL) e arquitetura de Data Lakes.",
    localizacao: "Recife/PE",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "Spark", "Airflow", "SQL", "AWS", "Databricks"],
    softSkills: ["Organização", "Resolução de Problemas", "Comunicação"],
    experiencias: [
      { empresa: "DataFlow", cargo: "Engenheiro de Dados", inicio: "2019-05", fim: "Atual", descricao: "Otimização de pipelines de ingestão de dados." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UFPE", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["AWS Certified Data Analytics"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Big Data", "Arquitetura de Dados", "MLOps"]
  },
  {
    id: 8,
    nome: "Lucas Gonçalves",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=LG",
    cargo: "Desenvolvedor Back-End",
    resumo: "Especialista em Java e ecossistema Spring. Focado em microsserviços e alta disponibilidade.",
    localizacao: "Belo Horizonte/MG",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Java", "Spring Boot", "Kafka", "SQL", "Microsserviços", "AWS"],
    softSkills: ["Foco", "Disciplina", "Trabalho em Equipe"],
    experiencias: [
      { empresa: "BankTech", cargo: "Desenvolvedor Back-End Sênior", inicio: "2017-10", fim: "Atual", descricao: "Desenvolvimento de APIs para o setor bancário." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUC Minas", ano: "2016" }
    ],
    projetos: [],
    certificacoes: ["Oracle Certified Professional, Java SE 8 Programmer"],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Arquitetura de Software", "Sistemas Distribuídos", "Fintech"]
  },
  {
    id: 9,
    nome: "Carla Dias",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=CD",
    cargo: "Scrum Master",
    resumo: "Scrum Master certificada (CSM) com experiência em facilitar cerimônias ágeis e remover impedimentos.",
    localizacao: "São Paulo/SP",
    area: "Gestão",
    habilidadesTecnicas: ["Scrum", "Kanban", "Jira", "Metodologias Ágeis", "Gestão de Conflitos"],
    softSkills: ["Liderança Servidora", "Facilitação", "Comunicação"],
    experiencias: [
      { empresa: "AgilePlus", cargo: "Scrum Master", inicio: "2019-11", fim: "Atual", descricao: "Liderando 2 times de desenvolvimento." }
    ],
    formacao: [
      { curso: "Administração", instituicao: "FGV", ano: "2015" }
    ],
    projetos: [],
    certificacoes: ["Certified ScrumMaster (CSM)"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }, { idioma: "Espanhol", nivel: "Básico" }],
    areaInteresses: ["Agile Coach", "Gestão de Produtos", "Psicologia Organizacional"]
  },
  {
    id: 10,
    nome: "Rafael Moreira",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=RM",
    cargo: "Engenheiro de Segurança da Informação",
    resumo: "Especialista em Pentest e Análise de Vulnerabilidades. Focado em proteger infraestruturas cloud.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Pentest", "Análise de Malwares", "SIEM", "AWS Security", "ISO 27001"],
    softSkills: ["Atenção aos Detalhes", "Ética", "Pensamento Crítico"],
    experiencias: [
      { empresa: "SecureNet", cargo: "Analista de Segurança Sênior", inicio: "2018-06", fim: "Atual", descricao: "Identificação e mitigação de riscos de segurança." }
    ],
    formacao: [
      { curso: "Segurança da Informação", instituicao: "Estácio", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["OSCP", "CISSP"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Cybersecurity", "Red Team", "Cloud Security"]
  },
  {
    id: 11,
    nome: "Beatriz Almeida",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=BA",
    cargo: "Product Manager",
    resumo: "Gerente de Produto com experiência em definição de roadmap, priorização de features e análise de métricas (B2C).",
    localizacao: "São Paulo/SP",
    area: "Gestão",
    habilidadesTecnicas: ["Roadmapping", "Priorização (RICE, MoSCoW)", "Análise de Métricas", "Jira", "SQL (Básico)"],
    softSkills: ["Visão de Negócio", "Comunicação", "Negociação", "Liderança"],
    experiencias: [
      { empresa: "E-commerce X", cargo: "Product Manager", inicio: "2020-01", fim: "Atual", descricao: "Responsável pelo time de checkout e pagamentos." }
    ],
    formacao: [
      { curso: "MBA em Gestão de Produtos", instituicao: "FIAP", ano: "2021" },
      { curso: "Publicidade e Propaganda", instituicao: "USP", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["CSPO"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Product-Led Growth", "UX Research", "E-commerce"]
  },
  {
    id: 12,
    nome: "Tiago Lacerda",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=TL",
    cargo: "Desenvolvedor Front-End",
    resumo: "Focado em performance e acessibilidade web (a11y). 4 anos de experiência com Vue.js e Nuxt.",
    localizacao: "Curitiba/PR",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Vue.js", "Nuxt.js", "JavaScript", "CSS", "Acessibilidade (a11y)", "Testes (Jest)"],
    softSkills: ["Colaboração", "Curiosidade", "Empatia"],
    experiencias: [
      { empresa: "WebFlowers", cargo: "Desenvolvedor Front-End", inicio: "2019-08", fim: "Atual", descricao: "Criação de componentes reutilizáveis e acessíveis." }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "PUCPR", ano: "2018" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Acessibilidade", "Web Performance", "Design Systems"]
  }
  // Você pode copiar e colar os perfis acima para chegar em 60+
];

// --- Componentes da Aplicação ---

/**
 * Componente: Navbar
 * Descrição: Barra de navegação principal.
 */
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
          <NavItem onClick={() => setPage('profissionais')}>Profissionais</NavItem>
          <NavItem onClick={() => setPage('porque')}>Porque o SkillSync?</NavItem>
          <NavItem href="#footer">Suporte</NavItem>
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
function NavItem({ children, onClick, href }) {
  const classes = "font-medium text-lg hover:text-purple-600 transition-colors cursor-pointer";
  
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
    <div className={`flex items-center justify-center h-screen min-h-[700px] pt-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="text-center p-8">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Encontre os Profissionais do Futuro, Hoje.
        </h2>
        <p className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          A SkillSync conecta você a uma rede exclusiva de talentos verificados em tecnologia, design e dados.
        </p>
        <button
          onClick={() => setPage('profissionais')}
          className="bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-transform hover:scale-105"
        >
          Explorar Profissionais
        </button>
      </div>
      {/* Aqui você pode adicionar a imagem de fundo via CSS ou <img> */}
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
  
  const filteredProfissionais = mockProfissionais.filter(p => {
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">SkillSync</h3>
          <p>Conectando talentos, impulsionando o futuro.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-purple-300">Profissionais</a></li>
            <li className="mb-2"><a href="#" className="hover:text-purple-300">Porque o SkillSync?</a></li>
            <li className="mb-2"><a href="#" className="hover:text-purple-300">Criar Perfil</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Suporte</h4>
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