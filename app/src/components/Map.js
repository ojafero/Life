/* eslint-disable no-undef */
import React, { useEffect } from "react"
import { Loader } from "@googlemaps/js-api-loader"
function Map({ center, zoom }) {
  const mapOptions = {
    center: center,
    zoom: zoom
  }
  const loader = new Loader({
    apiKey: "AIzaSyC9cvdPJ2ax3hCH1USkQby9_wgir6bKgqA",
    version: "weekly",
    libraries: ["places"]
  })

  const loadMap = () => {
    loader.loadCallback(e => {
      if (e) {
        console.log(e)
      } else {
        const map = new window.google.maps.Map(
          document.getElementById("map"),
          mapOptions
        )
        const marker = new google.maps.Marker({
          position: mapOptions.center,
          map: map
        })
      }
    })
  }

  useEffect(() => {
    loadMap()
  }, [])

  return (
    <div id='map-container' className='w-100'>
      <div id='map' />
    </div>
  )
}

export default Map
