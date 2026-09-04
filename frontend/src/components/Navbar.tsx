import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { GraduationCap, Menu, X, Home, Info, Clapperboard, School } from 'lucide-react'
import './Navbar.css'

const links = [
  { href: '/', label: 'Inicio', icon: Home },
  { href: '/informacion', label: 'Información', icon: Info },
  { href: '/capacitacion', label: 'Capacitación', icon: School },
  { href: '/escenarios', label: 'Escenarios', icon: Clapperboard },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">
            <GraduationCap size={24} strokeWidth={2.2} />
          </span>
          <span className="navbar-logo-text">
            Web<span className="text-verde">Docencia</span>
          </span>
        </Link>

        <ul className="navbar-links">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink
                to={l.href}
                end={l.href === '/'}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'navbar-link-active' : ''}`
                }
              >
                <l.icon size={16} />
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/escenarios" className="btn btn-oscuro navbar-cta">
          Comenzar ahora
        </Link>

        <button
          className="navbar-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="navbar-mobile">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <NavLink
                  to={l.href}
                  end={l.href === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? 'navbar-link-active' : ''}`
                  }
                >
                  <l.icon size={16} />
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/escenarios"
            className="btn btn-primario navbar-cta-mobile"
            onClick={() => setOpen(false)}
          >
            Comenzar ahora
          </Link>
        </div>
      )}
    </header>
  )
}