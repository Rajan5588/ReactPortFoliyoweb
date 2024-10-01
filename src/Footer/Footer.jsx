import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div className="footer">
          <img src="/Images/f1.png" alt="" style={{width:"100%"}}/>
      <div className="f-content">
          <span>rajankumarg301@gmail.com</span>
      <div className="f-icons">
      <a href="#"><FaInstagram /></a>
     <a href="https://www.linkedin.com/in/rajan-kumar-gupta-3478102b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /></a>
      <a href="https://www.facebook.com/profile.php?id=100053855701349&mibextid=ZbWKwL"><FaFacebook /></a>
      </div>
      </div>
      </div>   
    </div>
  )
}

export default Footer;
