import React from "react";
import Hero from "../components/Hero";
import RoomContainer from "../components/RoomContainer";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function Rooms() {
  return (
    <>
    <Hero hero="roomsHero">
      <Banner title="our rooms">
      </Banner>
    </Hero> 
    <RoomContainer/>
    
    </>
  );
}
