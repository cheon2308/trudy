import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import SearchBar from "./SearchBar";
import "./TrudyMap.css";

const containerStyle = {
  width: "1000px",
  height: "600px",
};

const center = {
  lat: 37.460459,
  lng: 126.44068,
};

class TrudyMap extends Component {
  render() {
    return (
      <div className="trudy-map">
        <SearchBar />
        <LoadScript googleMapsApiKey="AIzaSyCr_VXyq_r6dte_29ocp-T2i6yf30VvUMI" region="US" language="en">
          <div className="google-map">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              {/* Child components, such as markers, info windows, etc. */}
            </GoogleMap>
          </div>
        </LoadScript>
      </div>
    );
  }
}

export default TrudyMap;
