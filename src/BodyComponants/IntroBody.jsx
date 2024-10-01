import ClientUnver from "./ClientUnver"
import Expreance from "./Expreance"
import Goal from "./Goal"
import MyImageCard from "./MyImageCard"
import MyIntro from "./MyIntro"
import './Myintro.css'
import MyIntro2 from "./MyIntro2"
import PortfoliyeProject from "./PortfoliyeProject"
import ProjectCard from "./ProjectCard"

const IntroBody = ({move1,move2,move3}) => {
  return (
  <div className="body1">
    <div className="IntroBody">
      <MyIntro ></MyIntro>
      <MyImageCard></MyImageCard>
    </div>
    <MyIntro2 move1={move1} move2={move2} move3={move3}></MyIntro2>
    <Expreance></Expreance>
    <Goal></Goal>
    < PortfoliyeProject></PortfoliyeProject>
    < ProjectCard></ProjectCard>
    <ClientUnver></ClientUnver>
    </div>
  )
}

export default IntroBody;
