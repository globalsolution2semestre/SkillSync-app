import { useState } from 'react'
import { professionals } from './data/profissionais'
import ProfessionalCard from './components/ProfessionalCard'
import SearchBar from './components/SearchBar'
import FilterSection from './components/FilterSection'
import ProfessionalModal from './components/ProfessionalModal'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    area: '',
    cidade: '',
    tecnologia: ''
  })
  const [selectedProfessional, setSelectedProfessional] = useState(null)

  // Filtrar profissionais
  const filteredProfessionals = professionals.filter(professional => {
    const matchesSearch = professional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         professional.cargo.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesArea = !filters.area || professional.area === filters.area
    const matchesCidade = !filters.cidade || professional.localizacao.includes(filters.cidade)
    const matchesTech = !filters.tecnologia || 
                       professional.habilidadesTecnicas.some(tech => 
                         tech.toLowerCase().includes(filters.tecnologia.toLowerCase())
                       )

    return matchesSearch && matchesArea && matchesCidade && matchesTech
  })

  const handleRecommend = (professionalId) => {
    alert(`Recomendando o profissional ${professionalId}`)
    // Aqui você pode implementar a lógica real de recomendação
  }

  const handleMessage = (professionalId) => {
    alert(`Enviando mensagem para o profissional ${professionalId}`)
    // Aqui você pode implementar a lógica real de mensagem
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Encontre os Melhores Profissionais
          </h1>
          <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore uma rede de profissionais talentosos em diversas áreas e tecnologias
          </p>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* Busca e Filtros */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          darkMode={darkMode}
        />
        
        <FilterSection
          filters={filters}
          onFiltersChange={setFilters}
          professionals={professionals}
          darkMode={darkMode}
        />

        {/* Grid de Profissionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProfessionals.map(professional => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
              darkMode={darkMode}
              onViewProfile={() => setSelectedProfessional(professional)}
            />
          ))}
        </div>

        {/* Contador de resultados */}
        <div className={`text-center mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {filteredProfessionals.length} profissional{filteredProfessionals.length !== 1 ? 'es' : ''} encontrado{filteredProfessionals.length !== 1 ? 's' : ''}
        </div>

        {/* Modal */}
        <ProfessionalModal
          professional={selectedProfessional}
          darkMode={darkMode}
          onClose={() => setSelectedProfessional(null)}
          onRecommend={handleRecommend}
          onMessage={handleMessage}
        />
      </div>
    </div>
  )
}

export default App