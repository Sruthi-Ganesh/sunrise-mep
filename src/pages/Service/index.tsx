import { lazy, useEffect, useState } from "react";
import ContactContent from "../../content/ContactContent.json";
import ServiceDetailBlock from "../../components/ServiceDetailBlock";
import PlumbingData from "../../content/service/plumbing/background.json";
import PlumbingDataServiceContent from "../../content/service/plumbing/services.json";
import PlumbingChooseUsContent from "../../content/service/plumbing/choose.json";

import ElectricalData from "../../content/service/electrical/background.json";
import ElectricalDataServiceContent from "../../content/service/electrical/services.json";
import ElectricalhooseUsContent from "../../content/service/electrical/choose.json";

import ACMVData from "../../content/service/acmv/background.json";
import ACMVDataServiceContent from "../../content/service/acmv/services.json";
import ACMVChooseUsContent from "../../content/service/acmv/choose.json";

import InteriorData from "../../content/service/interior/background.json";
import InteriorDataServiceContent from "../../content/service/interior/services.json";
import InteriorChooseUsContent from "../../content/service/interior/choose.json";

import TilingData from "../../content/service/tiling/background.json";
import TilingDataServiceContent from "../../content/service/tiling/services.json";
import TilingChooseUsContent from "../../content/service/tiling/choose.json";

import RoofingData from "../../content/service/roofing/background.json";
import RoofingDataServiceContent from "../../content/service/roofing/services.json";
import RoofingChooseUsContent from "../../content/service/roofing/choose.json";

import WaterproofingData from "../../content/service/waterproofing/background.json";
import WaterproofingDataServiceContent from "../../content/service/waterproofing/services.json";
import WaterproofingChooseUsContent from "../../content/service/waterproofing/choose.json";

import { BackgroundBlockProps } from "../../common/Carousel/backgroundTypes";
import { ServicesContentProps } from "common/Carousel/serviceTypes";
import { ServiceType, ServiceTypeProps } from "common/Enum/ServiceType";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Service = ({ type }: ServiceTypeProps) => {
  const [bgContent, setBgContent] = useState<BackgroundBlockProps[]>();
  const [serviceContent, setServiceContent] = useState<ServicesContentProps[]>([]);
  const [chooseUsContent, setChooseUsContent] = useState<ServicesContentProps[]>([]);
  const [heading, setHeading] = useState<string>("");

  useEffect(() => {
    switch (type) {
      case ServiceType.PLUMBING: {
        setBgContent(PlumbingData.content);
        setServiceContent(PlumbingDataServiceContent);
        setChooseUsContent(PlumbingChooseUsContent);
        setHeading("Plumbing Services");
        return;
      }
      case ServiceType.ELECTRICAL: {
        setBgContent(ElectricalData.content);
        setServiceContent(ElectricalDataServiceContent);
        setChooseUsContent(ElectricalhooseUsContent);
        setHeading("Electrical Works & LEW Inspection Services");
        return;
      }
      case ServiceType.ACMV: {
        setBgContent(ACMVData.content);
        setServiceContent(ACMVDataServiceContent);
        setChooseUsContent(ACMVChooseUsContent);
        setHeading("Air Conditioning and Ventilation Services");
        return;
      }
      case ServiceType.INTERIOR: {
        setBgContent(InteriorData.content);
        setServiceContent(InteriorDataServiceContent);
        setChooseUsContent(InteriorChooseUsContent);
        setHeading("Interior Services");
        return;
      }
      case ServiceType.TILING: {
        setBgContent(TilingData.content);
        setServiceContent(TilingDataServiceContent);
        setChooseUsContent(TilingChooseUsContent);
        setHeading("Tiling Services");
        return;
      }
      case ServiceType.ROOFING: {
        setBgContent(RoofingData.content);
        setServiceContent(RoofingDataServiceContent);
        setChooseUsContent(RoofingChooseUsContent);
        setHeading("Roofing Services");
        return;
      }
      case ServiceType.WATERPROOFING: {
        setBgContent(WaterproofingData.content);
        setServiceContent(WaterproofingDataServiceContent);
        setChooseUsContent(WaterproofingChooseUsContent);
        setHeading("Waterproofing Services");
        return;
      }
    }
  }, [type]);

  return (
    <Container>
      <ScrollToTop />
      <ServiceDetailBlock 
        id="service_detail"
        heading={heading}
        backgroundContent={bgContent} 
        servicesContent={serviceContent} 
        chooseUsContent={chooseUsContent}
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Service;
