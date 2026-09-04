import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Information from './pages/Information'
import Scenarios from './pages/Scenarios'
import Capacitacion from './pages/Capacitacion'
import NormasComportamiento from './pages/NormasComportamiento'
import ProtocolosSeguridad from './pages/ProtocolosSeguridad'
import ManejoCrisis from './pages/ManejoCrisis'
import MaterialesPedagogicos from './pages/MaterialesPedagogicos'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informacion" element={<Information />} />
            <Route path="/escenarios" element={<Scenarios />} />
            <Route path="/capacitacion" element={<Capacitacion />} />
            <Route path="/capacitacion/normas" element={<NormasComportamiento />} />
            <Route path="/capacitacion/protocolos" element={<ProtocolosSeguridad />} />
            <Route path="/capacitacion/crisis" element={<ManejoCrisis />} />
            <Route path="/capacitacion/materiales" element={<MaterialesPedagogicos />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </BrowserRouter>
  )
}