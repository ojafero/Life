import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

function PopulateCards({ plantsDummyData }) {
  const [width, setWidth] = React.useState(window.innerWidth)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })
  return (
    <Row xs={1} sm={2} md={3} lg={3} xl={4} xxl={4}>
      {plantsDummyData.map((plantObj, index) => {
        return (
          <Col key={index}>
            <Card key={index} className='mb-2'>
              <Card.Img
                variant='top'
                src={plantObj.plantImg}
                className='custom-card-image'
              />
              <Card.Body>
                <Card.Text>{plantObj.plantName}</Card.Text>
                <Card.Text>{plantObj.plantHealth}</Card.Text>
                <Card.Text>{plantObj.plantersName}</Card.Text>

                <Button variant='success'>Boost</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default PopulateCards
