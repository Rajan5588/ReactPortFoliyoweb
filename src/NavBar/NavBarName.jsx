import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import { IoIosMoon } from "react-icons/io";
import { GoSun } from "react-icons/go";
const NavBarName = ({backToggle ,Color}) => {
  return (
    <div className='NavName'>
      <div className='name'>Rajan</div>
      <div className="form-check form-switch" onClick={backToggle} >
     <input  className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
     {Color=="darkMode"?<GoSun className='sun'/>:<IoIosMoon  className='Moon'/>}
  </div>
    </div>
  )
}

export default NavBarName;
