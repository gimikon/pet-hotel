import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Hello Pets!"
          subtitle="Your luxury experience is waiting here..."
          button="details"
        >
        
        </Banner>
      </Hero>

      <Services />
      <FeaturedRooms />
    </>
  );
}
