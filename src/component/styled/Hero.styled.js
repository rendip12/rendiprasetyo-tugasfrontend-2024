import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

export const HeroLeft = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 1rem;
  color: #343a40;
`;

export const HeroGenre = styled.h3`
  font-size: 1.2rem;
  color: #6c757d;
  margin: 0 0 1rem;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #495057;
  margin: 0 0 1.5rem;
`;

export const HeroButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;
