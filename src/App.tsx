import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Horarios } from './pages/Horarios'
import { Contato } from './pages/Contato'
import { Fretamento } from './pages/Fretamento'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="contato" element={<Contato />} />
          <Route path="fretamento" element={<Fretamento />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
