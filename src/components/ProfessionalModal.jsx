function ProfessionalModal({ professional, darkMode, onClose, onRecommend, onMessage }) {
  if (!professional) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl transition-colors ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        
        {/* Header do Modal */}
        <div className={`p-6 border-b ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <img
                src={professional.foto}
                alt={professional.nome}
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {professional.nome}
                </h2>
                <p className={`text-lg ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {professional.cargo}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {professional.resumo}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
            }`}>
              {professional.area}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}>
              {professional.localizacao}
            </span>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-3">
            <button
              onClick={() => onRecommend(professional.id)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
              }`}
            >
              Recomendar Profissional
            </button>
            <button
              onClick={() => onMessage(professional.id)}
              className={`flex-1 py-3 px-4 rounded-lg font-semibold border transition-colors ${
                darkMode 
                  ? 'border-purple-400 text-purple-400 hover:bg-purple-900' 
                  : 'border-purple-600 text-purple-600 hover:bg-purple-50'
              }`}
            >
              Enviar Mensagem
            </button>
          </div>
        </div>

        {/* Conteúdo do Modal */}
        <div className="p-6 space-y-6">
          
          {/* Habilidades Técnicas */}
          <section>
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {professional.habilidadesTecnicas.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {professional.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-2 rounded-lg ${
                    darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experiências */}
          <section>
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Experiências Profissionais
            </h3>
            <div className="space-y-4">
              {professional.experiencias.map((exp, index) => (
                <div key={index} className={`p-4 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {exp.cargo} - {exp.empresa}
                    </h4>
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.inicio} - {exp.fim}
                    </span>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section>
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Formação Acadêmica
            </h3>
            <div className="space-y-3">
              {professional.formacao.map((form, index) => (
                <div key={index} className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {form.curso}
                  </h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {form.instituicao} - {form.ano}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Projetos */}
          {professional.projetos && professional.projetos.length > 0 && (
            <section>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Projetos
              </h3>
              <div className="space-y-3">
                {professional.projetos.map((projeto, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <a 
                      href={projeto.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`font-semibold hover:underline ${
                        darkMode ? 'text-purple-400' : 'text-purple-600'
                      }`}
                    >
                      {projeto.titulo}
                    </a>
                    <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {projeto.descricao}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certificações */}
          {professional.certificacoes && professional.certificacoes.length > 0 && (
            <section>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Certificações
              </h3>
              <div className="flex flex-wrap gap-2">
                {professional.certificacoes.map((cert, index) => (
                  <span
                    key={index}
                    className={`px-3 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Idiomas */}
          {professional.idiomas && professional.idiomas.length > 0 && (
            <section>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Idiomas
              </h3>
              <div className="flex flex-wrap gap-3">
                {professional.idiomas.map((idioma, index) => (
                  <div key={index} className={`px-3 py-2 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                      {idioma.idioma}
                    </span>
                    <span className={`ml-2 text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      ({idioma.nivel})
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Áreas de Interesse */}
          {professional.areaInteresses && professional.areaInteresses.length > 0 && (
            <section>
              <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Áreas de Interesses
              </h3>
              <div className="flex flex-wrap gap-2">
                {professional.areaInteresses.map((interesse, index) => (
                  <span
                    key={index}
                    className={`px-3 py-2 rounded-lg ${
                      darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {interesse}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalModal