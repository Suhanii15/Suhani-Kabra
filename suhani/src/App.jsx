import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Resume from './pages/resume.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/resume" element ={<Resume/>} />
    </Routes>
  )
}

export default App
