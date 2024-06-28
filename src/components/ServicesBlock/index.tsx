import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ServiceBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara
} from "./styles";

const ServiceBlock = ({
  title,
  content,
  section,
  t,
  direction,
}: ServiceBlockProps) => {
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
                <ServiceWrapper>
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              />
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                </ServiceWrapper>
            </ContentWrapper>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ServiceBlock);
