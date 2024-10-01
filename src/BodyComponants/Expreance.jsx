import './Expreance.css';

const Expreance = () => {

  return (
    <div>
      <div className="experience" id="experience">
        <div className="achievement">
          <div className="circle" style={{color:"#334fa5"}}>
            1+
          </div>
          <span style={{color:"#fd7e14"}}>years </span>
          <span>Experience</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color:"#334fa5"}}>
            10+
          </div>
          <span style={{color:"orange"}}>completed </span>
          <span>Projects</span>
        </div>
        <div className="achievement">
          <div className="circle" style={{color:"#334fa5"}}>
            0+
          </div>
          <span style={{color:"orange"}}>companies </span>
          <span>Work</span>
        </div>
      </div>
    </div>
  );
};

export default Expreance;
