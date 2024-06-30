import { Row, Card } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: "row";
`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between
`;

export const MinTitle = styled("h6")`
  font-size: 18px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 15px;
`;

export const StyledCard = styled(Card)`
  width: 340px;
  margin: 16px 16px 0 0;
`