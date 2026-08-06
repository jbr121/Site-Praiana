import { Link } from 'react-router-dom'
import { EXTERNAL } from '../data/agencies'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-brasao"
            src="/brand/brasao.png"
            alt="Brasão Viação Praiana — Itajaí SC desde 1963"
            width={88}
            height={88}
          />
          <p className="footer-kicker">Viação Praiana</p>
          <p className="footer-lead">
            Conectando o litoral norte de Santa Catarina desde 1963 — com rotas urbanas,
            intermunicipais e fretamento.
          </p>
        </div>

        <div>
          <h3>Navegação</h3>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/horarios">Horários</Link></li>
            <li><Link to="/fretamento">Fretamento</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h3>Serviços</h3>
          <ul>
            <li>
              <a href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
                Compra Web / VT
              </a>
            </li>
            <li>
              <a href={EXTERNAL.proximasPartidas} target="_blank" rel="noreferrer">
                Próximas partidas
              </a>
            </li>
            <li><Link to="/horarios">Consulta de linhas</Link></li>
            <li><Link to="/fretamento">Fretamento empresarial</Link></li>
          </ul>
        </div>

        <div>
          <h3>Atendimento</h3>
          <ul>
            <li>
              <a href="tel:+554733418400">Itajaí — (47) 3341-8400</a>
            </li>
            <li>
              <a href="tel:+554733685052">Itapema — (47) 3368-5052</a>
            </li>
            <li>
              <a href="mailto:sac@praiana.com.br">sac@praiana.com.br</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Viação Praiana. Todos os direitos reservados.</p>
        <p>praiana.com.br</p>
      </div>
    </footer>
  )
}
