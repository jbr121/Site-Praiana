import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { EXTERNAL } from '../data/agencies'
import { asset } from '../lib/asset'
import './Header.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/horarios', label: 'Horários' },
  { to: '/vale-transporte', label: 'Vale-transporte' },
  { to: '/cadastro-aluno', label: 'Cadastro de aluno' },
  { to: '/fretamento', label: 'Fretamento' },
  { to: '/contato', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="Viação Praiana — início">
          <img
            className="brand-logo"
            src={asset('brand/logomarca.png')}
            alt="Viação Praiana"
            width={200}
            height={44}
          />
        </Link>

        <nav className="nav-desktop" aria-label="Principal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={({ isActive }) => (isActive ? 'active' : undefined)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="btn btn-primary header-cta" href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer">
            Compra Web
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Menu mobile">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <a href={EXTERNAL.compraWeb} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Compra Web
          </a>
          <a href={EXTERNAL.proximasPartidas} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Próximas partidas
          </a>
        </nav>
      </div>
    </header>
  )
}
