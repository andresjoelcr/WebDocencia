import { Target, MessageSquareQuote, ShieldCheck } from 'lucide-react'
import './Welcome.css'

export default function Welcome() {
  return (
    <section id="bienvenida" className="section welcome">
      <div className="container">
        <div className="welcome-grid">
          <div className="welcome-text">
            <span className="section-tag anim-rise anim-rise-1">
              <Target size={15} />
              Bienvenida
            </span>
            <h2 className="section-title anim-rise anim-rise-2">
              Prepárate para enseñar{' '}
              <span className="text-verde">como un profesional</span>
            </h2>
            <p className="section-subtitle anim-rise anim-rise-3">
              WebDocencia es un entorno virtual que te permite practicar la
              docencia a través de escenas de aula. En cada escena deberás
              actuar como docente y, al finalizar, recibirás una calificación y
              la retroalimentación correspondiente según lo que hiciste.
            </p>

            <div className="welcome-points">
              <div className="welcome-point anim-rise anim-rise-4">
                <span className="welcome-point-icon">
                  <MessageSquareQuote size={20} />
                </span>
                <div>
                  <h3>Escenas que exigen actuar</h3>
                  <p>
                    Interactúa con estudiantes virtuales y toma decisiones en
                    cada situación que se te presenta.
                  </p>
                </div>
              </div>
              <div className="welcome-point anim-rise anim-rise-5">
                <span className="welcome-point-icon">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <h3>Calificación y retroalimentación</h3>
                  <p>
                    Al terminar cada escena obtienes tu calificación y
                    comentarios claros sobre tu desempeño.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="welcome-card anim-rise anim-rise-3">
            <div className="welcome-card-bar" />
            <blockquote className="welcome-quote">
              <p>
                <span className="welcome-quote-mark">&ldquo;</span>
                Capacítate hoy y prepárate para triunfar en tu aula. Practica
                cada escena para descubrir cómo se evalúa tu desempeño y
                fortalecer las habilidades que necesitas antes de tu práctica
                real.
                <span className="welcome-quote-mark">&rdquo;</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}