import { createContext, useState } from 'react'
import { GalleryElements } from '../../data'
const details = localStorage.getItem('details')

export const ServiceDetailsContext = createContext()
export const ServiceDetailsProvider = ({ children }) => {
  const [service, setService] = useState(details ? JSON.parse(details) : [])

  return (
    <ServiceDetailsContext.Provider value={{ service, setService }}>
      {children}
    </ServiceDetailsContext.Provider>
  )
}

export const LoadingContext = createContext()
export const LoadingProvider = ({ children }) => {
  const [load, setLoad] = useState(false)

  return (
    <LoadingContext.Provider value={{ load, setLoad }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const GalleryContext = createContext()
export const GalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState(GalleryElements)

  return (
    <GalleryContext.Provider value={{ gallery, setGallery }}>
      {children}
    </GalleryContext.Provider>
  )
}
