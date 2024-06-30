import { Meta } from "antd/lib/list/Item";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ServiceBlockProps } from "./types";
import {
  StyledCard,
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper} from "./styles";
import { useNavigate } from "react-router-dom";

const ServiceBlock = ({
  id,
  title,
  content,
  section,
  t,
  direction,
}: ServiceBlockProps) => {

  const navigate = useNavigate();

  return (
    <ContentSection id={id}>
      <Fade direction={direction} triggerOnce>
            <ContentWrapper>
              <h1>{t(title)}</h1>
              <Content>{t(content)}</Content>
                <ServiceWrapper>
                    {typeof section === "object" &&
                      section.map((item) => {
                          return (
                            <StyledCard
                              key={item.title}
                              hoverable
                              onClick={() => navigate(item.link, { state: { targetId: "about" }})}
                              cover={<img style={{height: 250}} alt={item.title} src={"/img/icon/" + item.icon} />}
                            >
                              <Meta title={item.title} description={item.content} />
                            </StyledCard>
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
