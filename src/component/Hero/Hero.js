import React from "react";
import {
  HeroContainer,HeroSection,HeroLeft,HeroTitle,HeroGenre,HeroDescription,HeroButton,HeroImage,
} from "../styled/Hero.styled";

function Hero() {
  return (
    <HeroContainer>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>Spiderman</HeroTitle>
          <HeroGenre>Genre: Thriller, Drama, Romance</HeroGenre>
          <HeroDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <div>
          <HeroImage
            src="https://picsum.photos/200/300/"
            alt="Hero Thumbnail"
          />
        </div>
      </HeroSection>
    </HeroContainer>
  );
}

export default Hero;
