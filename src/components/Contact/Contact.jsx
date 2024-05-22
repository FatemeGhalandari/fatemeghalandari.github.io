import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Lets work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>fghalandarii@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hamilton, Ontario, Canada</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+1 234 5678</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
