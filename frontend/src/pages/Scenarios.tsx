import { Sparkles, DoorOpen, MessageCircleQuestion, Presentation, ShieldAlert, Siren } from 'lucide-react'
import Rain from '../components/Rain'
import './Scenarios.css'

const scenarios = [
  {
    icon: DoorOpen,
    title: 'Preparación del aula',
    description:
      'Prepara el aula para el inicio de la clase: organiza el espacio, verifica los materiales y da una bienvenida adecuada a los estudiantes.',
    escena: 'EscenaPrepararAula',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Atención a inquietudes',
    description:
      'Responde de manera adecuada las inquietudes de los estudiantes, aclarando dudas con paciencia y claridad durante la clase.',
  },
  {
    icon: Presentation,
    title: 'Conducción de la clase',
    description:
      'Imparte la clase manteniendo la atención del grupo: corrige a estudiantes distraídos, que conversan o interrumpen, de forma oportuna.',
    escena: 'ConducciónClase',
  },
  {
    icon: ShieldAlert,
    title: 'Situaciones en el patio',
    description:
      'Actúa ante situaciones que ocurren fuera del aula, como el acoso o bullying, aplicando una intervención adecuada y segura.',
    escena: 'Exterior',
  },
  {
    icon: Siren,
    title: 'Manejo de emergencias',
    description:
      'Enfrenta imprevistos en el aula: accidentes, conflictos entre estudiantes o interrupciones, manteniendo la calma y la seguridad del grupo.',
  },
]

export default function Scenarios() {
  return (
    <section className="section scenarios">
      <Rain image="/gota.png" count={20} />
      <div className="container scenarios-container">
        <div className="scenarios-head">
          <span className="section-tag anim-rise anim-rise-1">
            <Sparkles size={15} />
            Escenarios
          </span>
          <h1 className="section-title anim-rise anim-rise-2">
            Practica con nuestros{' '}
            <span className="text-verde">escenarios</span>
          </h1>
          <p className="section-subtitle anim-rise anim-rise-3">
            Selecciona el escenario en el que deseas practicar y actúa como
            docente. Al finalizar recibirás tu calificación y retroalimentación.
          </p>
        </div>

        <div className="scenarios-grid">
          {scenarios.map((s, index) => {
            const Element = s.escena ? 'a' : 'article'
            return (
              <Element
                key={s.title}
                className={`scenario-card anim-rise anim-rise-${Math.min(index + 1, 6)}`}
                {...(s.escena
                  ? { href: `/unity.html?escena=${encodeURIComponent(s.escena)}` }
                  : {})}
              >
                <span className="scenario-card-icon">
                  <s.icon size={26} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                {s.escena && <span className="scenario-card-hint">Ingresar →</span>}
              </Element>
            )
          })}
        </div>
      </div>
    </section>
  )
}