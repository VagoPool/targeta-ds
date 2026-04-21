import './App.css'
import Particles from './Particles'

const links = [
  { label: 'Sitio web', url: 'https://digisolve.app', icon: '🌐' },
  { label: 'WhatsApp', url: 'https://wa.me/524775769503', icon: '💬' },
  { label: 'Correo', url: 'mailto:digisolve.app@outlook.com', icon: '📧' },
  { label: 'Servicios', url: 'https://digisolve.app/#servicios', icon: '🔧' },
  { label: 'Precios', url: 'https://digisolve.app/#precios', icon: '💰' },
]

function App() {
  return (
    <div className="page">
      <Particles />
      <div className="card">

        <div className="logo-wrap">
          <img className="logo" src="/logo.png" alt="Digisolve" />
        </div>

        <div className="title-wrap">
          <h1 className="name">DIGISOLVE</h1>
          <p className="tagline">Soluciones tecnológicas · León, Gto.</p>
        </div>

        <div className="badges">
          <span className="badge">✓ Diagnóstico gratis</span>
          <span className="badge">✓ Garantía 90 días</span>
          <span className="badge">✓ +1,000 equipos</span>
        </div>

        <div className="links">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-btn">
              <span className="link-icon">{link.icon}</span>
              <span className="link-label">{link.label}</span>
              <span className="link-arrow">→</span>
            </a>
          ))}
        </div>

        <p className="footer">© 2025 Digisolve · digisolve.app</p>
      </div>
    </div>
  )
}

export default App