
import './NavBar.css';
import NavbarContant from './NavbarContant';
import NavBarName from './NavBarName';
const NavBar = ({backToggle,Color}) => {
  return (
    <div className=' navbar'>
     <NavBarName backToggle={backToggle} Color={Color}></NavBarName>
        <NavbarContant></NavbarContant>
        <div className="cont">
          <a href="#"> <button>Contact</button></a></div> 
    </div>
    
  )
}

export default NavBar;
