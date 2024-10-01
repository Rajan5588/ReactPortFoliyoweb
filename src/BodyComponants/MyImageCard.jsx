import { useEffect, useState } from 'react';
import './Myintro.css'
import { BiLike } from "react-icons/bi";
const MyImageCard = () => {
  let [ transaward ,setTransaward]=useState("awardauto")
  useEffect(()=>{
       document.getElementById("Bike").className=transaward;
       setTransaward(transaward)
  },[])
  return (<><div className="imgr">
    <div className="ImgDiv">
      <img 
        src="https://media.istockphoto.com/id/1250504146/photo/indian-businessman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=OUH6bKGETnD-SQibDWyYavUwGp6omPY4rjtR0i4bZtI="
      className="img"
      />
     
     </div>
      <div className="award " id='Bike'>
      <BiLike className='Bilike'/><span>Best Design Award</span>
      </div>
      </div> </>
  );
};

export default MyImageCard;
