import './Myintro.css';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const MyIntro = () => {
  return (<>
    <div className="Myintro">
      <span className="Hy">Hy! I Am</span>
      <span className='Rajan'>Rajan Kumar</span>
      <p>I'm a B. Tech (IT) student from RGPV(Bhopal) (2k21 batch). Currently Styding at CodingThinker (Full Stack Developer).</p>
     <div>
      <button  className='HireButton'>Hire Me!</button>
      </div>
      <div className="IconNetwork">
      <a href="https://www.github.com/Rajan5588/REACT-WITH-PROJECT"><FaGithub />
        </a>
      <a href="https://www.facebook.com/profile.php?id=100053855701349&mibextid=ZbWKwL"> <FaFacebook /></a>
      <a href="https://www.linkedin.com/in/rajan-kumar-gupta-3478102b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /></a>
      <a href="#"><FaInstagramSquare /></a>
      </div>
    </div>
   
     </>
  )
}

export default MyIntro
