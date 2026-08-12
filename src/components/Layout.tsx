import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import './Footer.css'

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Outlet />
      </main>
      <Footer />
      <a
        className="site-watermark"
        href="https://github.com/jbr121"
        target="_blank"
        rel="noreferrer"
        title="Desenvolvido por José Eduardo"
      >
        José Eduardo · jbr121
      </a>
    </>
  )
}
