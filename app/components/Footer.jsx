
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-container">
        <div className="addresss">
          <p>
            <FaLocationDot className='display-inline' />&nbsp; Yamato Engineering PLC, Wolo sefer, Addis Ababa, Ethiopia
          </p>
          <p>
            <FaPhone className='display-inline' />
            &nbsp;&nbsp;+251 91 610 5717
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer