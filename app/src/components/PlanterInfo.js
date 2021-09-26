/* eslint-disable no-undef */
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Image, ProgressBar, Badge } from "react-bootstrap"

function PlanterInfo(plantData, growerPlantData) {
  const [status, setStatus] = useState()
  const { growerName, growerProfilePic, growerLocation, tags } =
    plantData.plantData.growerData
  const { donations, donationsCap } = plantData.plantData.growerPlantData
  const [address, setAddress] = useState("")
  const [width, setWidth] = React.useState(window.innerWidth)
  console.log(growerPlantData)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

  const getAddress = async () => {
    const apiKey = "AIzaSyC9cvdPJ2ax3hCH1USkQby9_wgir6bKgqA"
    try {
      const resp = axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${growerLocation.lat},${growerLocation.lng}&key=${apiKey}`
      )
      const dataJSON = await resp
      const address = await dataJSON.data.results[0].formatted_address
      return address
    } catch (error) {
      console.log(error)
    }
  }

  const checkStatusBar = () => {
    let status = donations / donationsCap
    status = status * 100
    console.log(status)
    if (status < 20) {
      setStatus("danger")
    } else if (status >= 80) {
      setStatus("success")
    } else {
      setStatus("warning")
    }
  }

  useEffect(async () => {
    const address = await getAddress()
    setAddress(address)
  }, [])

  useEffect(() => {
    checkStatusBar()
  }, [donations])

  return (
    <Container
      fluid
      id='planter-info-container'
      className={`mt-5 d-flex ${
        width > 700
          ? "flex-row justify-content-evenly"
          : "flex-column align-items-center text-center"
      }`}
    >
      <div
        id='planter-info-div'
        className={`d-flex ${width > 700 ? "flex-row" : "flex-column"}`}
      >
        <Image
          src={growerProfilePic}
          fluid
          roundedCircle
          className='profile-pic'
        />
        <div
          id='planter-info'
          className=' d-flex flex-column justify-content-center ms-3'
        >
          <p className='fs-1'>{growerName}</p>
          <p className='fs-4'>{address}</p>
          <div className=''>
            <label htmlFor='tag-badges' className='fs-5'>
              Tags:
            </label>
            <div id='tag-badges' className=''>
              {tags.map((tag, index) => {
                return (
                  <Badge key={index} className='custom-badges mx-1'>
                    {tag}
                  </Badge>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        id='plant-status'
        className=' d-flex flex-column justify-content-center w-50'
      >
        <ProgressBar
          striped
          animated
          min={0}
          now={donations}
          max={donationsCap}
          variant='success'
          id='funding-meter'
          variant={status}
        />
        <label htmlFor='funding-meter' className='fs-5'>
          Funding Meter
        </label>
        <span className='fs-6'>Co-owned by 100</span>
      </div>
    </Container>
  )
}

export default PlanterInfo
