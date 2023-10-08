import React from "react";
import "react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";
// import { useState } from "react";
const ConnectionSpeed=()=>{
    const [checkSpeed, SetCheckSpeed] = React.useState(
      "Finding internet speed."
    );
    return (
    <div>
      <h2>React Find Internet Speed Example</h2>
      <ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?cs=srgb&dl=pexels-lil-artsy-1213447.jpg&fm=jpg"
        downloadSize="2250856" //bytes
        callbackFunctionOnNetworkDown={(data) =>
          console.log(`Internet speed : ${data}`)
        }
        callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
      />
      <div>
        <span>{checkSpeed} MB/s</span>
      </div>
    </div>
  );
}
export default ConnectionSpeed;
