import React from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";
import { MarkerProvider } from "./utils/MarkerContext"
import Header from "./components/Header";
import background from "./BIGTOP.jpeg"


function App() {
  return (
    <div className="App" 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(` + background + `)`,
        backgroundPositionY: "30%",
        margin: 0
      }}> 
      <MarkerProvider>
        <Header />
        <MapContainer />
      </MarkerProvider>
    </div>
  );
}


export default App;
