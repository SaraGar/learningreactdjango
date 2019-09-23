import React, { Component } from "react";

export class AboutUs extends Component {


  render() {
  
    return (
     <div className='col-xs-10'>
        <h1>About Us</h1>
        <hr></hr>
        <p>
            Cats in Need is a non profit organization based in Cordoba, with the aim of finding a forever home for all our furry friends in need.
        </p>
        <p>
            Maybe you have found a street cat and you would like to help him, or you are a community cat feeder and have found a cat that could be rehomed, anyway don't hesitate and publish the details here! Is totally free and everyone is welcome if the intention is to make cat's lifes better.
        </p>
        <p>
            IMPORTANT: If the cat is still living outside, remember to NOT provide any information about his location for security reasons.
        </p>
        <center><img src='https://thumbs-prod.si-cdn.com/73fVgKeIShxtSA-skv2pXY4ymOg=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/9d/df/9ddf0f3c-e361-4c86-93a9-3ea593ede5eb/9066884528_9042472148_o.jpg' height='100%'></img></center>

     </div>
    );
  }
}

export default AboutUs;