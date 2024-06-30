import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  margin: 25px 50px 0 50px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }

  .ant-carousel .slick-dots li button {
    background: #2e186a;
    opacity: 0.4;
}

  .ant-carousel .slick-dots li.slick-active button {
      opacity: 1;
      background: #2e186a;
  }

  .ant-carousel .slick-next {
    opacity: 0.4;
    color: #2e186a;
}
`;
