import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import i18n from "./translation";
import Header from "components/Header";
import Footer from "components/Footer";
import Home from "pages/Home";
import Service from "pages/Service";
import { Styles } from "styles/styles";
import { ServiceType } from "common/Enum/ServiceType";
import { Suspense } from "react";

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Styles />
      <Header id="header" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/service/plumbing"
          element={<Service type={ServiceType.PLUMBING} />}
        />
        <Route
          path="/service/electrical"
          element={<Service type={ServiceType.ELECTRICAL} />}
        />
        <Route
          path="/service/acmv"
          element={<Service type={ServiceType.ACMV} />}
        />
        <Route
          path="/service/interior"
          element={<Service type={ServiceType.INTERIOR} />}
        />
        <Route
          path="/service/tiling"
          element={<Service type={ServiceType.TILING} />}
        />
        <Route
          path="/service/roofing"
          element={<Service type={ServiceType.ROOFING} />}
        />
        <Route
          path="/service/waterproofing"
          element={<Service type={ServiceType.WATERPROOFING} />}
        />
      </Routes>
      <Footer />
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
