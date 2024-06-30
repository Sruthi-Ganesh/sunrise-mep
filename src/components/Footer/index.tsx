import { Row, Col, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import Container from "../../common/Container";
import ServiceContent from "../../content/ServiceContent.json";

import {
  FooterSection,
  Para,
  Chat,
  Empty,
  ContentTitle,
} from "./styles";

const Footer = () => {

  const navigate = useNavigate();

  const scrollUp = (url: string) => {
    navigate(url);
    const element = document.getElementById("header") as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const serviceContent = ServiceContent.section;

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <ContentTitle>{"Tags"}</ContentTitle>
            {serviceContent.map((service) => (
              <Tag.CheckableTag onClick={() => scrollUp(service.link)}
                key={service.title}
                checked={false}
              >
              <Para>{service.title}</Para>
             </Tag.CheckableTag>
            ))}
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <ContentTitle>{"Address"}</ContentTitle>
              <Para>45 West Coast Avenue, West Coast Gardens</Para>
              <Para>Singapore</Para>
              <Para>128100</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default Footer;
