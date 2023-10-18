import styled from "styled-components";
import { AnounceItem } from "./AnounceItem";
import Marquee from "react-fast-marquee";
interface Anouncement {}





const MarqueeWrapper = styled.div`
  
    width: 100%;
    overflow: hidden;
    background-image: url('/announce.jpg');
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Announcement: React.FC<Anouncement> = () => {
 

  return (
    <MarqueeWrapper>
      <Marquee pauseOnHover={true}>
        <AnounceItem/>
      </Marquee>
    </MarqueeWrapper>
  );
};

export default Announcement;