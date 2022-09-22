//Imports
import React from "react";
import Main from "./main/main";
import { ImageBackground } from "react-native";
//Importamos CSS
import './index.css';

//const imageSrc = require('../img/dog_pawn_bg.jpg');

//Main class
function Index () {
    return (
        <div className="row">
          {/* <ImageBackground source={imageSrc} className="bg-img"> */}
          <ImageBackground className="bg-img">
            <Main/>
          </ImageBackground>
        </div>
      );
}

export default Index;