import React from "react";
import "./GrowerAddPlantPage.css";
import { useCallback, useRef, useState } from "react";
import { Button } from "antd";
import { Progress } from "antd";
import Webcam from "react-webcam";
import Header from "./Header";

function GrowerAddPlantPage() {
  const [stepNumber, setStepNumber] = useState(1);
  const [progress, setProgress] = useState(25);
  const [coordinates, setCoordinates] = useState({});
  const [buttonText, setButtonText] = useState("Allow Location");
  const [stepDescription, setStepDescription] = useState(
    "We need the geocode location of your plant to prevent abuse. Please give us permission to use your location"
  );

  //Code for React Webcam Docs
  const videoConstraints = {
    width: 500,
    height: 250,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const [imageAddress, setImageAddress] = useState(null);
  const [plantImageLink, setPlantImageLink] = useState("");
  const [plantLeafImageLink, setPlantLeafImageLink] = useState("");

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageAddress(imageSrc);
    if (stepNumber === 2) setPlantImageLink(imageSrc);
    else if (stepNumber === 3) setPlantLeafImageLink(imageSrc);
  }, [webcamRef]);

  const retrieveLocation = () => {
    navigator.geolocation.getCurrentPosition((currentPosition) => {
      setCoordinates({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      });

      //2nd Step
      setStepDescription("Please capture a picture of your plant");
      setButtonText("Capture");
      setProgress(progress + 25);
      setStepNumber(2);
    });
  };

  const runAction = () => {
    if (stepNumber == 1) {
      retrieveLocation();
    } else if (stepNumber == 2 || stepNumber == 3) {
      capture();
    }
  };

  const updateToThirdStep = () => {
    setImageAddress(null);
    if (stepNumber === 3) {
      //   setStepDescription(
      //     "We use machine learning to identify the health of plant. Please take a picture of the leaf of the same plant"
      //   );
      //   setButtonText("Capture");
    } else if (stepNumber > 3) {
      //   setStepDescription("Your Plant will be added to our platform Shortly");
      //   setButtonText("Go Back");
    }
    setProgress(progress + 25);
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  };

  const outputSetDescription = () => {
    if (stepNumber == 3) {
      return "We use machine learning to identify the health of plant. Please take a picture of the leaf of the same plant";
    } else if (stepNumber == 4) {
      return "Your Plant will be added to our platform Shortly";
    } else {
      return stepDescription;
    }
  };

  console.log("stepNumber", stepNumber);

  return (
    <>
      <Header />

      <div className="GrowerAddPlantPage">
        <h1 className="GrowerAddPlantPage__title">
          Add your plant to our platform in 3 steps
        </h1>
        <div className="GrowerAddPlantPage__progress">
          <Progress percent={progress} />
        </div>
        <div className="GrowerAddPlant__stepDescription">
          {outputSetDescription()}
        </div>
        {stepNumber == 2 || stepNumber == 3 ? (
          <Webcam
            audio={false}
            height={250}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
          />
        ) : null}
        <Button
          className="GrowerAddPlant__button"
          type="primary"
          onClick={runAction}
        >
          {stepNumber === 4 ? "Go To Dashboard" : buttonText}
        </Button>
        {stepNumber === 2 || stepNumber == 3 ? (
          <Button
            className="GrowerAddPlant__button"
            type="primary"
            onClick={updateToThirdStep}
          >
            Confirm Photo
          </Button>
        ) : null}

        {imageAddress == null ? null : (
          <div className="GrowerAddPlantPage__imageCaptured">
            <span>Captured Photo: </span>

            <img
              src={imageAddress}
              style={{ width: "400px", height: "200px" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default GrowerAddPlantPage;
