import React, { useEffect, useState } from "react"
import { uuid } from "uuidv4"
import { Button, Modal, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

//components
import Map from "./Map"
import PlantInfo from "./PlantInfo"
import PlanterInfo from "./PlanterInfo"

//assets
import farmerPlaceholder from "../assets/farmer-placeholder.jpg"
import plantPicOne from "../assets/outdoor-sago.jpg"
import plantPicTwo from "../assets/sago-palm-leaves.jpg"
import plantPicThree from "../assets/sago.jpg"

function Plant() {
  const [show, setShow] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const handleDonation = () => {
    setShowAlert(true)
    handleClose()
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowAlert(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, [showAlert])

  const plantData = {
    growerData: {
      growerId: uuid(),
      growerName: "Juan Molina",
      growerProfilePic: farmerPlaceholder,
      growerLocation: {
        lat: 25.61148,
        lng: -80.4156
      },
      tags: [
        "testlant",
        "juanplant",
        "exampleplant",
        "otherplant",
        "testplant",
        "juanplant",
        "exampleplant",
        "otherplant"
      ]
    },
    growerPlantData: {
      plantId: uuid(),
      plantName: "Random plant name",
      plantSpecies: "Sago",
      plantImages: [
        {
          imageId: uuid(),
          image: plantPicOne,
          caption: "Example Text 1",
          upvotes: 0
        },
        {
          imageId: uuid(),
          image: plantPicTwo,
          caption: "Example Text 2",
          upvotes: 0
        },
        {
          imageId: uuid(),
          image: plantPicThree,
          caption: "Example Text 3",
          upvotes: 0
        }
      ],
      donations: 85,
      donationsCap: 100
    }
  }
  return (
    <div id='plant'>
      <PlanterInfo plantData={plantData} />
      <PlantInfo growerPlantData={plantData.growerPlantData} />
      <div className='w-100 d-flex justify-content-center mb-3'>
        <Button id='booster-btn' className='w-50 m-0 fs-5' onClick={handleShow}>
          Boost <i className='fas fa-donate'></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Would you like to sponsor this plant by donating? This helps the
            grower keep on growing plants and taking care of it! Watch this
            marvelous plan grow all while helping the environment.
          </Modal.Body>
          <Modal.Footer>
            <Button variant='success' onClick={handleDonation}>
              $1
            </Button>
            <Button variant='success' onClick={handleDonation}>
              $2
            </Button>
            <Button variant='success' onClick={handleDonation}>
              $5
            </Button>
            <Button variant='success' onClick={handleDonation}>
              Other
            </Button>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Alert
          variant='success'
          onClose={() => setShowAlert(false)}
          show={showAlert}
          className='alert-fixed'
        >
          <Alert.Heading className='text-center'>
            Thank you for donating. Earth thanks you!
          </Alert.Heading>
        </Alert>
      </div>
      <Map center={plantData.growerData.growerLocation} zoom={16} />
    </div>
  )
}

export default Plant
