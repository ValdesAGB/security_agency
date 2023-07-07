import React, { useContext, useState } from 'react'
import { GalleryBtnElements, GalleryElements } from '../../data'
import { styled } from 'styled-components'
import { color } from '../../untils/color'
import { GalleryContext, LoadingContext } from '../../untils/context'

const BtnContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`

const Button = styled.button`
  border: 0 none;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  margin: 0 5px 10px 5px;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.active ? color.main : color.galleryBtnColor};
  color: #ffffff;
  transition: background-color 0.4s, color 0.5s;
  &:hover {
    color: white;
    background-color: ${color.main};
  }
`

function GallerieBtn() {
  const { setGallery } = useContext(GalleryContext)
  const { setLoad } = useContext(LoadingContext)
  const [activeCategory, setActiveCategory] = useState('')

  const handleCategoryClick = (category) => {
    const filteredGallery = GalleryElements.filter((element) =>
      element.categorie.includes(category)
    )
    setLoad(true)
    setActiveCategory(category)
    setTimeout(() => {
      setGallery(filteredGallery)
      setLoad(false)
    }, 2000)
  }

  return (
    <React.Fragment>
      <BtnContainer>
        {GalleryBtnElements.map(({ id, title, cat }) => (
          <Button
            key={id}
            active={activeCategory === cat}
            onClick={() => handleCategoryClick(cat)}
          >
            {title.toUpperCase()}
          </Button>
        ))}
      </BtnContainer>
    </React.Fragment>
  )
}

export default GallerieBtn
