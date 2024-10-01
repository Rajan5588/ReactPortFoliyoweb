import "./Goal.css";
const Goal = () => {

     
  return (
    <div>
      <div className="works" id="works">
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: "orange" }}>I want to work for</span>
            <span>These brands</span>
            <span>
              I'm on my way to successNclassName and successNclassName is never
              final.
              <br />
              As a software developer my successNclassName will be to work in
              these FAANG companies. text
              <br />
              It will require smart work with
              <br />
            
              struggle and I'm confident that one day I'll achieve this
              successNclassName.
            </span>
            <br /><br />
            <a>
              <button className="button s-button" style={{borderRadius:"12px"}}>Hire Me</button>
            </a>
            <div
              className="blur s-blur1"
              style={{ background: "rgba(171, 241, 255, 0.48)" }}
            ></div>
          </div>
        </div>
        <div className="w-right">
          <div className="w-mainCircle" style={{ transform: " none" }}>
            <div class="w-secCircle">
              <img src="/Images/img1.png" alt="" />
            </div>
            <div class="w-secCircle">
              <img src="/Images/img2.png" alt="" />
            </div>
            <div class="w-secCircle">
              <img src="/Images/img3.png" alt="" />
            </div>
            <div class="w-secCircle">
              <img src="/Images/img4.png" alt="" />
            </div>
            <div class="w-secCircle">
              <img src="/Images/img5.png" alt="" />
            </div>
          </div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
