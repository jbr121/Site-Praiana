import { useState, type FormEvent } from 'react'
import { Reveal } from '../components/Reveal'
import './Fretamento.css'

type FormState = {
  name: string
  company: string
  phone: string
  email: string
  route: string
  message: string
}

const initial: FormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  route: '',
  message: '',
}

export function Fretamento() {
  const [form, setForm] = useState<FormState>(initial)
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const body = [
      `Nome: ${form.name}`,
      `Empresa: ${form.company || '—'}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Trajeto / necessidade: ${form.route}`,
      '',
      form.message,
    ].join('\n')

    const mailto = `mailto:itajai@praiana.com.br?subject=${encodeURIComponent(
      'Solicitação de fretamento — site Praiana',
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <div className="fretamento-page">
      <section className="fretamento-hero">
        <div className="container">
          <span className="eyebrow">Fretamento</span>
          <h1>Frota sob demanda</h1>
          <p>
            Transporte de colaboradores, eventos, turismo e deslocamentos especiais com a
            experiência de quem opera o litoral há décadas.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container fretamento-grid">
          <Reveal>
            <h2>Quando faz sentido</h2>
            <ul className="use-cases">
              <li>
                <strong>Empresas</strong>
                <span>Transporte diário ou sob demanda para equipes e turnos.</span>
              </li>
              <li>
                <strong>Eventos</strong>
                <span>Chegadas e retornos coordenados para shows, feiras e congressos.</span>
              </li>
              <li>
                <strong>Turismo</strong>
                <span>Excursões e roteiros pelo litoral norte catarinense.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal className="fretamento-form-wrap">
            <h2>Peça um orçamento</h2>
            <p>Preencha o formulário — abrimos seu e-mail com a mensagem pronta para envio.</p>

            <form className="fretamento-form" onSubmit={onSubmit}>
              <label>
                Nome
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label>
                Empresa
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </label>
              <label>
                Telefone / WhatsApp
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
              <label>
                E-mail
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label className="full">
                Trajeto ou necessidade
                <input
                  required
                  value={form.route}
                  onChange={(e) => setForm({ ...form, route: e.target.value })}
                  placeholder="Ex.: Itajaí → Balneário Camboriú, segunda a sexta"
                />
              </label>
              <label className="full">
                Detalhes
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Número de passageiros, horários, frequência..."
                />
              </label>
              <button className="btn btn-primary" type="submit">
                Enviar solicitação
              </button>
              {sent && (
                <p className="form-note">
                  Se o e-mail não abrir automaticamente, escreva para itajai@praiana.com.br.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
