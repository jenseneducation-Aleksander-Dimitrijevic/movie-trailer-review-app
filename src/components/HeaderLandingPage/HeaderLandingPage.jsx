import { Services } from "../Services/Services";
import {
  HeaderLandingPageContainer,
  ChooseServiceButton,
} from "./HeaderLandingPageStyled";

export const HeaderLandingPage = ({ servicePopUpVisible }) => {
  return (
    <HeaderLandingPageContainer>
      <h5>Everything in one app</h5>
      <h1>
        Find the best{" "}
        <span>
          from all <span className="streaming-text">streamingservices</span>
        </span>
      </h1>
      <Services servicePopUpVisible={servicePopUpVisible} />
      <ChooseServiceButton onClick={() => servicePopUpVisible()}>
        Choose a service
      </ChooseServiceButton>
    </HeaderLandingPageContainer>
  );
};
