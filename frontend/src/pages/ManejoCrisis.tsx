import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowLeft,
  ShieldOff,
  PauseCircle,
  Ear,
  DoorClosed,
  MessageCircle,
  Target,
  PenLine,
  ScrollText,
  Scale,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import Rain from '../components/Rain'
import './ManejoCrisis.css'

const desescalateSteps = [
  {
    icon: ShieldOff,
    title: 'Autocontrol y Manejo del Lenguaje No Verbal',
    points: ['Tono firme y pausado', 'Postura abierta', 'Distancia adecuada'],
    content:
      'Mantener un tono de voz firme pero pausado, postura corporal abierta y distancia física adecuada. Evitar señalar con el dedo o elevar la voz para no escalar la confrontación.',
  },
  {
    icon: PauseCircle,
    title: 'Interrupción del Foco de Tensión',
    points: ['Pausa estratégica', 'Cambiar la dinámica', 'Redirigir la atención'],
    content:
      'Hacer una pausa estratégica en la clase. Cambiar la dinámica o redirigir la atención del grupo (p. ej., asignar una tarea breve e individual al resto de la clase) para aislar el conflicto.',
  },
  {
    icon: Ear,
    title: 'Escucha Activa y Validación Inicial',
    points: ['Espacio para expresar', 'Sin interrumpir', 'Frases de contención'],
    content:
      'Dar espacio al estudiante para expresar su malestar brevemente sin interrumpir, utilizando frases de contención como "Entiendo tu molestia, pero debemos solucionarlo por la vía adecuada".',
  },
  {
    icon: DoorClosed,
    title: 'Privacidad y Posponer la Resolución',
    points: ['Evitar debate público', 'Espacio neutral', 'Control del aula'],
    content:
      'Evitar el debate público. Indicar al estudiante que el tema se abordará en privado al finalizar la sesión o en un espacio neutral (oficina/tutoría) para no perder el control del aula.',
  },
]

const mediacionTabs = [
  {
    icon: MessageCircle,
    title: 'Fase de Apertura y Reglas del Diálogo',
    points: ['Entorno seguro', 'Hablar por turnos', 'Sin interrupciones ni insultos'],
    content:
      'Establecer un entorno seguro donde ambas partes se comprometan a hablar por turnos, sin interrupciones, insultos ni descalificaciones personales.',
  },
  {
    icon: Target,
    title: 'Identificación de Intereses y Puntos de Encuentro',
    points: ['Separar problema de personas', 'Qué necesita cada parte', 'Puntos de coincidencia'],
    content:
      'Guiar la conversación para separar el problema de las personas. Identificar qué necesita cada parte y en qué puntos coinciden para llegar a un acuerdo.',
  },
  {
    icon: PenLine,
    title: 'Acuerdos y Compromisos Escritos',
    points: ['Ambas partes ceden y ganan', 'Acuerdo práctico', 'Acta de mediación'],
    content:
      'Formalizar soluciones prácticas donde ambas partes cedan y ganen algo. Registrar los compromisos en un documento o acta simple de mediación.',
  },
]

const sancionCards = [
  {
    icon: ScrollText,
    title: 'Tipificación y Objetividad en el Reporte',
    when: '¿Qué hago?',
    points: ['Hechos observables', 'Fecha, hora y testigos', 'Sin juicios de valor'],
    detalle:
      'Registrar únicamente hechos observables y verificables (fecha, hora, conducta exacta y testigos), evitando adjetivos calificativos o suposiciones sobre la intencionalidad del alumno.',
  },
  {
    icon: Scale,
    title: 'Garantía del Debido Proceso y Derecho a Réplica',
    when: '¿Qué hago?',
    points: ['Informar la falta', 'Permitir su versión', 'Constancia por escrito'],
    detalle:
      'Informar al estudiante de manera clara sobre la falta cometida, permitirle exponer su versión de los hechos y dejar constancia por escrito en el expediente.',
  },
  {
    icon: TrendingUp,
    title: 'Escalamiento Gradual de Sanciones',
    when: 'Proporcionalidad',
    points: ['Amonestación verbal', 'Amonestación escrita', 'Comisión disciplinaria'],
    detalle:
      'Aplicar la proporcionalidad: 1° Amonestación verbal en privado, 2° Amonestación escrita y reporte al sistema, 3° Remisión a la comisión disciplinaria o autoridad superior.',
  },
]

export default function ManejoCrisis() {
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [openTabs, setOpenTabs] = useState<number[]>([0])

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

  const toggleTab = (i: number) =>
    setOpenTabs((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  const StepIcon = desescalateSteps[activeStep].icon

  return (
    <section className="section crisis">
      <Rain image="/gota.png" count={20} />

      <div className="crisis-progress" style={{ width: `${progress}%` }} />

      <div className="container crisis-container">
        <Link to="/capacitacion" className="crisis-back anim-rise anim-rise-1">
          <ArrowLeft size={16} />
          Volver a Capacitación
        </Link>

        <div className="crisis-head">
          <span className="section-tag anim-rise anim-rise-2">
            <Sparkles size={15} />
            Capacitación
          </span>
          <h1 className="section-title anim-rise anim-rise-3">
            Manejo de Crisis y{' '}
            <span className="text-verde">Conflictos en el Aula</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-4">
            Estrategias de desescalamiento, resolución de disputas y gestión
            objetiva de sanciones disciplinarias.
          </p>
        </div>

        <div className="crisis-body">
          <h2 className="crisis-section-title anim-rise anim-rise-2">
            <span className="crisis-section-num">1</span>
            Técnicas de Desescalamiento Inmediato
          </h2>
          <div className="crisis-conduct-steps" role="tablist">
            {desescalateSteps.map((step, index) => {
              const active = activeStep === index
              return (
                <button
                  key={step.title}
                  className={`crisis-conduct-step ${active ? 'crisis-conduct-step-active' : ''}`}
                  onClick={() => setActiveStep(index)}
                  role="tab"
                  aria-selected={active}
                  aria-controls="crisis-conduct-panel"
                >
                  <span className="crisis-conduct-step-icon">
                    <step.icon size={34} />
                  </span>
                  <span className="crisis-conduct-step-title">{step.title}</span>
                </button>
              )
            })}
          </div>
          <div id="crisis-conduct-panel" role="tabpanel" className="crisis-conduct-panel" key={activeStep}>
            <div className="crisis-conduct-panel-head">
              <span className="crisis-conduct-panel-icon">
                <StepIcon size={30} />
              </span>
              <div>
                <h3>
                  Paso {activeStep + 1}: {desescalateSteps[activeStep].title}
                </h3>
                <span className="crisis-conduct-panel-step">
                  Paso {activeStep + 1} de {desescalateSteps.length}
                </span>
              </div>
            </div>
            <div className="crisis-conduct-panel-points">
              {desescalateSteps[activeStep].points.map((point, i) => (
                <span key={i} className="crisis-chip">
                  <CheckCircle2 size={15} />
                  {point}
                </span>
              ))}
            </div>
            <p className="crisis-conduct-panel-detail">
              {desescalateSteps[activeStep].content}
            </p>
          </div>

          <h2 className="crisis-section-title anim-rise anim-rise-2">
            <span className="crisis-section-num">2</span>
            Mediación y Resolución de Disputas entre Alumnos
          </h2>
          <div className="crisis-acc">
            {mediacionTabs.map((tab, index) => {
              const open = openTabs.includes(index)
              return (
                <article key={tab.title} className={`crisis-acc-item ${open ? 'crisis-acc-open' : ''}`}>
                  <button
                    className="crisis-acc-head"
                    onClick={() => toggleTab(index)}
                    aria-expanded={open}
                  >
                    <span className="crisis-acc-icon">
                      <tab.icon size={22} />
                    </span>
                    <span className="crisis-acc-title">{tab.title}</span>
                    <ChevronDown className="crisis-acc-chevron" size={20} />
                  </button>
                  <div className="crisis-acc-body">
                    <div className="crisis-acc-points">
                      {tab.points.map((point, i) => (
                        <span key={i} className="crisis-chip">
                          <CheckCircle2 size={15} />
                          {point}
                        </span>
                      ))}
                    </div>
                    <p className="crisis-acc-detail">{tab.content}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <h2 className="crisis-section-title anim-rise anim-rise-2">
            <span className="crisis-section-num">3</span>
            Sanciones y Faltas Disciplinarias
          </h2>
          <div className="crisis-cards">
            {sancionCards.map((card, index) => (
              <article
                key={card.title}
                className={`crisis-card anim-rise anim-rise-${Math.min(index + 2, 6)}`}
              >
                <span className="crisis-card-icon">
                  <card.icon size={26} />
                </span>
                <h3>{card.title}</h3>
                <span className="crisis-card-label">{card.when}</span>
                <div className="crisis-card-points">
                  {card.points.map((point, i) => (
                    <span key={i} className="crisis-chip">
                      <CheckCircle2 size={14} />
                      {point}
                    </span>
                  ))}
                </div>
                <p>{card.detalle}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
