import {
  MonitorPlay,
  ClipboardList,
  Award,
  MessageCircle,
  ScanSearch,
  RefreshCcw,
} from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: MonitorPlay,
    title: 'Escenas de práctica',
    description:
      'Se te presentan distintas escenas de aula donde debes actuar como docente en formación.',
  },
  {
    icon: ScanSearch,
    title: 'Tú decides, el aula reacciona',
    description:
      'Cada decisión que tomas dentro de la escena genera una reacción distinta de los estudiantes virtuales.',
  },
  {
    icon: Award,
    title: 'Calificación de tu desempeño',
    description:
      'Al finalizar cada escena recibes una calificación según lo que hiciste durante la práctica.',
  },
  {
    icon: MessageCircle,
    title: 'Retroalimentación detallada',
    description:
      'Obtienes comentarios específicos sobre cada acción para saber qué hiciste bien y qué mejorar.',
  },
  {
    icon: RefreshCcw,
    title: 'Practica sin límites',
    description:
      'Repite las escenas las veces que quieras y mejora tu desempeño con cada intento.',
  },
  {
    icon: ClipboardList,
    title: 'Preparación para la práctica real',
    description:
      'Enfrenta situaciones de aula en un entorno seguro antes de tu práctica docente real.',
  },
]

export default function Features() {
  return (
    <section id="caracteristicas" className="section features">
      <div className="container">
        <div className="features-head">
          <span className="section-tag anim-rise anim-rise-1">Características</span>
          <h2 className="section-title anim-rise anim-rise-2">
            Todo lo que necesitas para{' '}
            <span className="text-verde">desarrollar tus habilidades</span>
          </h2>
          <p className="section-subtitle anim-rise anim-rise-3">
            Una plataforma pensada para la carrera de Educación Básica, donde
            practicas tu labor docente a través de escenas que evalúan tu
            desempeño y te brindan retroalimentación.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`feature-card anim-rise anim-rise-${Math.min(i + 1, 6)}`}
            >
              <span className="feature-card-icon">
                <f.icon size={24} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}