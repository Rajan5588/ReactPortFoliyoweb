import CardItem from './CardItem';
import './Myintro.css'

const MyIntro2 = ({move1, move2, move3}) => {
     
  return (
    <div className='myIntro2'>
       <div className="Myintro intro2">
      <span className="Hy">My Awesome</span>
      <span className='Rajan'>services</span>
      <p>Lorem ispum is simpley dummy text of printing of printing Lorem
      ispum is simpley dummy text of printing</p>
     <div className='cv'>
      <button  className='HireButton'>Download CV</button>
      </div>
      </div>
      <div className="boxC">
     <CardItem  move1={move1}  move2={move2}  move3={move3}></CardItem>
   
</div>

</div>
  )
}

export default MyIntro2;
