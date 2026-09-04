import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-pattern" aria-hidden="true" />
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge anim-rise anim-rise-1">
            <Sparkles size={16} />
            Simulador de práctica docente
          </span>

          <h1 className="hero-title anim-rise anim-rise-2">
            Vive la docencia{' '}
            <span className="hero-title-accent">antes de las aulas</span>
          </h1>

          <p className="hero-subtitle anim-rise anim-rise-3">
            Un entorno virtual donde practicas la docencia a través de escenas
            de aula: actúa, recibe tu calificación y la retroalimentación
            correspondiente a cada decisión que tomes.
          </p>

          <div className="hero-actions anim-rise anim-rise-4">
            <a href="#caracteristicas" className="btn btn-primario hero-btn">
              Explorar la plataforma
              <ArrowRight size={18} />
            </a>
            <a href="#bienvenida" className="btn btn-primario hero-btn">
              <PlayCircle size={18} />
              Conocer más
            </a>
          </div>

          <div className="hero-stats anim-rise anim-rise-5">
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Práctica virtual</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">0</span>
              <span className="hero-stat-label">Riesgo en el aula</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}