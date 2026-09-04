import { Link } from 'react-router-dom'
import { Sparkles, ShieldCheck, Scale, TriangleAlert, BookOpenCheck, ArrowRight } from 'lucide-react'
import Rain from '../components/Rain'
import './Capacitacion.css'

const modules = [
  {
    to: '/capacitacion/normas',
    icon: Scale,
    title: 'Normas de Comportamiento y Ética Profesional',
    description:
      'Reglas y directrices que guían la conducta del docente dentro y fuera del aula para mantener el profesionalismo y la integridad académica.',
  },
  {
    to: '/capacitacion/protocolos',
    icon: ShieldCheck,
    title: 'Protocolos Institucionales y Seguridad',
    description:
      'Procedimientos claros ante el acoso, incidentes, emergencias y la ruta administrativa a seguir según el tipo de problema.',
  },
  {
    to: '/capacitacion/crisis',
    icon: TriangleAlert,
    title: 'Manejo de Crisis y Conflictos en el Aula',
    description:
      'Técnicas de desescalamiento, registro de faltas disciplinarias y mediación para resolver disputas mediante el diálogo guiado.',
  },
  {
    to: '/capacitacion/materiales',
    icon: BookOpenCheck,
    title: 'Selección y Adaptación de Materiales Pedagógicos',
    description:
      'Criterios para curar contenidos que aporten al objetivo de la clase y técnicas para reutilizar y actualizar materiales anteriores.',
  },
]

export default function Capacitacion() {
  return (
    <section className="section capacitacion">
      <Rain image="/gota.png" count={20} />
      <div className="container capacitacion-container">
        <div className="capacitacion-head">
          <span className="section-tag anim-rise anim-rise-1">
            <Sparkles size={15} />
            Capacitación
          </span>
          <h1 className="section-title anim-rise anim-rise-2">
            Capacitación <span className="text-verde">Docente</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-3">
            Módulos formativos con guías y protocolos esenciales para fortalecer
            tu desempeño docente y mantener un ambiente seguro, profesional y
            respetuoso.
          </p>
        </div>

        <div className="capacitacion-list">
          {modules.map((m, index) => (
            <div
              key={m.to}
              className={`capacitacion-row anim-rise anim-rise-${Math.min(index + 2, 6)}`}
            >
              <span className="capacitacion-card-icon">
                <m.icon size={36} />
              </span>
              <div className="capacitacion-row-body">
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
              <Link to={m.to} className="btn btn-primario capacitacion-row-btn">
                Entrar al módulo <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
