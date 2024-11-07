import '../home.modules.css';
import Image from 'next/image';
import Link from 'next/link';
const PartnerCard = ({ name, imageURL, link }) => {
  return (
    <div className='partner-card'>
      <div className="partner-card-container">
        <Image
          src={imageURL}
          height={100}
          width={100}
          className="partner-card-image"
          alt={name}
        />
        <Link className='partner-card-link' href={link}>
          Learn more ...
        </Link>
      </div>
    </div>
  )
}

export default PartnerCard