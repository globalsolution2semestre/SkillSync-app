// src/profissionais.js
// Este arquivo exporta a lista completa de 60 perfis profissionais.

export const profissionaisData = [
  // 12 Perfis Originais
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
  },

  // --- Novos Perfis Gerados (13-60) ---
  {
    id: 13,
    nome: "Vanessa Martins",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=VM",
    cargo: "Desenvolvedora Full-Stack",
    resumo: "Desenvolvedora Pleno com foco em MERN stack (MongoDB, Express, React, Node).",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    softSkills: ["Curiosidade", "Proatividade", "Comunicação"],
    experiencias: [
      { empresa: "CodeStart", cargo: "Dev Full-Stack", inicio: "2020-05", fim: "Atual", descricao: "Desenvolvimento e manutenção de APIs RESTful e interfaces." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "FIAP", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Serverless", "React Native", "GraphQL"]
  },
  {
    id: 14,
    nome: "Rodrigo Barros",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=RB",
    cargo: "Engenheiro de QA",
    resumo: "Especialista em automação de testes (Selenium, Cypress) e testes de performance.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Cypress", "Selenium", "Jira", "SQL", "CI/CD", "JavaScript"],
    softSkills: ["Atenção aos Detalhes", "Pensamento Crítico", "Comunicação"],
    experiencias: [
      { empresa: "QualityFirst", cargo: "QA Engineer", inicio: "2018-10", fim: "Atual", descricao: "Criação e manutenção de suítes de testes automatizados." }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "Senac", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["CTFL"],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Testes de Segurança", "DevOps", "Automação"]
  },
  {
    id: 15,
    nome: "Gabriela Lima",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=GL",
    cargo: "UX Researcher",
    resumo: "Pesquisadora de UX com 5 anos de experiência em métodos qualitativos e quantitativos.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["User Interviews", "Testes de Usabilidade", "Surveys", "Personas", "Miro"],
    softSkills: ["Empatia", "Escuta Ativa", "Análise", "Comunicação"],
    experiencias: [
      { empresa: "UserFocus", cargo: "UX Researcher", inicio: "2019-03", fim: "Atual", descricao: "Condução de pesquisas para discovery de novos produtos." }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "PUC-SP", ano: "2017" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Psicologia Cognitiva", "Design de Serviço", "Acessibilidade"]
  },
  {
    id: 16,
    nome: "Leonardo Alves",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=LA",
    cargo: "Analista de BI",
    resumo: "Especialista em Power BI e SQL, focado em criar dashboards e relatórios para tomada de decisão.",
    localizacao: "Belo Horizonte/MG",
    area: "Data Science",
    habilidadesTecnicas: ["Power BI", "SQL Server", "ETL", "Tableau", "Excel"],
    softSkills: ["Visão de Negócio", "Capacidade Analítica", "Comunicação"],
    experiencias: [
      { empresa: "Metrics Inc.", cargo: "Analista de BI", inicio: "2020-01", fim: "Atual", descricao: "Desenvolvimento de dashboards para áreas de Vendas e Marketing." }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UFMG", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["Microsoft Certified: Data Analyst Associate"],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Data Visualization", "Big Data", "Business Intelligence"]
  },
  {
    id: 17,
    nome: "Patricia Souza",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=PS",
    cargo: "Analista de Infraestrutura Cloud",
    resumo: "Focada em gerenciamento de infraestrutura Azure e Google Cloud. Experiência em migração para nuvem.",
    localizacao: "Porto Alegre/RS",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Azure", "GCP", "Linux", "Redes", "Ansible", "Terraform"],
    softSkills: ["Resolução de Problemas", "Organização", "Comunicação"],
    experiencias: [
      { empresa: "CloudWay", cargo: "Analista Cloud", inicio: "2019-06", fim: "Atual", descricao: "Implementação e gerenciamento de ambientes cloud." }
    ],
    formacao: [
      { curso: "Redes de Computadores", instituicao: "Senac RS", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["Azure Administrator Associate", "GCP Cloud Engineer"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Cloud Security", "SRE", "Automação"]
  },
  {
    id: 18,
    nome: "Marcos Vinicius",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=MV",
    cargo: "Desenvolvedor Python",
    resumo: "Desenvolvedor Sênior focado em Python (Django, Flask) para aplicações web e processamento de dados.",
    localizacao: "Recife/PE",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Python", "Django", "Flask", "Pandas", "PostgreSQL", "Docker"],
    softSkills: ["Liderança", "Mentoria", "Arquitetura de Software"],
    experiencias: [
      { empresa: "DataProcess", cargo: "Desenvolvedor Python Sênior", inicio: "2017-02", fim: "Atual", descricao: "Liderança técnica em projetos de back-end." }
    ],
    formacao: [
      { curso: "Engenharia da Computação", instituicao: "UFPE", ano: "2016" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Inteligência Artificial", "Processamento de Linguagem Natural", "Microserviços"]
  },
  {
    id: 19,
    nome: "Sofia Ribeiro",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=SR",
    cargo: "Agile Coach",
    resumo: "Experiência em transformação ágil, coaching de times e facilitação de workshops (SAFe, LeSS).",
    localizacao: "São Paulo/SP",
    area: "Gestão",
    habilidadesTecnicas: ["Scrum", "Kanban", "SAFe", "LeSS", "Jira", "Métricas Ágeis"],
    softSkills: ["Comunicação", "Liderança Servidora", "Mentoria", "Resolução de Conflitos"],
    experiencias: [
      { empresa: "AgileMinds", cargo: "Agile Coach", inicio: "2018-01", fim: "Atual", descricao: "Apoio a múltiplos times e POs na adoção de práticas ágeis." }
    ],
    formacao: [
      { curso: "Pós-graduação em Gestão de Projetos", instituicao: "FGV", ano: "2016" }
    ],
    projetos: [],
    certificacoes: ["SPC (SAFe Program Consultant)", "CSM", "CSPO"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Cultura Organizacional", "Gestão de Mudança", "Liderança"]
  },
  {
    id: 20,
    nome: "Thiago Almeida",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=TA",
    cargo: "Designer Gráfico",
    resumo: "Especialista em identidade visual, branding e materiais de marketing. 10 anos de experiência.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Design",
    habilidadesTecnicas: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Branding", "Tipografia"],
    softSkills: ["Criatividade", "Atenção aos Detalhes", "Comunicação Visual"],
    experiencias: [
      { empresa: "BrandNow", cargo: "Diretor de Arte Jr.", inicio: "2015-06", fim: "Atual", descricao: "Criação de identidades visuais para clientes de médio e grande porte." }
    ],
    formacao: [
      { curso: "Design Gráfico", instituicao: "ESDI/UERJ", ano: "2014" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Branding", "Motion Graphics", "Ilustração"]
  },
  {
    id: 21,
    nome: "Clara Ferreira",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=CF",
    cargo: "Engenheira de Machine Learning",
    resumo: "Focada em MLOps e implementação de modelos de ML em produção. Experiência com Kubeflow e Seldon.",
    localizacao: "São Paulo/SP",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "TensorFlow", "Kubernetes", "MLOps", "Seldon", "AWS Sagemaker"],
    softSkills: ["Resolução de Problemas", "Colaboração", "Pensamento Analítico"],
    experiencias: [
      { empresa: "AIProd", cargo: "Engenheira de ML", inicio: "2020-02", fim: "Atual", descricao: "Colocando modelos de IA em produção." }
    ],
    formacao: [
      { curso: "Mestrado em IA", instituicao: "USP", ano: "2020" }
    ],
    projetos: [],
    certificacoes: ["AWS Certified Machine Learning – Specialty"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["MLOps", "IA Responsável", "Sistemas Distribuídos"]
  },
  {
    id: 22,
    nome: "Daniel Moreira",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=DM",
    cargo: "Administrador de Sistemas Linux",
    resumo: "SRE/SysAdmin Sênior com foco em automação, performance e alta disponibilidade de sistemas Linux.",
    localizacao: "Curitiba/PR",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Linux (Debian/CentOS)", "Bash Scripting", "Ansible", "Prometheus", "Grafana", "Redes"],
    softSkills: ["Foco", "Disciplina", "Resolução de Problemas"],
    experiencias: [
      { empresa: "InfraSys", cargo: "SysAdmin Sênior", inicio: "2015-01", fim: "Atual", descricao: "Garantia de uptime 99.99% em servidores de missão crítica." }
    ],
    formacao: [
      { curso: "Redes de Computadores", instituicao: "UTFPR", ano: "2014" }
    ],
    projetos: [],
    certificacoes: ["RHCE", "LPIC-3"],
    idiomas: [{ idioma: "Inglês", nivel: "Técnico" }],
    areaInteresses: ["SRE", "Automação", "Segurança de Redes"]
  },
  {
    id: 23,
    nome: "Larissa Pinto",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=LP",
    cargo: "Desenvolvedora Front-End Pleno",
    resumo: "Desenvolvedora com 4 anos de experiência em React, Next.js e otimização de performance (Lighthouse).",
    localizacao: "Belo Horizonte/MG",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React", "Next.js", "TypeScript", "Styled-Components", "Jest", "Performance Web"],
    softSkills: ["Colaboração", "Curiosidade", "Comunicação"],
    experiencias: [
      { empresa: "WebFast", cargo: "Dev Front-End", inicio: "2019-09", fim: "Atual", descricao: "Otimização de performance e acessibilidade em e-commerce." }
    ],
    formacao: [
      { curso: "Sistemas para Internet", instituicao: "IFMG", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Web Performance", "Acessibilidade", "Design Systems"]
  },
  {
    id: 24,
    nome: "Gustavo Mendes",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=GM",
    cargo: "Gerente de Projetos",
    resumo: "Certificado PMP, com 8 anos de experiência em gerenciamento de projetos de software (cascata e ágil).",
    localizacao: "São Paulo/SP",
    area: "Gestão",
    habilidadesTecnicas: ["Gestão de Projetos", "Scrum", "PMBOK", "MS Project", "Jira", "Gestão de Riscos"],
    softSkills: ["Liderança", "Negociação", "Comunicação", "Organização"],
    experiencias: [
      { empresa: "ProjectHub", cargo: "Gerente de Projetos Sênior", inicio: "2018-05", fim: "Atual", descricao: "Gerenciamento de portfólio de projetos de TI." }
    ],
    formacao: [
      { curso: "MBA em Gestão de Projetos", instituicao: "FGV", ano: "2017" },
      { curso: "Engenharia de Produção", instituicao: "USP", ano: "2014" }
    ],
    projetos: [],
    certificacoes: ["PMP", "CSM"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Gestão de Portfólio", "Metodologias Ágeis", "PMO"]
  },
  // --- Geração 2 (Perfis 25-40) ---
  {
    id: 25,
    nome: "Camila Nunes",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=CN",
    cargo: "Desenvolvedora Mobile (Flutter)",
    resumo: "Especialista em desenvolvimento híbrido com Flutter. 3 anos de experiência.",
    localizacao: "Curitiba/PR",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Flutter", "Dart", "Firebase", "BLoC Pattern", "Git"],
    softSkills: ["Adaptabilidade", "Foco no Usuário", "Trabalho em Equipe"],
    experiencias: [
      { empresa: "FlutterDevs", cargo: "Flutter Developer", inicio: "2020-07", fim: "Atual", descricao: "Desenvolvimento de apps para iOS e Android com base de código única." }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "PUCPR", ano: "2020" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Mobile", "Flutter", "UX/UI"]
  },
  {
    id: 26,
    nome: "Igor Martins",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=IM",
    cargo: "UX/UI Designer Pleno",
    resumo: "Designer focado em e-commerce e produtos B2C. Experiência em prototipagem de alta fidelidade.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Design Systems", "Prototipagem", "Adobe CC", "User Journey"],
    softSkills: ["Criatividade", "Colaboração", "Comunicação"],
    experiencias: [
      { empresa: "E-com Design", cargo: "UX/UI Designer", inicio: "2019-11", fim: "Atual", descricao: "Melhoria da jornada de compra em plataforma de e-commerce." }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "Belas Artes", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Design Systems", "E-commerce", "Microinterações"]
  },
  {
    id: 27,
    nome: "Renata Vasconcelos",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=RV",
    cargo: "Analista de Dados Pleno",
    resumo: "Focada em análise de dados e visualização com Python (Pandas, Matplotlib) e Tableau.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "Pandas", "SQL", "Tableau", "Estatística"],
    softSkills: ["Curiosidade", "Pensamento Analítico", "Apresentação"],
    experiencias: [
      { empresa: "DataView", cargo: "Analista de Dados", inicio: "2020-03", fim: "Atual", descricao: "Análise exploratória de dados para a área de marketing." }
    ],
    formacao: [
      { curso: "Ciências Econômicas", instituicao: "UFRJ", ano: "2018" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Data Visualization", "Econometria", "Machine Learning"]
  },
  {
    id: 28,
    nome: "Fernando Guerra",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=FG",
    cargo: "SRE (Site Reliability Engineer)",
    resumo: "Engenheiro SRE com foco em monitoramento, automação e redução de latência em sistemas distribuídos.",
    localizacao: "São Paulo/SP",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Kubernetes", "Prometheus", "Grafana", "Go", "Python", "Terraform", "AWS"],
    softSkills: ["Resiliência", "Colaboração", "Foco em SLAs"],
    experiencias: [
      { empresa: "UptimeTech", cargo: "SRE", inicio: "2019-01", fim: "Atual", descricao: "Implementação de cultura SRE e observabilidade." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "USP", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["CKA"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["SRE", "Sistemas Distribuídos", "Observabilidade"]
  },
  {
    id: 29,
    nome: "Eduardo Rocha",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=ER",
    cargo: "Desenvolvedor Back-End (.NET)",
    resumo: "Especialista em .NET Core, C# e arquitetura de microsserviços na plataforma Azure.",
    localizacao: "Porto Alegre/RS",
    area: "Desenvolvimento",
    habilidadesTecnicas: [".NET Core", "C#", "Azure", "SQL Server", "Docker", "Microsserviços"],
    softSkills: ["Disciplina", "Trabalho em Equipe", "Mentoria"],
    experiencias: [
      { empresa: "DotNet Masters", cargo: "Dev Back-End Sênior", inicio: "2016-08", fim: "Atual", descricao: "Desenvolvimento de APIs robustas para o setor financeiro." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUCRS", ano: "2015" }
    ],
    projetos: [],
    certificacoes: ["Microsoft Certified: Azure Developer Associate"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Arquitetura de Software", ".NET", "Azure"]
  },
  {
    id: 30,
    nome: "Manuela Costa",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=MC",
    cargo: "Product Manager Pleno",
    resumo: "PM focado em discovery de produtos digitais e priorização de backlog. Experiência em SaaS B2B.",
    localizacao: "São Paulo/SP",
    area: "Gestão",
    habilidadesTecnicas: ["Roadmapping", "Priorização", "User Stories", "Jira", "Metodologias Ágeis"],
    softSkills: ["Comunicação", "Visão de Negócio", "Negociação"],
    experiencias: [
      { empresa: "SaaSY", cargo: "Product Manager", inicio: "2019-10", fim: "Atual", descricao: "Gestão do ciclo de vida de produto SaaS." }
    ],
    formacao: [
      { curso: "Engenharia de Produção", instituicao: "Poli-USP", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["CSPO"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["SaaS", "Gestão de Produtos", "UX Research"]
  },
  {
    id: 31,
    nome: "Vitor Hugo",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=VH",
    cargo: "Desenvolvedor Front-End (Vue.js)",
    resumo: "Desenvolvedor Pleno com 4 anos de experiência em Vue.js, Vuex e Nuxt.js.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Vue.js", "Vuex", "Nuxt.js", "JavaScript", "Tailwind CSS"],
    softSkills: ["Colaboração", "Curiosidade", "Comunicação"],
    experiencias: [
      { empresa: "VueWorld", cargo: "Dev Front-End", inicio: "2019-05", fim: "Atual", descricao: "Criação de dashboards e SPAs com Vue.js." }
    ],
    formacao: [
      { curso: "Sistemas para Internet", instituicao: "IFRJ", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Vue.js", "Design Systems", "Web Performance"]
  },
  {
    id: 32,
    nome: "Alice Xavier",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=AX",
    cargo: "UX Writer",
    resumo: "Especialista em Microcopy, tom e voz. Focada em criar jornadas de usuário claras e intuitivas.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["UX Writing", "Microcopy", "Tom e Voz", "Testes A/B", "Figma"],
    softSkills: ["Empatia", "Comunicação Escrita", "Atenção aos Detalhes"],
    experiencias: [
      { empresa: "WordsCo", cargo: "UX Writer", inicio: "2020-01", fim: "Atual", descricao: "Definição do guia de tom e voz da marca e microcopy de produtos." }
    ],
    formacao: [
      { curso: "Comunicação Social - Jornalismo", instituicao: "USP", ano: "2017" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["UX Writing", "Content Strategy", "Acessibilidade"]
  },
  {
    id: 33,
    nome: "Henrique Bastos",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=HB",
    cargo: "Engenheiro de Dados Pleno",
    resumo: "Experiência em ETL/ELT e orquestração de pipelines de dados com Airflow e Spark.",
    localizacao: "Recife/PE",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "Airflow", "Spark", "SQL", "AWS (S3, Redshift)"],
    softSkills: ["Organização", "Resolução de Problemas", "Comunicação"],
    experiencias: [
      { empresa: "DataPipe", cargo: "Engenheiro de Dados", inicio: "2019-12", fim: "Atual", descricao: "Desenvolvimento e manutenção de pipelines de dados." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UFPE", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Big Data", "Spark", "Arquitetura de Dados"]
  },
  {
    id: 34,
    nome: "Laura Moreira",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=LM",
    cargo: "Analista de Segurança (SOC)",
    resumo: "Analista de SOC Nível 2, focada em monitoramento, resposta a incidentes e análise de ameaças.",
    localizacao: "Belo Horizonte/MG",
    area: "Infraestrutura",
    habilidadesTecnicas: ["SIEM (Splunk)", "Análise de Logs", "Resposta a Incidentes", "Firewall", "Redes"],
    softSkills: ["Atenção aos Detalhes", "Pensamento Crítico", "Trabalho sob Pressão"],
    experiencias: [
      { empresa: "SecureSOC", cargo: "Analista SOC", inicio: "2019-08", fim: "Atual", descricao: "Monitoramento e resposta a alertas de segurança." }
    ],
    formacao: [
      { curso: "Segurança da Informação", instituicao: "UNA", ano: "2019" }
    ],
    projetos: [],
    certificacoes: ["CompTIA Security+"],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Cybersecurity", "Threat Intelligence", "Forensse Digital"]
  },
  {
    id: 35,
    nome: "Diego Fernandes",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=DF",
    cargo: "Desenvolvedor Front-End Sênior",
    resumo: "Especialista em React, performance e liderança técnica de times de front-end.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["React", "TypeScript", "Next.js", "Performance Web", "Liderança Técnica"],
    softSkills: ["Mentoria", "Liderança", "Comunicação", "Visão de Produto"],
    experiencias: [
      { empresa: "ReactDevs", cargo: "Tech Lead Front-End", inicio: "2018-01", fim: "Atual", descricao: "Liderando a arquitetura de front-end de múltiplos projetos." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "Mackenzie", ano: "2015" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Arquitetura Front-End", "React", "Design Systems"]
  },
  {
    id: 36,
    nome: "Julia Castro",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=JC",
    cargo: "Tech Recruiter",
    resumo: "Especialista em recrutamento e seleção para vagas de tecnologia (devs, dados, infra).",
    localizacao: "Curitiba/PR",
    area: "Gestão",
    habilidadesTecnicas: ["Recrutamento e Seleção", "Hunting", "LinkedIn Recruiter", "Entrevistas Técnicas (Triagem)"],
    softSkills: ["Comunicação", "Empatia", "Negociação", "Organização"],
    experiencias: [
      { empresa: "HireTech", cargo: "Tech Recruiter Sênior", inicio: "2018-09", fim: "Atual", descricao: "Responsável pelo ciclo completo de recrutamento." }
    ],
    formacao: [
      { curso: "Psicologia", instituicao: "UFPR", ano: "2017" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Recrutamento", "RH Ágil", "Employer Branding"]
  },
  {
    id: 37,
    nome: "Otávio Martins",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=OM",
    cargo: "Desenvolvedor Back-End (Node.js)",
    resumo: "Desenvolvedor Pleno com 4 anos de experiência em Node.js, Express, e microsserviços.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Docker", "AWS (Lambda)"],
    softSkills: ["Colaboração", "Resolução de Problemas", "Curiosidade"],
    experiencias: [
      { empresa: "NodeWay", cargo: "Dev Back-End", inicio: "2019-07", fim: "Atual", descricao: "Desenvolvimento de APIs RESTful para e-commerce." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "USP", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Serverless", "Microsserviços", "Node.js"]
  },
  {
    id: 38,
    nome: "Isabela Correia",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=IC",
    cargo: "Designer de Produto (Mobile)",
    resumo: "Focada em design de aplicativos nativos (iOS e Android), seguindo guidelines e melhorando a UX.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Design",
    habilidadesTecnicas: ["Figma", "Design (iOS/Android)", "Prototipagem", "User Research", "Design Systems"],
    softSkills: ["Empatia", "Colaboração", "Atenção aos Detalhes"],
    experiencias: [
      { empresa: "AppDesign", cargo: "Product Designer", inicio: "2020-04", fim: "Atual", descricao: "Design de features para app com +1M usuários." }
    ],
    formacao: [
      { curso: "Design", instituicao: "PUC-Rio", ano: "2019" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Mobile Design", "Acessibilidade", "Design Systems"]
  },
  {
    id: 39,
    nome: "Caio Pereira",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=CP",
    cargo: "Cientista de Dados Sênior",
    resumo: "Especialista em NLP e Deep Learning, com 7 anos de experiência em pesquisa e produção.",
    localizacao: "Belo Horizonte/MG",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "PyTorch", "TensorFlow", "NLP", "Scikit-learn", "SQL"],
    softSkills: ["Liderança", "Pesquisa", "Comunicação", "Mentoria"],
    experiencias: [
      { empresa: "AI Labs", cargo: "Cientista de Dados Sênior", inicio: "2017-11", fim: "Atual", descricao: "Liderança de projetos de P&D em Processamento de Linguagem Natural." }
    ],
    formacao: [
      { curso: "Doutorado em Ciência da Computação", instituicao: "UFMG", ano: "2017" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Deep Learning", "NLP", "IA Generativa"]
  },
  {
    id: 40,
    nome: "Nathalia Gomes",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=NG",
    cargo: "Analista de Redes Sênior",
    resumo: "Especialista em redes (Cisco), segurança de perímetro (Firewalls) e gerenciamento de WAN/LAN.",
    localizacao: "Porto Alegre/RS",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Cisco (Routing/Switching)", "Firewalls (Palo Alto)", "VPN", "Redes Wireless", "Monitoramento"],
    softSkills: ["Pensamento Crítico", "Resolução de Problemas", "Organização"],
    experiencias: [
      { empresa: "NetSecure", cargo: "Analista de Redes Sênior", inicio: "2015-03", fim: "Atual", descricao: "Gerenciamento da topologia de rede e políticas de segurança." }
    ],
    formacao: [
      { curso: "Redes de Computadores", instituicao: "UniRitter", ano: "2014" }
    ],
    projetos: [],
    certificacoes: ["CCNP Enterprise"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Segurança de Redes", "Cloud Networking", "SD-WAN"]
  },
  // --- Geração 3 (Perfis 41-60) ---
  {
    id: 41,
    nome: "Victor Andrade",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=VA",
    cargo: "Desenvolvedor Java Sênior",
    resumo: "Arquiteto de Software focado em ecossistema Java, Spring Boot e microsserviços.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Java", "Spring Boot", "Microsserviços", "Kafka", "SQL", "Kubernetes"],
    softSkills: ["Liderança Técnica", "Arquitetura", "Mentoria"],
    experiencias: [
      { empresa: "JavaBank", cargo: "Arquiteto de Software", inicio: "2018-02", fim: "Atual", descricao: "Definição de arquitetura de novos produtos financeiros." }
    ],
    formacao: [
      { curso: "Engenharia de Software", instituicao: "FIAP", ano: "2014" }
    ],
    projetos: [],
    certificacoes: ["OCP"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Sistemas Distribuídos", "Arquitetura de Software", "Java"]
  },
  {
    id: 42,
    nome: "Rebeca Mendes",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=RM",
    cargo: "PO (Product Owner)",
    resumo: "Product Owner com 5 anos de experiência em priorização de backlog e definição de user stories.",
    localizacao: "Recife/PE",
    area: "Gestão",
    habilidadesTecnicas: ["Scrum", "Gestão de Backlog", "User Stories", "Jira", "Negociação"],
    softSkills: ["Comunicação", "Negociação", "Visão de Produto", "Organização"],
    experiencias: [
      { empresa: "DigitalDev", cargo: "Product Owner", inicio: "2019-01", fim: "Atual", descricao: "Maximizando o valor do produto entregue pelo time de desenvolvimento." }
    ],
    formacao: [
      { curso: "Administração", instituicao: "UFPE", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["CSPO", "PSM I"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Gestão de Produtos", "Agilidade", "Fintech"]
  },
  {
    id: 43,
    nome: "Arthur Moreira",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=AM",
    cargo: "Desenvolvedor Mobile (Nativo iOS)",
    resumo: "Desenvolvedor iOS Sênior com 7 anos de experiência em Swift e Objective-C.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Swift", "Objective-C", "UIKit", "SwiftUI", "Core Data", "Testes (XCTest)"],
    softSkills: ["Foco", "Qualidade de Código", "Mentoria"],
    experiencias: [
      { empresa: "AppleDevs", cargo: "iOS Developer Sênior", inicio: "2017-05", fim: "Atual", descricao: "Desenvolvimento de apps nativos iOS de alta performance." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUC-Rio", ano: "2016" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["SwiftUI", "Performance Mobile", "iOS"]
  },
  {
    id: 44,
    nome: "Paula Costa",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=PC",
    cargo: "Designer de Interação (IxD)",
    resumo: "Especialista em fluxos de usuário, wireframes e prototipagem interativa.",
    localizacao: "Curitiba/PR",
    area: "Design",
    habilidadesTecnicas: ["Design de Interação", "Wireframing", "Figma", "Prototipagem", "Arquitetura da Informação"],
    softSkills: ["Pensamento Sistêmico", "Colaboração", "Comunicação"],
    experiencias: [
      { empresa: "FlowUX", cargo: "Interaction Designer", inicio: "2019-02", fim: "Atual", descricao: "Criação de fluxos e protótipos de baixa e média fidelidade." }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "PUCPR", ano: "2018" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Design de Interação", "Microinterações", "UX"]
  },
  {
    id: 45,
    nome: "Bernardo Campos",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=BC",
    cargo: "Analista de Dados (Marketing)",
    resumo: "Focado em análise de campanhas (Google Analytics, Ads) e funil de conversão.",
    localizacao: "Belo Horizonte/MG",
    area: "Data Science",
    habilidadesTecnicas: ["Google Analytics", "Google Ads", "SQL", "Excel", "Power BI", "Marketing Digital"],
    softSkills: ["Visão de Negócio", "Comunicação", "Análise"],
    experiencias: [
      { empresa: "MktMetrics", cargo: "Analista de Marketing Digital", inicio: "2020-05", fim: "Atual", descricao: "Análise e otimização de performance de campanhas pagas." }
    ],
    formacao: [
      { curso: "Publicidade e Propaganda", instituicao: "PUC Minas", ano: "2019" }
    ],
    projetos: [],
    certificacoes: ["Google Analytics Certified"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Marketing Digital", "Data Analytics", "SEO/SEM"]
  },
  {
    id: 46,
    nome: "Helena Castro",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=HC",
    cargo: "Engenheira de Software (Ruby on Rails)",
    resumo: "Desenvolvedora Sênior com 9 anos de experiência em Ruby on Rails e arquitetura de back-end.",
    localizacao: "Porto Alegre/RS",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Ruby", "Ruby on Rails", "PostgreSQL", "RSpec", "Sidekiq", "Docker"],
    softSkills: ["Liderança", "Qualidade de Código", "Mentoria"],
    experiencias: [
      { empresa: "RailsWay", cargo: "Sênior Rails Developer", inicio: "2016-01", fim: "Atual", descricao: "Manutenção e evolução de aplicação monolítica Rails." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UFRGS", ano: "2015" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Ruby on Rails", "Arquitetura de Software", "Testes"]
  },
  {
    id: 47,
    nome: "Miguel Torres",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=MT",
    cargo: "Especialista em Cibersegurança",
    resumo: "Foco em Red Team, pentesting de aplicações web (OWASP) e engenharia social.",
    localizacao: "São Paulo/SP",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Pentest", "OWASP Top 10", "Red Team", "Metasploit", "Burp Suite", "Kali Linux"],
    softSkills: ["Pensamento Crítico", "Ética", "Curiosidade"],
    experiencias: [
      { empresa: "CyberSec", cargo: "Pentester Sênior", inicio: "2018-07", fim: "Atual", descricao: "Execução de testes de intrusão e relatórios de vulnerabilidade." }
    ],
    formacao: [
      { curso: "Segurança da Informação", instituicao: "FIAP", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["OSCP", "CEH"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Red Team", "Cibersegurança", "Engenharia Social"]
  },
  {
    id: 48,
    nome: "Lorena Dias",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=LD",
    cargo: "Desenvolvedora Front-End (Angular)",
    resumo: "Desenvolvedora Pleno com 5 anos de experiência em Angular 2+, TypeScript e RxJS.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Angular", "TypeScript", "RxJS", "NgRx", "CSS (SASS)", "Testes (Jasmine)"],
    softSkills: ["Organização", "Colaboração", "Foco"],
    experiencias: [
      { empresa: "AngularCorp", cargo: "Angular Developer", inicio: "2019-03", fim: "Atual", descricao: "Desenvolvimento de aplicações enterprise com Angular." }
    ],
    formacao: [
      { curso: "Análise e Desenvolvimento de Sistemas", instituicao: "Estácio", ano: "2018" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Angular", "TypeScript", "Design Systems"]
  },
  {
    id: 49,
    nome: "André Figueiredo",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=AF",
    cargo: "Designer de Produto Sênior",
    resumo: "Líder de design focado em estratégia de produto, design systems e mentoria de designers.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["Liderança de Design", "Design Strategy", "Design Systems", "Figma", "UX Research"],
    softSkills: ["Liderança", "Visão Estratégica", "Comunicação", "Mentoria"],
    experiencias: [
      { empresa: "LeadDesign", cargo: "Principal Product Designer", inicio: "2017-06", fim: "Atual", descricao: "Liderando a estratégia de design e o time de designers." }
    ],
    formacao: [
      { curso: "Design", instituicao: "USP", ano: "2015" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Design Strategy", "Liderança", "Design Systems"]
  },
  {
    id: 50,
    nome: "Rafaela Bastos",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=RB",
    cargo: "Cientista de Dados (Visão Computacional)",
    resumo: "Especialista em Deep Learning aplicado a Visão Computacional (CV) com OpenCV e PyTorch.",
    localizacao: "Belo Horizonte/MG",
    area: "Data Science",
    habilidadesTecnicas: ["Python", "PyTorch", "OpenCV", "Visão Computacional", "Deep Learning"],
    softSkills: ["Pesquisa", "Inovação", "Pensamento Crítico"],
    experiencias: [
      { empresa: "VisionAI", cargo: "Data Scientist (CV)", inicio: "2020-01", fim: "Atual", descricao: "Desenvolvimento de modelos de detecção de objetos e segmentação." }
    ],
    formacao: [
      { curso: "Mestrado em Ciência da Computação (IA)", instituicao: "UFMG", ano: "2020" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Visão Computacional", "Deep Learning", "IA"]
  },
  {
    id: 51,
    nome: "Samuel Ribeiro",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=SR",
    cargo: "Engenheiro de DevOps Pleno",
    resumo: "Foco em automação de CI/CD (Jenkins, GitLab CI) e infraestrutura como código (Terraform, Ansible).",
    localizacao: "Curitiba/PR",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Terraform", "Ansible", "Jenkins", "GitLab CI", "Docker", "AWS"],
    softSkills: ["Automação", "Colaboração", "Resolução de Problemas"],
    experiencias: [
      { empresa: "DevOpsNow", cargo: "DevOps Engineer", inicio: "2019-09", fim: "Atual", descricao: "Criação e manutenção de pipelines de integração e entrega contínua." }
    ],
    formacao: [
      { curso: "Engenharia de Computação", instituicao: "UTFPR", ano: "2019" }
    ],
    projetos: [],
    certificacoes: ["AWS Certified Solutions Architect"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["DevOps", "Automação", "Cloud"]
  },
  {
    id: 52,
    nome: "Bárbara Nunes",
    foto: "https://placehold.co/100x100/85D4C6/FFFFFF?text=BN",
    cargo: "Desenvolvedora Mobile (Nativo Android)",
    resumo: "Desenvolvedora Android com 6 anos de experiência em Kotlin, Java e arquitetura MVVM.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["Kotlin", "Java (Android)", "MVVM", "Coroutines", "Jetpack Compose"],
    softSkills: ["Qualidade de Código", "Colaboração", "Foco"],
    experiencias: [
      { empresa: "AndroidWay", cargo: "Android Developer Sênior", inicio: "2018-03", fim: "Atual", descricao: "Desenvolvimento de app bancário nativo Android." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "Mackenzie", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["Associate Android Developer"],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Android", "Kotlin", "Jetpack Compose"]
  },
  {
    id: 53,
    nome: "Gilberto Alves",
    foto: "https://placehold.co/100x100/D4B785/FFFFFF?text=GA",
    cargo: "Scrum Master Sênior",
    resumo: "Facilitador experiente, focado em métricas ágeis e remoção de impedimentos em múltiplos times.",
    localizacao: "Rio de Janeiro/RJ",
    area: "Gestão",
    habilidadesTecnicas: ["Scrum", "Kanban", "Métricas Ágeis", "Jira", "Facilitação", "Gestão de Conflitos"],
    softSkills: ["Liderança Servidora", "Comunicação", "Empatia", "Organização"],
    experiencias: [
      { empresa: "AgileTeam", cargo: "Scrum Master", inicio: "2017-01", fim: "Atual", descricao: "Responsável pela implementação do Scrum em 3 times." }
    ],
    formacao: [
      { curso: "Engenharia de Software", instituicao: "UFRJ", ano: "2015" }
    ],
    projetos: [],
    certificacoes: ["PSM II", "CSM"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Agilidade", "Gestão de Times", "Cultura Organizacional"]
  },
  {
    id: 54,
    nome: "Yasmin Ferreira",
    foto: "https://placehold.co/100x100/D485B0/FFFFFF?text=YF",
    cargo: "Desenvolvedora Front-End Júnior",
    resumo: "Entusiasta de React e TypeScript, buscando consolidar conhecimentos em desenvolvimento web moderno.",
    localizacao: "Porto Alegre/RS",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["HTML", "CSS", "JavaScript", "React", "Git"],
    softSkills: ["Curiosidade", "Proatividade", "Vontade de aprender"],
    experiencias: [
      { empresa: "Bootcamp Dev", cargo: "Estudante", inicio: "2023-01", fim: "Atual", descricao: "Desenvolvimento de projetos práticos em React." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "PUCRS", ano: "2024 (Cursando)" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["React", "TypeScript", "Front-End"]
  },
  {
    id: 55,
    nome: "Fábio Duarte",
    foto: "https://placehold.co/100x100/85D4A9/FFFFFF?text=FD",
    cargo: "Motion Designer",
    resumo: "Especialista em Adobe After Effects e Cinema 4D para criação de animações e motion graphics.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["After Effects", "Cinema 4D", "Adobe Illustrator", "Motion Graphics", "Edição de Vídeo"],
    softSkills: ["Criatividade", "Atenção aos Detalhes", "Comunicação Visual"],
    experiencias: [
      { empresa: "MotionPlus", cargo: "Motion Designer", inicio: "2018-08", fim: "Atual", descricao: "Criação de vinhetas e animações para mídias sociais." }
    ],
    formacao: [
      { curso: "Design Gráfico", instituicao: "Senac", ano: "2017" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Motion Graphics", "3D", "Animação"]
  },
  {
    id: 56,
    nome: "Elisa Furtado",
    foto: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=EF",
    cargo: "Analista de Dados Júnior",
    resumo: "Recém-formada em Estatística, com foco em SQL e Python para análise de dados.",
    localizacao: "Recife/PE",
    area: "Data Science",
    habilidadesTecnicas: ["SQL", "Python", "Pandas", "Estatística", "Excel"],
    softSkills: ["Capacidade Analítica", "Curiosidade", "Organização"],
    experiencias: [
      { empresa: "DataStart", cargo: "Estagiária de Dados", inicio: "2022-06", fim: "2023-06", descricao: "Suporte na extração e limpeza de dados." }
    ],
    formacao: [
      { curso: "Estatística", instituicao: "UFPE", ano: "2023" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Data Science", "Estatística", "SQL"]
  },
  {
    id: 57,
    nome: "Ricardo Campos",
    foto: "https://placehold.co/100x100/D4A885/FFFFFF?text=RC",
    cargo: "Engenheiro de Redes Pleno",
    resumo: "Experiência em gerenciamento de redes corporativas, focado em Cisco e Juniper.",
    localizacao: "Belo Horizonte/MG",
    area: "Infraestrutura",
    habilidadesTecnicas: ["Cisco", "Juniper", "Routing (BGP, OSPF)", "Switching", "Firewalls"],
    softSkills: ["Resolução de Problemas", "Organização", "Foco"],
    experiencias: [
      { empresa: "NetCorp", cargo: "Engenheiro de Redes", inicio: "2019-01", fim: "Atual", descricao: "Gerenciamento e troubleshooting de rede LAN/WAN." }
    ],
    formacao: [
      { curso: "Redes de Computadores", instituicao: "PUC Minas", ano: "2018" }
    ],
    projetos: [],
    certificacoes: ["CCNA"],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["Redes", "Segurança", "Cloud Networking"]
  },
  {
    id: 58,
    nome: "Brenda Oliveira",
    foto: "https://placehold.co/100x100/A985D4/FFFFFF?text=BO",
    cargo: "Desenvolvedora PHP Sênior",
    resumo: "Especialista em PHP, Laravel e Symfony. 10 anos de experiência em sistemas legados e novos.",
    localizacao: "São Paulo/SP",
    area: "Desenvolvimento",
    habilidadesTecnicas: ["PHP", "Laravel", "Symfony", "MySQL", "Docker", "APIs REST"],
    softSkills: ["Experiência", "Mentoria", "Resolução de Problemas"],
    experiencias: [
      { empresa: "PHPWorks", cargo: "Dev PHP Sênior", inicio: "2015-07", fim: "Atual", descricao: "Manutenção de sistemas legados e desenvolvimento de novas APIs." }
    ],
    formacao: [
      { curso: "Sistemas de Informação", instituicao: "Anhembi Morumbi", ano: "2014" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Inglês", nivel: "Intermediário" }],
    areaInteresses: ["PHP", "Laravel", "Arquitetura"]
  },
  {
    id: 59,
    nome: "Alexandre Matos",
    foto: "https://placehold.co/100x100/85A4D4/FFFFFF?text=AM",
    cargo: "Gerente de Produto Técnico (TPM)",
    resumo: "Ex-desenvolvedor Sênior, agora focado em gerenciar produtos técnicos (APIs, Plataformas).",
    localizacao: "Curitiba/PR",
    area: "Gestão",
    habilidadesTecnicas: ["Gestão de Produto", "APIs", "Microsserviços", "Roadmapping", "Scrum"],
    softSkills: ["Visão Técnica", "Comunicação", "Liderança", "Negociação"],
    experiencias: [
      { empresa: "APIFirst", cargo: "Technical Product Manager", inicio: "2020-01", fim: "Atual", descricao: "Definição do roadmap e estratégia para a plataforma de APIs." }
    ],
    formacao: [
      { curso: "Ciência da Computação", instituicao: "UTFPR", ano: "2015" }
    ],
    projetos: [],
    certificacoes: ["CSPO"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Plataformas", "APIs", "Gestão de Produto Técnico"]
  },
  {
    id: 60,
    nome: "Taís Araújo",
    foto: "https://placehold.co/100x100/D48585/FFFFFF?text=TA",
    cargo: "Especialista em Acessibilidade Web",
    resumo: "Focada em garantir que produtos digitais sejam acessíveis (WCAG). Consultoria e auditoria.",
    localizacao: "São Paulo/SP",
    area: "Design",
    habilidadesTecnicas: ["Acessibilidade (a11y)", "WCAG", "Testes (Leitores de Tela)", "HTML Semântico", "WAI-ARIA"],
    softSkills: ["Empatia", "Comunicação", "Advocacia", "Ensino"],
    experiencias: [
      { empresa: "Acessibilia", cargo: "Consultora de Acessibilidade", inicio: "2018-11", fim: "Atual", descricao: "Auditoria e treinamento de times de desenvolvimento e design." }
    ],
    formacao: [
      { curso: "Design Digital", instituicao: "Anhembi Morumbi", ano: "2017" }
    ],
    projetos: [],
    certificacoes: ["CPACC"],
    idiomas: [{ idioma: "Inglês", nivel: "Fluente" }],
    areaInteresses: ["Acessibilidade", "Design Inclusivo", "Direitos Digitais"]
  }
  ,
  {
    id: 61,
    nome: "Professor FIAP",
    foto: "https://placehold.co/100x100/6EE7B7/FFFFFF?text=PF",
    cargo: "Professor - FIAP",
    resumo: "Professor responsável por gerenciar e avaliar conteúdos do curso. Conta institucional FIAP para acesso ao painel docente.",
    localizacao: "São Paulo/SP",
    area: "Educação",
    habilidadesTecnicas: ["Ensino", "Mentoria", "Desenvolvimento Web", "Arquitetura de Software"],
    softSkills: ["Comunicação", "Didática", "Mentoria"],
    experiencias: [
      { empresa: "FIAP", cargo: "Professor", inicio: "2018-02", fim: "Atual", descricao: "Ministração de disciplinas de desenvolvimento e mentoria de projetos." }
    ],
    formacao: [
      { curso: "Mestrado em Engenharia de Software", instituicao: "FIAP", ano: "2016" }
    ],
    projetos: [],
    certificacoes: [],
    idiomas: [{ idioma: "Português", nivel: "Nativo" }, { idioma: "Inglês", nivel: "Avançado" }],
    areaInteresses: ["Educação", "Mentoria", "Projetos Acadêmicos"],
    // Campo adicional para autenticação no ambiente de desenvolvimento
    email: "professorfiap@skillsync.com"
  }
];