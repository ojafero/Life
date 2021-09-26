import React from "react"
import { Link } from "react-router-dom"
import "./SplashPage.css"
import "react-awesome-button/src/styles/themes/theme-amber"
import { AwesomeButton } from "react-awesome-button"

function SplashPage() {
  return (
    <div>
      <div className='SplashPage'>
        <div className='SplashPage__title'>Life</div>
        <div className='SplashPage__description'>
          LEVERAGING AI TO COMBAT <span>EXCESS CO2</span> ONE PLANT AT A TIME
        </div>
        <div className='SplashPage__buttons'>
          <Link to='/home'>
            <AwesomeButton type='primary' size='medium'>
              For Activists
            </AwesomeButton>
          </Link>
          <span className='SplashPage__rightButton'>
            <AwesomeButton type='secondary' size='medium'>
              For Growers
            </AwesomeButton>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
