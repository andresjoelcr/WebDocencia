import { GraduationCap, Mail, MapPin, Globe, AtSign, Share2 } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="footer-logo">
              <span className="footer-logo-icon">
                <GraduationCap size={22} />
              </span>
              <span>
                Web<span className="text-verde">Docencia</span>
              </span>
            </a>
            <p>
              Entorno virtual donde practicas la docencia mediante escenas de
              aula, con calificación y retroalimentación para la carrera de
              Educación Básica.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Sitio web">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="Correo">
                <AtSign size={18} />
              </a>
              <a href="#" aria-label="Compartir">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explora</h4>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#bienvenida">Bienvenida</a>
              </li>
              <li>
                <a href="#caracteristicas">Características</a>
              </li>
              <li>
                <a href="#preguntas">Preguntas frecuentes</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="mailto:contacto@webdocencia.edu">
                  <Mail size={16} />
                  contacto@webdocencia.edu
                </a>
              </li>
              <li>
                <a href="#inicio">
                  <MapPin size={16} />
                  Facultad de Educación Básica
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} WebDocencia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}