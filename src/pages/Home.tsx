import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EXTERNAL } from '../data/agencies'
import { LINES } from '../data/lines'
import './Home.css'

const featured = LINES.slice(0, 6)

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/images/hero-bus.jpg"
            alt=""
            width={2400}
            height={1600}
          />
          <div className="hero-veil" />
        </div>

        <div className="container hero-content">
          <p className="hero-brand">Viação Praiana</p>
          <h1>
            Mais conexão
            <span>pelo litoral.</span>
          </h1>
          <p className="hero-copy">
            Horários, vale-transporte e fretamento para quem vive e se move entre o mar e a cidade.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/horarios">
              Consultar horários
            </Link>
            <a className="btn btn-ghost" href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
              Compra Web
            </a>
          </div>
        </div>
      </section>

      <section className="section routes-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Linhas</span>
            <h2>Para onde você vai?</h2>
            <p>Escolha a linha e veja partidas, tarifas e itinerário em poucos toques.</p>
          </Reveal>

          <div className="route-list">
            {featured.map((line, index) => (
              <Reveal key={line.id} className="route-row" as="article">
                <span className="route-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{line.name}</h3>
                  <p>{line.region}</p>
                </div>
                <Link className="route-link" to={`/horarios?linha=${line.id}`}>
                  Ver horários
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="routes-more">
            <Link className="btn btn-secondary on-light" to="/horarios">
              Ver todas as linhas
            </Link>
            <a className="text-link" href={EXTERNAL.proximasPartidas} target="_blank" rel="noreferrer">
              Próximas partidas ao vivo →
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section passe-section">
        <div className="container passe-grid">
          <Reveal>
            <span className="eyebrow">Passe Fácil</span>
            <h2>Menos fila. Mais benefício.</h2>
            <p>
              Faça ou recarregue seu cartão Passe Fácil na agência mais próxima e viaje com praticidade
              nas linhas da Praiana.
            </p>
            <Link className="btn btn-primary" to="/contato">
              Falar com uma agência
            </Link>
          </Reveal>
          <Reveal className="passe-visual" aria-hidden="true">
            <div className="pass-card pass-a">
              <span>Passe Fácil</span>
              <strong>Cidadão</strong>
              <em>Viação Praiana</em>
            </div>
            <div className="pass-card pass-b">
              <span>Passe Fácil</span>
              <strong>Vale-transporte</strong>
              <em>Viação Praiana</em>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <Reveal className="about-media" aria-hidden="true">
            <img
              src="/images/about-bus.jpg"
              alt=""
              width={1400}
              height={900}
            />
          </Reveal>
          <Reveal>
            <span className="eyebrow">Quem somos</span>
            <h2>62 anos ligando cidades do litoral.</h2>
            <p>
              Fundada em 17 de julho de 1963, a Viação Praiana cresceu das linhas municipais ao
              transporte intermunicipal — com conforto, acessibilidade e presença em Itajaí, Camboriú,
              Balneário Camboriú, Itapema, Porto Belo e além.
            </p>
            <p>
              Fomos pioneiros no serviço Bem Bom e entre as primeiras a oferecer elevador hidráulico
              em ônibus intermunicipais.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section charter-band">
        <div className="container charter-inner">
          <Reveal>
            <span className="eyebrow">Fretamento</span>
            <h2>Frota sob medida para sua empresa ou evento.</h2>
            <p>Transporte de colaboradores, turismo e saídas especiais com atendimento dedicado.</p>
          </Reveal>
          <Reveal>
            <Link className="btn btn-primary" to="/fretamento">
              Solicitar fretamento
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
