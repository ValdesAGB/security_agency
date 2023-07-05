import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Accueil from '../pages/Accueil'
import Footer from './Footer'
import Team from '../pages/Team'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServicesDetails'
import {
  GalleryProvider,
  LoadingProvider,
  ServiceDetailsProvider,
} from '../untils/context'
import Gallery from '../pages/Gallery'
import NotFound from '../pages/404'
import Copyright from './Copyright'

function App() {
  return (
    <React.Fragment>
      <main className="row">
        <LoadingProvider>
          <ServiceDetailsProvider>
            <GalleryProvider>
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service-details" element={<ServiceDetails />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </GalleryProvider>
          </ServiceDetailsProvider>
        </LoadingProvider>
      </main>
      <Footer />
      <Copyright />
    </React.Fragment>
  )
}

export default App
