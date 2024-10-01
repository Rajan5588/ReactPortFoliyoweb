
import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: "purple" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "rgba(171, 241, 255, 0.58)" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form>
          {" "}
          <input
            type="text"
            name="name"
            className="user"
            required=""
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="user"
            required=""
            placeholder="Email"
          />
          <textarea
            type="query"
            name="query"
            className="user"
            required=""
            placeholder="Message"
          ></textarea>
          <input type="submit" className="button" value="Send" />
          <span></span>
          <div className="blur c-blur1" style={{ background: "purple" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
