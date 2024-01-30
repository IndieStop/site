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
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
        <img src="https://images.pexels.com/photos/19952083/pexels-photo-19952083/free-photo-of-sand-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
      </Carousel>
    </div>
  );
}
export default SLideShow;
