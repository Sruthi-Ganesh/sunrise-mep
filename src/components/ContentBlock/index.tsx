import { Row, Col, Carousel } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  Content,
  BackgroundContent,
  BackgroundStyle,
  ButtonWrapper,
  CarouselStyle,
} from "../../common/Carousel/styles"

const ContentBlock = ({
  id,
  button,
  t,
  direction,
  backgroundContent,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const getUrl = (relativeImageUrl: String) => {
    return process.env.PUBLIC_URL + "/img/icon/" + relativeImageUrl;
  };

  return (
    <ContentSection id={id}>
      <Fade direction={direction} triggerOnce>
        <Carousel autoplay>
          {backgroundContent?.map((bc) => {
            return (
              <CarouselStyle key={bc.title}>
                <BackgroundStyle height={560} imageUrl={getUrl(bc.icon)}>
                  <BackgroundContent>
                    {bc.title && <h1>{t(bc.title)}</h1>}
                    {bc.text && <Content>{t(bc.text)}</Content>}
                    {bc.button && (
                      <ButtonWrapper>
                        {typeof button === "object" &&
                          bc.button.map(
                            (
                              item: {
                                color?: string;
                                title: string;
                              },
                              id: number
                            ) => {
                              return (
                                <Button
                                  key={id}
                                  color={item.color}
                                  onClick={() => scrollTo("about")}
                                >
                                  {t(item.title)}
                                </Button>
                              );
                            }
                          )}
                      </ButtonWrapper>
                    )}
                  </BackgroundContent>
                </BackgroundStyle>
              </CarouselStyle>
            );
          })}
        </Carousel>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
