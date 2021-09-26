import React from "react";
import "./SplashPage.css";
import styles from "react-awesome-button/src/styles/themes/theme-amber";
import { AwesomeButton } from "react-awesome-button";

function SplashPage() {
  return (
    <div>
      <div className="SplashPage">
        <div className="SplashPage__title">Life</div>
        <div className="SplashPage__description">
          LEVERAGING AI TO COMBAT <span>EXCESS CO2</span> ONE PLANT AT A TIME
        </div>
        <div className="SplashPage__buttons">
          <AwesomeButton cssModule={styles} type="primary" size="medium">
            For Activists
          </AwesomeButton>
          <span className="SplashPage__rightButton">
            <AwesomeButton cssModule={styles} type="secondary" size="medium">
              For Growers
            </AwesomeButton>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
