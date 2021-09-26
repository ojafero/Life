import React, { useState, useEffect } from "react"
import { Image, Container, Card, Row } from "react-bootstrap"
import placeholder from "../assets/placeholder.png"

function PlantInfo(growerPlantData) {
  const { imageId, plantName, plantSpecies, plantImages } =
    growerPlantData.growerPlantData
  const [width, setWidth] = React.useState(window.innerWidth)
  const [likedImg, setLikedImg] = useState(false)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

  const likeImage = id => {
    const filteredObj = plantImages.filter(img => {
      if (img.imageId == id) {
        img.upvotes++
      }
    })
    setLikedImg(prev => !prev)
  }

  return (
    <Container fluid className='my-5 d-flex flex-column justify-content-center'>
      <div
        className={`text-start fs-3 ps-4 mb-3 ms-5 ${
          width > 700 ? "w-25" : "w-100"
        }`}
      >
        <i className='fas fa-leaf me-2 green-icon'></i>
        {plantName}
      </div>
      <p
        className={`text-start fs-3 ps-4 mb-3 ms-5 ${
          width > 700 ? "w-25" : "w-100"
        }`}
      >
        <i className='fas fa-leaf me-2 green-icon'></i>
        Species: {plantSpecies}
      </p>
      <Row
        xs={1}
        s={1}
        md={3}
        lg={3}
        xl={3}
        xxl={3}
        id='plant-images'
        className={`d-flex justify-content-center ${
          width > 700 ? "flex-row" : "flex-column"
        }`}
      >
        {plantImages.map((imgObj, index) => {
          return (
            <Card
              key={index}
              className={`custom-card ${
                width > 700 ? "mx-4 mb-4 w-25" : "mb-4 w-75 m-auto"
              }`}
            >
              <Card.Img
                variant='top'
                src={imgObj.image}
                className='custom-card-image'
              />
              <Card.Body>
                <Card.Text>
                  {likedImg ? (
                    <i
                      className='fas fa-thumbs-up'
                      onClick={() => likeImage(imgObj.imageId)}
                    ></i>
                  ) : (
                    <i
                      className='fas fa-thumbs-up'
                      onClick={() => likeImage(imgObj.imageId)}
                    ></i>
                  )}

                  <span className='ms-2'>{imgObj.upvotes}</span>
                </Card.Text>
                <Card.Text>{imgObj.caption}</Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </Row>
    </Container>
  )
}

export default PlantInfo
