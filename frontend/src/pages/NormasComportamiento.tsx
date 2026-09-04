import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Mail,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Megaphone,
  MessageSquareText,
  Ear,
} from 'lucide-react'
import Rain from '../components/Rain'
import './NormasComportamiento.css'

const conductCards = [
  {
    icon: Clock,
    title: 'Puntualidad y Presencia Profesional',
    summary: 'Horarios, imagen y preparación previa.',
    points: ['Horarios rigurosos', 'Imagen acorde', 'Preparación previa'],
    detail:
      'Cumplimiento riguroso de horarios en sesiones presenciales y virtuales, vestimenta/imagen acorde al entorno académico y preparación previa de cada clase.',
  },
  {
    icon: ShieldCheck,
    title: 'Integridad Académica',
    summary: 'Evaluación imparcial y transparente.',
    points: ['Evaluación imparcial', 'Rúbricas objetivas', 'Cero tolerancia al plagio'],
    detail:
      'Imparcialidad en la evaluación, aplicación objetiva de rúbricas, manejo transparente de notas y cero tolerancia al plagio o manipulación de datos.',
  },
  {
    icon: Mail,
    title: 'Comunicación por Canales Oficiales',
    summary: 'Solo plataformas institucionales.',
    points: ['Correo institucional', 'LMS oficial', 'Privacidad'],
    detail:
      'Uso exclusivo de plataformas institucionales (correo institucional, LMS) para contacto con estudiantes, respetando horarios laborales y la privacidad.',
  },
  {
    icon: HeartHandshake,
    title: 'Respeto y Cero Discriminación',
    summary: 'Trato equitativo e inclusivo.',
    points: ['Lenguaje inclusivo', 'Trato equitativo', 'Diversidad'],
    detail:
      'Garantía de un trato equitativo, uso de lenguaje respetuoso e inclusivo, y consideración hacia la diversidad cultural, de género y de pensamiento.',
  },
]

const comparison = {
  good: [
    'Realizar tutorías o atenciones en espacios visibles o plataformas institucionales grabadas.',
    'Centrar la comunicación y la retroalimentación estrictamente en el desarrollo académico.',
    'Garantizar la misma accesibilidad y oportunidades para todos los estudiantes del grupo.',
  ],
  bad: [
    'Mantener contacto informal o privado mediante redes sociales o telefonía personal.',
    'Aceptar regalos, favores o compromisos que generen conflictos de interés o favoritismos.',
    'Hacer comentarios de doble sentido, personalizaciones, burlas o juicios sobre la vida privada de los estudiantes.',
  ],
}

const climateTabs = [
  {
    icon: Megaphone,
    title: 'Claridad de Reglas desde el Inicio',
    badge: 'Día 1',
    points: [
      'Políticas de entrega',
      'Reglas de convivencia',
      'Uso de tecnología en clase',
      'Criterios de participación',
    ],
    content:
      'Establecimiento claro de las políticas de entrega, reglas de convivencia, uso de tecnología en clase y criterios de participación desde el primer día. Así los estudiantes conocen las expectativas desde el inicio.',
  },
  {
    icon: MessageSquareText,
    title: 'Fomento del Debate Constructivo',
    badge: 'Durante la clase',
    points: [
      'Argumentación fundamentada',
      'Evitar descalificaciones personales',
      'Moderación de discusiones',
      'Espacios de opinión respetuosa',
    ],
    content:
      'Estrategias para moderar discusiones complejas en el aula, promoviendo la argumentación fundamentada y evitando descalificaciones personales.',
  },
  {
    icon: Ear,
    title: 'Manejo del Desacuerdo y Escucha Activa',
    badge: 'Ante reclamos',
    points: [
      'Contención y empatía',
      'Escucha activa',
      'Profesionalismo',
      'Autoridad pedagógica',
    ],
    content:
      'Técnicas de contención y profesionalismo al receptar reclamos sobre calificaciones o sugerencias de los estudiantes, manteniendo la empatía sin perder la autoridad pedagógica.',
  },
]

export default function NormasComportamiento() {
  const [progress, setProgress] = useState(0)
  const [activeConduct, setActiveConduct] = useState(0)
  const [openClimates, setOpenClimates] = useState<number[]>([0])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleClimate = (i: number) =>
    setOpenClimates((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )

  const ConductIcon = conductCards[activeConduct].icon

  return (
    <section className="section normas">
      <Rain image="/gota.png" count={20} />

      <div className="normas-progress" style={{ width: `${progress}%` }} />

      <div className="container normas-container">
        <Link to="/capacitacion" className="cap-detail-back anim-rise anim-rise-1">
          <ArrowLeft size={16} />
          Volver a Capacitación
        </Link>

        <div className="normas-head">
          <span className="section-tag anim-rise anim-rise-2">
            <Sparkles size={15} />
            Capacitación
          </span>
          <h1 className="section-title anim-rise anim-rise-3">
            Normas de Comportamiento y{' '}
            <span className="text-verde">Ética Profesional</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-4">
            Pautas de conducta, ética institucional y gestión del clima en el
            aula.
          </p>
        </div>

        <div className="normas-body">
          <h2 className="normas-section-title anim-rise anim-rise-2">
            <span className="normas-section-num">1</span>
            Código de Conducta e Integridad
          </h2>
          <div className="normas-conduct">
            <div className="normas-conduct-steps" role="tablist">
              {conductCards.map((c, index) => {
                const active = activeConduct === index
                return (
                  <button
                    key={c.title}
                    className={`normas-conduct-step ${active ? 'normas-conduct-step-active' : ''}`}
                    onClick={() => setActiveConduct(index)}
                    role="tab"
                    aria-selected={active}
                    aria-controls="conduct-panel"
                  >
                    <span className="normas-conduct-step-icon">
                      <c.icon size={34} />
                    </span>
                    <span className="normas-conduct-step-title">{c.title}</span>
                  </button>
                )
              })}
            </div>

            <div
              id="conduct-panel"
              role="tabpanel"
              className="normas-conduct-panel"
              key={activeConduct}
            >
              <div className="normas-conduct-panel-head">
                <span className="normas-conduct-panel-icon">
                  <ConductIcon size={30} />
                </span>
                <div>
                  <h3>{conductCards[activeConduct].title}</h3>
                  <p>{conductCards[activeConduct].summary}</p>
                </div>
              </div>
              <div className="normas-conduct-panel-points">
                {conductCards[activeConduct].points.map((point, i) => (
                  <span key={i} className="normas-chip">
                    <CheckCircle2 size={15} />
                    {point}
                  </span>
                ))}
              </div>
              <p className="normas-conduct-panel-detail">
                {conductCards[activeConduct].detail}
              </p>
            </div>
          </div>

          <h2 className="normas-section-title anim-rise anim-rise-2">
            <span className="normas-section-num">2</span>
            Límites de la Relación Docente-Estudiante
          </h2>
          <div className="normas-compare">
            <div className="normas-compare-col normas-compare-good">
              <div className="normas-compare-head">
                <CheckCircle2 size={22} />
                Buenas Prácticas
              </div>
              <ul>
                {comparison.good.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="normas-compare-col normas-compare-bad">
              <div className="normas-compare-head">
                <XCircle size={22} />
                No Permitidas
              </div>
              <ul>
                {comparison.bad.map((item, i) => (
                  <li key={i}>
                    <XCircle size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="normas-section-title anim-rise anim-rise-2">
            <span className="normas-section-num">3</span>
            Gestión del Clima en el Aula
          </h2>
          <div className="normas-climate">
            {climateTabs.map((tab, index) => {
              const open = openClimates.includes(index)
              return (
                <article
                  key={tab.title}
                  className={`normas-climate-item ${open ? 'normas-climate-open' : ''}`}
                >
                  <button
                    className="normas-climate-head"
                    onClick={() => toggleClimate(index)}
                    aria-expanded={open}
                  >
                    <span className="normas-climate-icon">
                      <tab.icon size={24} />
                    </span>
                    <span className="normas-climate-title">{tab.title}</span>
                    <span className="normas-climate-badge">{tab.badge}</span>
                    <ChevronDown
                      className="normas-climate-chevron"
                      size={20}
                    />
                  </button>
                  <div className="normas-climate-body">
                    <div className="normas-climate-points">
                      {tab.points.map((point, i) => (
                        <span key={i} className="normas-chip">
                          <CheckCircle2 size={15} />
                          {point}
                        </span>
                      ))}
                    </div>
                    <p className="normas-climate-detail">{tab.content}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
