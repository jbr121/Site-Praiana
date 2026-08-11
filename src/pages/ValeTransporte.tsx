import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EXTERNAL } from '../data/agencies'
import { PASS_CARDS } from '../data/cards'
import './ValeTransporte.css'

const steps = [
  {
    title: 'Acesse a Compra Web',
    text: 'Entre no portal Transdata da Praiana pelo botão abaixo — funciona no celular e no computador.',
  },
  {
    title: 'Escolha o produto',
    text: 'Selecione recarga de vale-transporte ou a opção disponível para o seu cartão Passe Fácil.',
  },
  {
    title: 'Confirme e pague',
    text: 'Finalize o pagamento online com segurança. O crédito segue o fluxo do sistema Transdata.',
  },
]

export function ValeTransporte() {
  return (
    <div className="vt-page">
      <section className="vt-hero">
        <div className="container">
          <span className="eyebrow">Passe Fácil</span>
          <h1>Vale-transporte e recarga online</h1>
          <p>
            Compre ou recarregue pelo portal Compra Web da Transdata. Para emitir o cartão físico,
            passe em uma de nossas agências.
          </p>
          <div className="vt-hero-actions">
            <a className="btn btn-primary" href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
              Ir para Compra Web
            </a>
            <Link className="btn btn-ghost" to="/contato">
              Ver agências
            </Link>
          </div>
        </div>
      </section>

      <section className="section vt-cards-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Cartões oficiais</span>
            <h2>Linha Passe Fácil Praiana</h2>
            <p>Modelos originais emitidos pela Viação Praiana — cada cor identifica um tipo de benefício.</p>
          </Reveal>

          <div className="vt-cards-grid">
            {PASS_CARDS.map((card) => (
              <Reveal key={card.id} className="vt-card" as="figure">
                <img src={card.src} alt={`Cartão Passe Fácil ${card.name}`} width={280} height={440} loading="lazy" />
                <figcaption>{card.name}</figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container vt-grid">
          <Reveal>
            <span className="eyebrow">Como funciona</span>
            <h2>Recarga em três passos</h2>
            <ol className="vt-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="vt-step-num">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="vt-panel">
            <h2>O que você encontra na Compra Web</h2>
            <ul className="vt-list">
              <li>Recarga de vale-transporte pelo portal oficial Transdata/TDMax</li>
              <li>Operação online, sem fila na agência para crédito</li>
              <li>Mesmo ambiente já usado pela Praiana em Compra Web</li>
            </ul>
            <p className="vt-note">
              A emissão ou 2ª via do cartão Passe Fácil continua presencial nas agências — tire dúvidas
              no atendimento.
            </p>
            <a className="btn btn-primary" href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
              Abrir Compra Web
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
