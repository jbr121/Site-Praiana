import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Horarios } from './pages/Horarios'
import { Contato } from './pages/Contato'
import { Fretamento } from './pages/Fretamento'
import { ValeTransporte } from './pages/ValeTransporte'
import { CadastroAluno } from './pages/CadastroAluno'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="vale-transporte" element={<ValeTransporte />} />
          <Route path="cadastro-aluno" element={<CadastroAluno />} />
          <Route path="contato" element={<Contato />} />
          <Route path="fretamento" element={<Fretamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
