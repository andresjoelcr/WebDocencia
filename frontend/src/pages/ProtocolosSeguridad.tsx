import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowLeft,
  Search,
  Ear,
  BellRing,
  ClipboardList,
  HeartPulse,
  Users,
  Flame,
  GraduationCap,
  HeartHandshake,
  Wrench,
  Briefcase,
  CheckCircle2,
} from 'lucide-react'
import './ProtocolosSeguridad.css'

const bullyingSteps = [
  {
    icon: Search,
    title: 'Detección e Identificación',
    points: ['Señales de alerta', 'Aula y virtual', 'Hostigamiento o discriminación'],
    content:
      'Identificar señales de alerta de acoso escolar, hostigamiento o discriminación dentro o fuera del aula (presencial/virtual).',
  },
  {
    icon: Ear,
    title: 'Escucha Inicial y Contención',
    points: ['Sin juicios de valor', 'Privacidad', 'Contención emocional'],
    content:
      'Recibir la denuncia o testimonio del estudiante sin emitir juicios de valor, garantizando privacidad y contención emocional inmediata.',
  },
  {
    icon: BellRing,
    title: 'Notificación Inmediata',
    points: ['Primeras 24 horas', 'Bienestar Estudiantil', 'Dirección General'],
    content:
      'Reportar el caso formalmente dentro de las primeras 24 horas a la instancia correspondiente (Bienestar Estudiantil / Dirección General).',
  },
  {
    icon: ClipboardList,
    title: 'Registro y Seguimiento',
    points: ['Formulario oficial', 'Documentación objetiva', 'Confidencialidad'],
    content:
      'Documentar objetivamente los hechos mediante el formulario oficial de la institución, manteniendo estricta confidencialidad.',
  },
]

const emergencyTabs = [
  {
    icon: HeartPulse,
    title: 'Emergencias Médicas y Accidentes',
    points: ['Servicio médico del campus', 'Líneas de emergencia', 'Calma del grupo'],
    content:
      'Procedimiento de reporte inmediato al servicio médico del campus o líneas de emergencia. Mantener la calma del grupo y evacuar el área solo si es necesario.',
  },
  {
    icon: Users,
    title: 'Faltas Disciplinarias Graves',
    points: ['Interrupciones severas', 'Violencia verbal/física', 'Seguridad del grupo'],
    content:
      'Pasos para gestionar interrupciones severas, violencia verbal/física o consumo de sustancias. Enfoque en la seguridad de los demás estudiantes y aviso de guardia/seguridad institucional.',
  },
  {
    icon: Flame,
    title: 'Evacuación y Riesgos Físicos',
    points: ['Rutas de evacuación', 'Puntos de encuentro', 'Líder del grupo'],
    content:
      'Rutas de evacuación, puntos de encuentro del campus y rol del docente como líder de grupo durante sismos, incendios u otras amenazas físicas.',
  },
]

const contactCards = [
  {
    icon: GraduationCap,
    area: 'Dirección Académica / Decanato',
    when: 'Consultas de programa analítico, licencias, reprogramación de evaluaciones o conflictos académicos no resueltos.',
  },
  {
    icon: HeartHandshake,
    area: 'Bienestar Estudiantil / Orientación',
    when: 'Casos de apoyo psicológico, necesidades educativas especiales o denuncias de acoso.',
  },
  {
    icon: Wrench,
    area: 'Soporte Técnico e Infraestructura',
    when: 'Fallas en laboratorios, plataformas virtuales, problemas con usuarios/contraseñas o daños en equipos.',
  },
  {
    icon: Briefcase,
    area: 'Recursos Humanos / Administración',
    when: 'Trámites contractuales, justificación de faltas docentes, nómina y certificaciones.',
  },
]

export default function ProtocolosSeguridad() {
  const [progress, setProgress] = useState(0)
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

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

  const StepIcon = bullyingSteps[activeStep].icon
  const ActiveTabIcon = emergencyTabs[activeTab].icon

  return (
    <section className="section proto">
      <div className="proto-progress" style={{ width: `${progress}%` }} />

      <div className="container proto-container">
        <Link to="/capacitacion" className="proto-back anim-rise anim-rise-1">
          <ArrowLeft size={16} />
          Volver a Capacitación
        </Link>

        <div className="proto-head">
          <span className="section-tag anim-rise anim-rise-2">
            <Sparkles size={15} />
            Capacitación
          </span>
          <h1 className="section-title anim-rise anim-rise-3">
            Protocolos Institucionales{' '}
            <span className="text-verde">y Seguridad</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-4">
            Rutas de actuación, gestión de emergencias y canales formales de
            atención.
          </p>
        </div>

        <div className="proto-body">
          <h2 className="proto-section-title anim-rise anim-rise-2">
            <span className="proto-section-num">1</span>
            Ruta de Actuación ante Acoso o Bullying
          </h2>
          <div className="proto-conduct">
            <div className="proto-conduct-steps" role="tablist">
              {bullyingSteps.map((step, index) => {
                const active = activeStep === index
                return (
                  <button
                    key={step.title}
                    className={`proto-conduct-step ${active ? 'proto-conduct-step-active' : ''}`}
                    onClick={() => setActiveStep(index)}
                    role="tab"
                    aria-selected={active}
                    aria-controls="proto-conduct-panel"
                  >
                    <span className="proto-conduct-step-icon">
                      <step.icon size={34} />
                    </span>
                    <span className="proto-conduct-step-title">{step.title}</span>
                  </button>
                )
              })}
            </div>

            <div
              id="proto-conduct-panel"
              role="tabpanel"
              className="proto-conduct-panel"
              key={activeStep}
            >
              <div className="proto-conduct-panel-head">
                <span className="proto-conduct-panel-icon">
                  <StepIcon size={30} />
                </span>
                <div>
                  <h3>
                    Paso {activeStep + 1}: {bullyingSteps[activeStep].title}
                  </h3>
                  <span className="proto-conduct-panel-step">
                    Paso {activeStep + 1} de {bullyingSteps.length}
                  </span>
                </div>
              </div>
              <div className="proto-conduct-panel-points">
                {bullyingSteps[activeStep].points.map((point, i) => (
                  <span key={i} className="proto-chip">
                    <CheckCircle2 size={15} />
                    {point}
                  </span>
                ))}
              </div>
              <p className="proto-conduct-panel-detail">
                {bullyingSteps[activeStep].content}
              </p>
            </div>
          </div>

          <h2 className="proto-section-title anim-rise anim-rise-2">
            <span className="proto-section-num">2</span>
            Protocolos de Emergencia y Faltas Graves
          </h2>
          <div className="proto-tabs" role="tablist">
            {emergencyTabs.map((tab, index) => {
              const active = activeTab === index
              return (
                <button
                  key={tab.title}
                  className={`proto-tab ${active ? 'proto-tab-active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  role="tab"
                  aria-selected={active}
                >
                  <tab.icon size={20} />
                  {tab.title}
                </button>
              )
            })}
          </div>
          <div className="proto-tab-panel" key={activeTab}>
            <div className="proto-tab-panel-head">
              <span className="proto-panel-icon">
                <ActiveTabIcon size={28} />
              </span>
              <h3>{emergencyTabs[activeTab].title}</h3>
            </div>
            <div className="proto-panel-points">
              {emergencyTabs[activeTab].points.map((point, i) => (
                <span key={i} className="proto-chip">
                  <CheckCircle2 size={15} />
                  {point}
                </span>
              ))}
            </div>
            <p className="proto-panel-detail">{emergencyTabs[activeTab].content}</p>
          </div>

          <h2 className="proto-section-title anim-rise anim-rise-2">
            <span className="proto-section-num">3</span>
            Directorio de Canales e Instancias Formales
          </h2>
          <div className="proto-contact">
            {contactCards.map((card, index) => (
              <article
                key={card.area}
                className={`proto-contact-card anim-rise anim-rise-${Math.min(index + 2, 6)}`}
              >
                <span className="proto-contact-icon">
                  <card.icon size={26} />
                </span>
                <h3>{card.area}</h3>
                <span className="proto-contact-label">¿Cuándo acudir?</span>
                <p>{card.when}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
