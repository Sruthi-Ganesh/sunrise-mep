import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;

export const BackgroundStyle = styled("section")<{ imageUrl: string, height: number }>`
  background: ${(props) => `url(${props.imageUrl})`};
  background-repeat: no-repeat;
  background-size: 100% ${(props) => props.height}px;
  height: ${(props) => props.height}px;
  text-align: center;
  text-wrap: wrap;
  padding: 16px;
  background-blend-mode: overlay;
`

export const BackgroundContent = styled("section")`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: left;
  text-wrap: wrap;
`

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  font-weight: 900;
`;

export const StyledRow = styled(Row)`
  flex-direction: 'row';
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const CarouselStyle = styled("div")`
  textAlign: 'center',
  vertical-align: 'middle';
  height: auto;
  max-width: none;
`;
