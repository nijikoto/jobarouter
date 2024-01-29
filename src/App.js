import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Careers, { careerLoader } from './pages/careers/Careers'
import CareerDetails from './pages/careers/CareerDetails'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="About" element={<About />}></Route>
      <Route path="Help" element={<HelpLayout />}>
        <Route path="Faq" element={<Faq />}>
          View the FAQ
        </Route>
        <Route path="contact" element={<Contact />}>
          Contact us
        </Route>
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careerLoader} />
        <Route path=":id" element={<CareerDetails />} />
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
