import { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: '¿Para quién está dirigida la plataforma?',
    a: 'Está dirigida a estudiantes de la carrera de Educación Básica que se preparan para su práctica docente y desean practicar y fortalecer sus habilidades didácticas en un entorno virtual seguro.',
  },
  {
    q: '¿Cómo funciona la práctica con escenas?',
    a: 'La plataforma te presenta distintas escenas de aula en las que debes actuar como docente. En cada una tomas decisiones y, al finalizar, recibes una calificación según lo que hiciste.',
  },
  {
    q: '¿Qué tipo de retroalimentación recibo?',
    a: 'Tras cada escena obtienes comentarios específicos sobre tu desempeño: qué acciones fueron acertadas, cuáles no y cómo puedes mejorar en tu próxima práctica.',
  },
  {
    q: '¿Necesito experiencia previa en docencia?',
    a: 'No. La plataforma está diseñada para acompañarte desde el inicio: puedes practicar las escenas tantas veces como quieras y mejorar con cada intento antes de enfrentarte a un aula real.',
  },
  {
    q: '¿Qué diferencia tiene frente a la práctica real?',
    a: 'Al ser un simulador, puedes experimentar situaciones de aula, cometer errores y aprender sin riesgo ni consecuencias. Es un espacio de preparación complementario a tu práctica real.',
  },
  {
    q: '¿Cómo se califica mi desempeño en cada escena?',
    a: 'Al final de cada escena se evalúa lo que hiciste durante la práctica y se te asigna una calificación, acompañada de la retroalimentación correspondiente a tus acciones.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="preguntas" className="section faq">
      <div className="container faq-container">
        <div className="faq-head">
          <span className="section-tag anim-rise anim-rise-1">
            <HelpCircle size={15} />
            Preguntas frecuentes
          </span>
          <h2 className="section-title anim-rise anim-rise-2">
            Resolvemos tus <span className="text-verde">dudas</span>
          </h2>
          <p className="section-subtitle anim-rise anim-rise-3">
            Lo que los futuros docentes quieren saber antes de empezar.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`faq-item anim-rise anim-rise-${Math.min(index + 1, 6)} ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.q}</span>
                  <span className={`faq-chevron ${isOpen ? 'faq-chevron-open' : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div
                  className="faq-answer"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}