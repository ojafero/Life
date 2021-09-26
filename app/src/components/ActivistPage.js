import React from "react"
import { Button, Container, Image } from "react-bootstrap"

import PopulateCards from "./PopulateCards"

//images
import activistTopBanner from "../assets/activist-top-banner.jpg"
import plantATreeBanner from "../assets/plant-a-tree.jpg"
import plantToolsBanner from "../assets/plant-tools.jpg"
import umbrellaPlant from "../assets/umbrella-Plant.jpg"
import castIronPlant from "../assets/cast-iron.jfif"
import greenFinger from "../assets/green-fingers.jpg"
import shadeLoving from "../assets/shade-loving.jpeg"
import vilaPlant from "../assets/Vila.jfif"

function ActivistPage() {
  const trendingPlantsDummyData = [
    {
      plantId: "1",
      plantImg: umbrellaPlant,
      plantName: "Plant 1",
      plantHealth: "Healthy",
      plantersName: "Jon Snow"
    },
    {
      plantId: "2",
      plantImg: castIronPlant,
      plantName: "Plant 2",
      plantHealth: "Healthy",
      plantersName: "Billy Bob"
    },
    {
      plantId: "3",
      plantImg: greenFinger,
      plantName: "Plant 3",
      plantHealth: "Healthy",
      plantersName: "Eric Gordon"
    },
    {
      plantId: "4",
      plantImg: shadeLoving,
      plantName: "Plant 4",
      plantHealth: "Healthy",
      plantersName: "Mindy Svoke"
    }
  ]

  const showSomeLovePlantsDummyData = [
    {
      plantId: "1",
      plantImg: vilaPlant,
      plantName: "Plant 1",
      plantHealth: "Healthy",
      plantersName: "Jon Snow"
    },
    {
      plantId: "2",
      plantImg: greenFinger,
      plantName: "Plant 2",
      plantHealth: "Healthy",
      plantersName: "Billy Bob"
    },
    {
      plantId: "3",
      plantImg: shadeLoving,
      plantName: "Plant 3",
      plantHealth: "Healthy",
      plantersName: "Eric Gordon"
    },
    {
      plantId: "4",
      plantImg: umbrellaPlant,
      plantName: "Plant 4",
      plantHealth: "Healthy",
      plantersName: "Mindy Svoke"
    }
  ]

  return (
    <div id='activist-container' className='w-100 '>
      <div className='custom-section cream-background pb-5 px-3'>
        <div className='d-flex align-items-center w-100 py-4'>
          <i className='fas fa-chart-line icon-header pb-3 px-2 icon-blue'></i>
          <p className='fs-1'>Trending Plants</p>
          <span className='ps-2 fst-italic'>plants with the most upvotes</span>
        </div>

        <PopulateCards plantsDummyData={trendingPlantsDummyData} />
      </div>
      <div className='custom-section grey-background pb-5 px-3'>
        <div className='d-flex align-items-center w-100 py-4 '>
          <i className='fas fa-heart icon-header pb-3 px-2 icon-red'></i>
          <p className='fs-1'>Show Some Love</p>
          <span className='ps-2 fst-italic'>
            boost a plant to continue its growth!
          </span>
        </div>
        <PopulateCards plantsDummyData={showSomeLovePlantsDummyData} />
      </div>
      <div className='custom-section'>
        <div className='d-flex flex-row align-items-center cream-background w-100 py-4'>
          <i className='fas fa-plus icon-header pb-3 px-2 icon-green'></i>
          <p className='fs-1'>Grow A New Plant</p>
          <span className='ps-2 fst-italic'>let's make it happen!</span>
        </div>
        <div className='d-flex flex-column align-items-center cream-background py-2 w-100'>
          <Image src={plantATreeBanner} className='custom-banner' />
          <Button variant='success' className='w-25 my-5'>
            Start Something Great
          </Button>
        </div>
      </div>
      <div className='custom-section grey-background '>
        <div className='d-flex flex-row align-items-center  w-100 py-4'>
          <i className='fas fa-clinic-medical icon-header pb-3 px-2 icon-brown'></i>
          <p className='fs-1'>Health Check</p>
          <span className='ps-2 fst-italic'>
            our AI will check the status of your plant
          </span>
        </div>
        <div className='d-flex flex-column align-items-center py-2 w-100'>
          <Image src={plantToolsBanner} className='custom-banner' />
          <Button variant='success' className='w-25 my-5'>
            Start Something Great
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ActivistPage
