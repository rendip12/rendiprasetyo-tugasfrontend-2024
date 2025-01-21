import React from "react";
import {
  FooterContainer,
  FooterElement,
  FooterTitle,
  FooterAuthor,
} from "../styled/Footer.styled";

function Footer() {
  return (
    <FooterContainer>
      <FooterElement>
        <FooterTitle>Movie Apps</FooterTitle>
        <FooterAuthor>Author by Aufa Billah</FooterAuthor>
      </FooterElement>
    </FooterContainer>
  );
}

export default Footer;
