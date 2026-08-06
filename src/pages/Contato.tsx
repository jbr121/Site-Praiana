import { Reveal } from '../components/Reveal'
import { AGENCIES } from '../data/agencies'
import './Contato.css'

function telHref(phone: string) {
  return `tel:+55${phone.replace(/\D/g, '')}`
}

function waHref(phone: string) {
  const digits = phone.replace(/\D/g, '')
  return `https://wa.me/55${digits}`
}

export function Contato() {
  return (
    <div className="contato-page">
      <section className="contato-hero">
        <div className="container">
          <span className="eyebrow">Atendimento</span>
          <h1>Fale com a Praiana</h1>
          <p>
            Agências, garagens e ouvidoria no litoral de Santa Catarina. Escolha o ponto mais
            próximo e entre em contato.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container agency-list">
          {AGENCIES.map((agency) => (
            <Reveal key={agency.id} className="agency" as="article">
              <h2>{agency.name}</h2>
              <p className="agency-address">{agency.address}</p>
              {agency.note && <p className="agency-note">{agency.note}</p>}

              <dl>
                {agency.phone && (
                  <div>
                    <dt>Telefone</dt>
                    <dd>
                      <a href={telHref(agency.phone.split('/')[0].trim())}>{agency.phone}</a>
                    </dd>
                  </div>
                )}
                {agency.whatsapp && (
                  <div>
                    <dt>WhatsApp</dt>
                    <dd>
                      <a href={waHref(agency.whatsapp)} target="_blank" rel="noreferrer">
                        {agency.whatsapp}
                      </a>
                    </dd>
                  </div>
                )}
                {agency.email && (
                  <div>
                    <dt>E-mail</dt>
                    <dd>
                      <a href={`mailto:${agency.email}`}>{agency.email}</a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt>Horário</dt>
                  <dd>{agency.hours}</dd>
                </div>
              </dl>

              <div className="agency-actions">
                {agency.phone && (
                  <a className="btn btn-primary" href={telHref(agency.phone.split('/')[0].trim())}>
                    Ligar
                  </a>
                )}
                {agency.whatsapp && (
                  <a
                    className="btn btn-secondary on-light"
                    href={waHref(agency.whatsapp)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                )}
                {!agency.phone && agency.email && (
                  <a className="btn btn-primary" href={`mailto:${agency.email}`}>
                    Enviar e-mail
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
