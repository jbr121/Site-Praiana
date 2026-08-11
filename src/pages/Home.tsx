import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EXTERNAL } from '../data/agencies'
import { LINES } from '../data/lines'
import './Home.css'

const featured = LINES.slice(0, 6)

const fleetPhotos = [
  { src: '/images/frota/bus-10.png', alt: 'Ônibus Praiana 2607 — vista frontal' },
  { src: '/images/frota/bus-14.png', alt: 'Ônibus Praiana 2607 — lateral com marca' },
  { src: '/images/frota/bus-8.png', alt: 'Ônibus Praiana 2602 — frente' },
  { src: '/images/frota/bus-2.png', alt: 'Ônibus Praiana 2607 — detalhe frontal' },
  { src: '/images/frota/bus-1.png', alt: 'Ônibus Praiana 2601 — lateral' },
  { src: '/images/frota/bus-9.png', alt: 'Detalhe da grade e marca Viação Praiana' },
]

export function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/images/hero-praiana.png"
            alt=""
            width={1600}
            height={1200}
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

      <section className="section fleet-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Frota</span>
            <h2>Nossos ônibus na estrada.</h2>
            <p>Veículos modernos, acessíveis e preparados para o dia a dia do litoral.</p>
          </Reveal>

          <div className="fleet-grid">
            {fleetPhotos.map((photo) => (
              <Reveal key={photo.src} className="fleet-shot" as="figure">
                <img src={photo.src} alt={photo.alt} loading="lazy" width={800} height={600} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section passe-section">
        <div className="container passe-grid">
          <Reveal>
            <span className="eyebrow">Passe Fácil</span>
            <h2>Menos fila. Mais benefício.</h2>
            <p>
              Recarregue vale-transporte pela Compra Web ou tire dúvidas sobre o cartão Passe Fácil
              nas agências da Praiana.
            </p>
            <div className="passe-actions">
              <Link className="btn btn-primary" to="/vale-transporte">
                Vale-transporte online
              </Link>
              <a className="btn btn-secondary on-light" href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
                Compra Web
              </a>
            </div>
          </Reveal>
          <Reveal className="passe-visual">
            <img
              className="pass-photo pass-photo-a"
              src="/images/cartoes/cidadao.png"
              alt="Cartão Passe Fácil Cidadão — Viação Praiana"
              width={320}
              height={500}
            />
            <img
              className="pass-photo pass-photo-b"
              src="/images/cartoes/vt.png"
              alt="Cartão Passe Fácil Vale-transporte — Viação Praiana"
              width={320}
              height={500}
            />
          </Reveal>
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <Reveal className="about-media">
            <img
              src="/images/about-praiana.png"
              alt="Ônibus da Viação Praiana com a marca lateral"
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
