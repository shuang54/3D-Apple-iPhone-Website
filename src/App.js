import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import Quote from "./sections/Quote";
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote/>
      {/* <PhoneModel/> */}
      <HeroSection/>
      <DesignSection/>
      <DisplaySection/>
    </>
  );
}

export default App;
