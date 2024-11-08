import './../home.modules.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";


const ContactUs = () => {
  return (
    <seciton className='conatct-us'>
      <div className="contact-us-container">
        <div className="addresss">
          <p>
            <FaLocationDot className='display-inline' />&nbsp; Yamato Engineering PLC, Wolo sefer, Addis Ababa, Ethiopia
          </p>
          <p>
            <FaPhone className='display-inline' />
            +251 91 610 5717
          </p>
        </div>
      </div>
    </seciton>
  )
}

export default ContactUs