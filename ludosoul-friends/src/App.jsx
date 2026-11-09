import { useCallback, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import ConnectSheet from './components/ConnectSheet'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import TabBar from './components/TabBar'
import TopBar from './components/TopBar'
import About from './pages/About'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import Music from './pages/Music'
import './styles/shell.css'
import './styles/components.css'

function Shell() {
  const location = useLocation()
  const [connectOpen, setConnectOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const openConnect = useCallback(() => setConnectOpen(true), [])
  const closeConnect = useCallback(() => setConnectOpen(false), [])

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <TopBar onConnect={openConnect} />
      <Sidebar />

      <div className="app__main">
        <main id="main" className="main" tabIndex="-1">
          <div className="page page--enter" key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>

      <TabBar />
      <ConnectSheet open={connectOpen} onClose={closeConnect} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
