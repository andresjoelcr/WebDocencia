import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  ArrowLeft,
  Target,
  FlaskConical,
  MonitorSmartphone,
  Copyright,
  Scissors,
  RefreshCw,
  MapPinned,
  BookOpen,
  Boxes,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import Rain from '../components/Rain'
import './MaterialesPedagogicos.css'

const criteriosSteps = [
  {
    icon: Target,
    title: 'Pertinencia y Alineación Curricular',
    points: ['Objetivos del syllabus', 'Sin "material de relleno"', 'Resultado esperado'],
    detail:
      'Seleccionar lecturas, videos y ejercicios que respondan directamente a los objetivos de aprendizaje del syllabus. Evitar material secundario que no aporte al resultado esperado ("material de relleno").',
  },
  {
    icon: FlaskConical,
    title: 'Rigor y Actualización Científica',
    points: ['Fuentes confiables', 'Datos vigentes', 'Editoriales reconocidas'],
    detail:
      'Verificar que las fuentes de información sean confiables, con datos vigentes, referencias bibliográficas sólidas y procedentes de repositorios o editoriales reconocidas.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Accesibilidad y Formatos Diversos',
    points: ['Lecturas breves', 'Diagramas y audios', 'Accesibilidad tecnológica'],
    detail:
      'Priorizar materiales multiformato (lecturas breves, diagramas, audios, elementos visuales) para atender diferentes estilos de aprendizaje y asegurar accesibilidad tecnológica.',
  },
  {
    icon: Copyright,
    title: 'Licencias y Derechos de Autor',
    points: ['Creative Commons', 'Dominio público', 'Citar autoría'],
    detail:
      'Asegurar el uso de recursos con licencias abiertas (Creative Commons), recursos del dominio público o material propio institucional, citando siempre la autoría original.',
  },
]

const adaptacionTabs = [
  {
    icon: Scissors,
    title: 'Digestión de Contenidos y Microaprendizaje',
    points: ['Lecturas cortas', 'Módulos temáticos', 'Preguntas orientadoras'],
    content:
      'Dividir documentos extensos o capítulos largos en lecturas cortas o módulos temáticos focalizados, acompañados de preguntas orientadoras para facilitar la retención.',
  },
  {
    icon: RefreshCw,
    title: 'Actualización de Bancos de Ejercicios y Casos',
    points: ['Reactivar semestres previos', 'Contextos actuales', 'Casos contemporáneos'],
    content:
      'Modificar datos, contextos o problemáticas de reactivos y guías de semestres anteriores para adecuarlos a situaciones reales y contemporáneas del entorno local o profesional.',
  },
  {
    icon: MapPinned,
    title: 'Contextualización del Material',
    points: ['Ejemplos prácticos', 'Casos cercanos', 'Aplicación en la industria'],
    content:
      'Traducir conceptos teóricos abstractos a ejemplos prácticos, estudios de caso cercanos a la realidad de los estudiantes y aplicaciones en la industria actual.',
  },
]

const articulacion = {
  teoria: [
    'Entregar guías de lectura rápida, esquemas o diagramas conceptuales antes de la sesión práctica.',
    'Definir claramente el propósito pedagógico y los parámetros que el estudiante debe revisar previamente.',
  ],
  practica: [
    'Conectar los conceptos revisados en las guías con las variables y toma de decisiones dentro de la simulación.',
    'Utilizar el reporte o métrica del escenario 3D como insumo directo para la retroalimentación y evaluación.',
  ],
}

export default function MaterialesPedagogicos() {
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

  const StepIcon = criteriosSteps[activeStep].icon

  const toggleTab = (i: number) =>
    setOpenTabs((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  return (
    <section className="section mate">
      <Rain image="/gota.png" count={20} />

      <div className="mate-progress" style={{ width: `${progress}%` }} />

      <div className="container mate-container">
        <Link to="/capacitacion" className="mate-back anim-rise anim-rise-1">
          <ArrowLeft size={16} />
          Volver a Capacitación
        </Link>

        <div className="mate-head">
          <span className="section-tag anim-rise anim-rise-2">
            <Sparkles size={15} />
            Capacitación
          </span>
          <h1 className="section-title anim-rise anim-rise-3">
            Selección y Adaptación de{' '}
            <span className="text-verde">Materiales Pedagógicos</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-4">
            Criterios para la curaduría de contenidos, reutilización eficiente y
            articulación didáctica.
          </p>
        </div>

        <div className="mate-body">
          <h2 className="mate-section-title anim-rise anim-rise-2">
            <span className="mate-section-num">1</span>
            Criterios para la Curaduría de Contenidos
          </h2>
          <div className="mate-conduct">
            <div className="mate-conduct-steps" role="tablist">
              {criteriosSteps.map((step, index) => {
                const active = activeStep === index
                return (
                  <button
                    key={step.title}
                    className={`mate-conduct-step ${active ? 'mate-conduct-step-active' : ''}`}
                    onClick={() => setActiveStep(index)}
                    role="tab"
                    aria-selected={active}
                    aria-controls="mate-conduct-panel"
                  >
                    <span className="mate-conduct-step-icon">
                      <step.icon size={34} />
                    </span>
                    <span className="mate-conduct-step-title">{step.title}</span>
                  </button>
                )
              })}
            </div>

            <div
              id="mate-conduct-panel"
              role="tabpanel"
              className="mate-conduct-panel"
              key={activeStep}
            >
              <div className="mate-conduct-panel-head">
                <span className="mate-conduct-panel-icon">
                  <StepIcon size={30} />
                </span>
                <div>
                  <h3>
                    Criterio {activeStep + 1}: {criteriosSteps[activeStep].title}
                  </h3>
                  <span className="mate-conduct-panel-step">
                    Criterio {activeStep + 1} de {criteriosSteps.length}
                  </span>
                </div>
              </div>
              <div className="mate-conduct-panel-points">
                {criteriosSteps[activeStep].points.map((point, i) => (
                  <span key={i} className="mate-chip">
                    <CheckCircle2 size={15} />
                    {point}
                  </span>
                ))}
              </div>
              <p className="mate-conduct-panel-detail">{criteriosSteps[activeStep].detail}</p>
            </div>
          </div>

          <h2 className="mate-section-title anim-rise anim-rise-2">
            <span className="mate-section-num">2</span>
            Estrategias de Adaptación y Reutilización
          </h2>
          <div className="mate-acc">
            {adaptacionTabs.map((tab, index) => {
              const open = openTabs.includes(index)
              return (
                <article key={tab.title} className={`mate-acc-item ${open ? 'mate-acc-open' : ''}`}>
                  <button
                    className="mate-acc-head"
                    onClick={() => toggleTab(index)}
                    aria-expanded={open}
                  >
                    <span className="mate-acc-icon">
                      <tab.icon size={22} />
                    </span>
                    <span className="mate-acc-title">{tab.title}</span>
                    <ChevronDown className="mate-acc-chevron" size={20} />
                  </button>
                  <div className="mate-acc-body">
                    <div className="mate-acc-points">
                      {tab.points.map((point, i) => (
                        <span key={i} className="mate-chip">
                          <CheckCircle2 size={15} />
                          {point}
                        </span>
                      ))}
                    </div>
                    <p className="mate-acc-detail">{tab.content}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <h2 className="mate-section-title anim-rise anim-rise-2">
            <span className="mate-section-num">3</span>
            Articulación con Entornos Virtuales y 3D
          </h2>
          <div className="mate-matrix">
            <div className="mate-matrix-col mate-matrix-teoria">
              <div className="mate-matrix-head">
                <span className="mate-matrix-icon">
                  <BookOpen size={24} />
                </span>
                <div>
                  <h3>Fase Teórica / Preparatoria</h3>
                  <span className="mate-matrix-tag">Material de soporte</span>
                </div>
              </div>
              <ul>
                {articulacion.teoria.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mate-matrix-col mate-matrix-practica">
              <div className="mate-matrix-head">
                <span className="mate-matrix-icon">
                  <Boxes size={24} />
                </span>
                <div>
                  <h3>Fase Práctica / Aplicación</h3>
                  <span className="mate-matrix-tag">Escenario virtual o laboratorio</span>
                </div>
              </div>
              <ul>
                {articulacion.practica.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
