import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobaouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
