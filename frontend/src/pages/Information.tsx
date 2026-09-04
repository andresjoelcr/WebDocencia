import { LayoutGrid, MousePointerClick, Sparkles, ClipboardCheck, BookOpenCheck } from 'lucide-react'
import Rain from '../components/Rain'
import './Information.css'

const steps = [
  {
    icon: BookOpenCheck,
    title: 'Ingresa al apartado de capacitación',
    description:
      'Ve al apartado de Capacitación, donde encontrarás las recomendaciones necesarias para tu desempeño en el aula: manejo de crisis, normas de comportamiento, protocolos de seguridad y selección de materiales pedagógicos.',
  },
  {
    icon: LayoutGrid,
    title: 'Ingresa al apartado de escenarios',
    description:
      'Dirígete al apartado de Escenarios, donde podrás seleccionar el escenario de práctica docente que desees. Cada uno presenta una situación de aula distinta para poner a prueba tu desempeño.',
  },
  {
    icon: MousePointerClick,
    title: 'Sigue las indicaciones del simulador',
    description:
      'Dentro del simulador lee con atención las indicaciones que se te presentan y actúa según lo que consideres más adecuado para la situación.',
  },
  {
    icon: ClipboardCheck,
    title: 'Recibe tu calificación y retroalimentación',
    description:
      'Al finalizar, la plataforma te asigna una calificación según lo que hiciste y te brinda la retroalimentación correspondiente para mejorar.',
  },
]

export default function Information() {
  return (
    <section className="section info">
      <Rain image="/gota.png" count={20} />
      <div className="container info-container">
        <div className="info-head">
          <span className="section-tag anim-rise anim-rise-1">
            <Sparkles size={15} />
            Información
          </span>
          <h1 className="section-title anim-rise anim-rise-2">
            ¿Cómo usar <span className="text-verde">la página?</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-3">
            Aprende a practicar tu labor docente a través de escenas de aula
            siguiendo estos sencillos pasos.
          </p>
        </div>

        <div className="info-steps">
          {steps.map((s, index) => (
            <article
              key={s.title}
              className={`info-step anim-rise anim-rise-${Math.min(index + 1, 6)}`}
            >
              <span className="info-step-number">{index + 1}</span>
              <span className="info-step-icon">
                <s.icon size={24} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}