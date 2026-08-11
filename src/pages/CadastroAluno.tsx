import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { EXTERNAL, hasCadastroAlunoPortal } from '../data/agencies'
import { asset } from '../lib/asset'
import './CadastroAluno.css'

const docs = [
  'Documento de identidade com foto (RG ou equivalente)',
  'CPF do aluno',
  'Comprovante de matrícula atualizado da instituição de ensino',
  'Foto recente (quando solicitada no portal ou na agência)',
]

const steps = [
  {
    title: 'Separe os documentos',
    text: 'Tenha matrícula, identidade e CPF em mãos antes de iniciar.',
  },
  {
    title: 'Inicie o cadastro',
    text: hasCadastroAlunoPortal
      ? 'Acesse o portal Transdata pelo botão abaixo e preencha os dados solicitados.'
      : 'O portal online será liberado assim que a Transdata confirmar o link oficial. Enquanto isso, fale com a agência.',
  },
  {
    title: 'Finalize na Praiana',
    text: 'Após a análise, a emissão ou liberação do benefício segue o fluxo operacional da empresa.',
  },
]

export function CadastroAluno() {
  return (
    <div className="aluno-page">
      <section className="aluno-hero">
        <div className="container aluno-hero-grid">
          <div>
            <span className="eyebrow">Estudantes</span>
            <h1>Cadastro de aluno</h1>
            <p>
              Benefício estudantil nas linhas da Viação Praiana. Prepare a documentação e inicie o
              processo pelo portal Transdata quando disponível.
            </p>
            <div className="aluno-hero-actions">
              {hasCadastroAlunoPortal ? (
                <a
                  className="btn btn-primary"
                  href={EXTERNAL.cadastroAluno}
                  target="_blank"
                  rel="noreferrer"
                >
                  Iniciar cadastro
                </a>
              ) : (
                <Link className="btn btn-primary" to="/contato">
                  Falar com a agência
                </Link>
              )}
              <Link className="btn btn-ghost" to="/contato">
                Ver agências
              </Link>
            </div>
            {!hasCadastroAlunoPortal && (
              <p className="aluno-banner">
                Portal online em liberação — assim que a Transdata confirmar a URL oficial, o botão
                “Iniciar cadastro” abre o módulo TDMax automaticamente.
              </p>
            )}
          </div>
          <img
            className="aluno-hero-card"
            src={asset('images/cartoes/estudante.png')}
            alt="Cartão Passe Fácil Estudante — Viação Praiana"
            width={280}
            height={440}
          />
        </div>
      </section>

      <section className="section">
        <div className="container aluno-grid">
          <Reveal>
            <span className="eyebrow">Documentos</span>
            <h2>O que costuma ser necessário</h2>
            <ul className="aluno-docs">
              {docs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="aluno-hint">
              A lista definitiva pode variar conforme a regra vigente e o que o portal Transdata
              solicitar no momento do cadastro.
            </p>
          </Reveal>

          <Reveal className="aluno-panel">
            <h2>Passo a passo</h2>
            <ol className="aluno-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            {hasCadastroAlunoPortal ? (
              <a
                className="btn btn-primary"
                href={EXTERNAL.cadastroAluno}
                target="_blank"
                rel="noreferrer"
              >
                Abrir portal de cadastro
              </a>
            ) : (
              <Link className="btn btn-primary" to="/contato">
                Agendar na agência
              </Link>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
