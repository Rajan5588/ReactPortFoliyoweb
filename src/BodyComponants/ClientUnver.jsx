import './ClientUnver.css';

const ClientUnver = () => {
  return (
    <div>
      <div className="t-wrapper" id="testimonial">
        <div className="t-heading">
          <span>Clients always get </span>
          <span>Exceptional Work </span>
          <span>from me...</span>
          <div className="blur t-blur1" style={{background: "blue" ,opacity:0.1 }}></div>
          <div className="blur t-blur2" style={{background: "skyblue", opacity:0.7 }}></div>
        </div>
        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            style={{ transform: "translate3d(0px, 0px, 0px)"}}
          >
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: "100%" }}
            >
              <div className="testimonial">
                <img src="https://media.istockphoto.com/id/1250504146/photo/indian-businessman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=OUH6bKGETnD-SQibDWyYavUwGp6omPY4rjtR0i4bZtI=" alt="" />
                <span style={{ color: "orange" }}>
                  BTech From RGPV University Bhopal
                </span>
                <p>2021-2025</p>
                <a href="https://www.rgpv.ac.in/" target="_blank">
                  <button className="visit_button">Visit</button>
                </a>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              style={{ width: " 5020px" }}
            >
              <div className="testimonial">
                <img src="/static/media/dp2.50592d1ff2252c1e7857.jpeg" alt="" />
                <span style={{ color: "orange" }}>
                  Secondary Education from BSEB (Bihar)
                </span>
                <p>2018-2019</p>
                <a href="https://schools.org.in/gopalganj/10150600107/panchayat-high-school-mishrabatarahan.html" target="_blank">
                  <button className="visit_button">Visit</button>
                </a>
              </div>
            </div>
            <div className="swiper-slide" style={{ width: " 5020px" }}>
              <div className="testimonial">
                <img src="https://media.istockphoto.com/id/1250504146/photo/indian-businessman-stock-photo.jpg?s=1024x1024&w=is&k=20&c=OUH6bKGETnD-SQibDWyYavUwGp6omPY4rjtR0i4bZtI=" alt="" />
                <span style={{ color: "orange" }}>
                  Higher Education from PHSM (Bihar)
                </span>
                <p>2019-2021</p>
                <a href="https://schools.org.in/gopalganj/10150600107/panchayat-high-school-mishrabatarahan.html" target="_blank">
                  <button className="visit_button">Visit</button>
                </a>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientUnver;
