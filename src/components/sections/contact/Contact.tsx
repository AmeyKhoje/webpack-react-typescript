import ContactMe from 'assets/images/contact.jpg';

const Contact = () => {
  return (
    <div className="contact fit-height fit-width o-hidden">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-content-header">
            <div className="contact-content-name">
              <h4 className="font-noto">Amey Khoje</h4>
            </div>
            <div className="contact-content-heading">
              <h1 className="text-head font-montserrat">Work With Me</h1>
            </div>
          </div>
        </div>
        <div className="contact-address">
          <div className="contact-address-title">
            <p className="font-noto">Thane, Maharashtra, India, 400603</p>
          </div>
          <div className="contact-address-mobile">
            <p className="font-noto">
              <a href="tel:+918767244344">+91-8767244344</a>
            </p>
          </div>
          <div className="contact-address-email">
            <p className="font-noto">
              <a href="mailto:ameykhoje@gmail.com">ameykhoje@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img
          src={ContactMe}
          alt="amey, amey khoje, Amey Khoje, ameykhoje, AmeyKhoje, Ameykhoje"
        />
      </div>
    </div>
  );
};

export default Contact;
