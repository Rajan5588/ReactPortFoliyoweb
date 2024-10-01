import './ProjectCard.css'

const ProjectCard = () => {
  return (
    <div>
      <div className="Container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card1" style={{height:" 16rem", width:"13rem"}}>
              <div className="card1-body">
                <div className="">
                  <p className="Contant_p"> Village webside</p>
                  <p className="contact">
                    An introductory website for my village Created using HTML,
                    CSS, Bootstrap, jQuery and AJAX
                  </p>
                  <button className="card1__button">
                    <a
                      href="#"//https://bhogaon.netlify.app/
                      className="ancher"
                      target="_black"
                    >
                      view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card1" style={{height:" 16rem", width:"13rem"}}>
              <div className="card1-body">
                <div className="">
                  <p className="Contant_p"> Contact Manager</p>
                  <p className="contact">
                    Contact manager app ,data fetching via api and aply crud
                    operation on it uisng Reactjs, Redux
                  </p>
                  <button className="card1__button">
                    <a
                      href="#"//"https://contact-list11.netlify.app/
                      className="ancher"
                      target="_black"
                    >
                      view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card1" style={{height:" 16rem", width:"13rem"}}>
              <div className="card1-body">
                <div className="">
                  <p className="Contant_p"> Chat App</p>
                  <p className="contact">
                    Chat App using Reactjs with Redux,Html,Css
                  </p>
                  <button className="card1__button">
                    <a
                      href="#"//https://mychatp.netlify.app/#/
                      className="ancher"
                      target="_black"
                    >
                      view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card1" style={{height:" 16rem", width:"13rem"}}>
              <div className="card1-body">
                <div className="">
                  <p className="Contant_p"> Card title</p>
                  <p className="contact">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content
                  </p>
                  <button className="card1__button">
                    <a className="ancher" target="_black">
                      view
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
