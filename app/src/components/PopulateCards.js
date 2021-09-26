import React, { useEffect, useState } from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

function PopulateCards({ plantsDummyData }) {
  const [width, setWidth] = React.useState(window.innerWidth)
  const history = useHistory()

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
          <Col key={plantObj.plantId}>
            <Card key={plantObj.plantId} className='mb-2'>
              <Card.Img
                variant='top'
                src={plantObj.plantImg}
                className='custom-card-image'
              />
              <Card.Body>
                <Card.Text>{plantObj.plantName}</Card.Text>
                <Card.Text>{plantObj.plantHealth}</Card.Text>
                <Card.Text>{plantObj.plantersName}</Card.Text>
                <div className='d-flex flex-row justify-content-between'>
                  <Button variant='success'>Boost</Button>

                  <Button variant='primary'>
                    <Link
                      to={`/plants/${plantObj.plantId}`}
                      className='text-light text-decoration-none'
                    >
                      Check me out
                    </Link>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default PopulateCards
