import React from "react";
import { Carousel } from "flowbite-react";

function SLideShow() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 animate-fade-right -z-10">
      <Carousel
        pauseOnHover
        draggable="true"
        slideInterval={4000}
        leftControl=" "
        rightControl=" "
      >
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBhC1Hv7peAo7VhyjPtcv_0iBEyzisJ2pyCLr1bSl-tjPSbNWaRBvp5DlmKDcoEF4NEqRiq-j_wqVB2fFxe6Ra95VNaAwX0o489yOEaigAd51YRlzVkF883MJQJFiz0wXwUHvQlpC-Jo4/s1600/dark15.jpg"></img>
        <img src="https://wallpapers.com/images/hd/indie-games-1920-x-1080-wallpaper-g244wa3im70ewmh1.jpg"></img>
        <img src="https://w.wallha.com/ws/12/BMOP2s4a.png"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
      </Carousel>
    </div>
  );
}
export default SLideShow;
