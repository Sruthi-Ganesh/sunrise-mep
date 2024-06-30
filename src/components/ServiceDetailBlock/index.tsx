import { useEffect } from "react";

import { Carousel, List, Avatar } from "antd";
import { withTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { ServiceBlockProps } from "./types";
import {
  ContentSection,
  BackgroundStyle,
  CarouselStyle,
} from "../../common/Carousel/styles";

const ServiceDetailBlock = ({
  id,
  backgroundContent,
  heading,
  servicesContent,
  chooseUsContent,
}: ServiceBlockProps) => {

  const {state} = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  const getUrl = (relativeImageUrl: String) => {
    return process.env.PUBLIC_URL + "/img/icon/" + relativeImageUrl;
  };

  return (
    <ContentSection id={id}>
      <h6>{heading}</h6>
      <Carousel autoplay>
        {backgroundContent?.map((bc) => {
          return (
            <CarouselStyle key={bc.id}>
              <BackgroundStyle
                height={560}
                imageUrl={getUrl(bc.icon)}
              ></BackgroundStyle>
            </CarouselStyle>
          );
        })}
      </Carousel>
      <br/>
      <h6>Our Services Include</h6>
      <List
        itemLayout="vertical"
        dataSource={servicesContent}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={"/img/icon/" + item.icon} />}
              title={item.title}
              description={item.description}
            />
            {item.points && 
            <List
              style={{marginLeft: "20px"}}
              itemLayout="vertical"
              dataSource={item.points}
              renderItem={(point) => (
                <List.Item style={{borderBottom: "none", padding: 0}}>
                  <List.Item.Meta
                    avatar={<Avatar src={"/img/icon/" + point.icon} />}
                    title={point.title}
                  />
                </List.Item>
              )}
            />}
          </List.Item>
        )}
      />
      <br/>
      <h6>Why Choose Us?</h6>
      <List
        itemLayout="horizontal"
        dataSource={chooseUsContent}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={"/img/icon/" + item.icon} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </ContentSection>
  );
};

export default withTranslation()(ServiceDetailBlock);
