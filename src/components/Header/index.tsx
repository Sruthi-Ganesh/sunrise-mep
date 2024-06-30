import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { Icon } from "../../common/Icon";
import { Button } from "../../common/Button";
import IntroContent from "../../content/IntroContent.json";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  HeaderContent,
  HeaderRowBorderSection,
  HeaderRowNestedSection,
  HeaderRowTopSection,
  HeaderRowInnerTopSection,
  NextLineContent,
  TitleSection,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  id: string;
}

const Header = ({ id }: HeaderProps) => {
  const navigate = useNavigate();
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      navigate("/");
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <div id={id}>
        <CustomNavLinkSmall onClick={() => navigate("/")}>
          <Span>{"Home"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          onClick={() => {
            navigate("/", { state: { targetId: "about" } });
          }}
        >
          <Span>{"About"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => navigate("/", { state: { targetId: "services" } })}
        >
          <Span>
            <Button>{"Services"}</Button>
          </Span>
        </CustomNavLinkSmall>
      </div>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <HeaderRowTopSection justify="end">
          <HeaderRowBorderSection justify="space-between">
            <Icon src="address.svg" width="20px" height="20px" />
            <HeaderRowNestedSection>
              45 West Coast Avenue, West Coast Gardens
            </HeaderRowNestedSection>
          </HeaderRowBorderSection>
          <HeaderRowBorderSection justify="space-between">
            <Icon src="phone.svg" width="20px" height="20px" />
            <HeaderRowNestedSection>83017445</HeaderRowNestedSection>
          </HeaderRowBorderSection>
          <HeaderRowInnerTopSection justify="space-between">
            <Icon src="facebook.svg" width="20px" height="20px" />
          </HeaderRowInnerTopSection>
          <HeaderRowInnerTopSection justify="space-between">
            <Icon src="twitter.svg" width="20px" height="20px" />
          </HeaderRowInnerTopSection>
          <HeaderRowBorderSection justify="space-between">
            <Icon src="instagram.svg" width="20px" height="20px" />
          </HeaderRowBorderSection>
          <HeaderRowInnerTopSection>
            <a href="mailto:enquiry@sunrisemep.sg">
              <HeaderRowNestedSection>enquiry@sunrisemep.sg</HeaderRowNestedSection>
            </a>
          </HeaderRowInnerTopSection>
        </HeaderRowTopSection>
        <Row justify="space-between">
          <Row justify="space-between">
            <LogoContainer to="/" aria-label="homepage">
              <Icon src="logo.svg" width="201px" height="164px" />
            </LogoContainer>
            <TitleSection>
              <HeaderContent>{IntroContent.short_title}</HeaderContent>
              <NextLineContent>{IntroContent.next_line_title}</NextLineContent>
            </TitleSection>
          </Row>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
