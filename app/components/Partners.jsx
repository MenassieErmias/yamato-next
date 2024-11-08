import PartnerCard from './PartnerCard'
const Partners = () => {
  const partnersArr = [
    {
      name: 'Extreme Endeavors',
      imageURL: '/assets/images/extreme-endeavors-logo.png',
      link: 'https://www.extreme-endeavors.com/'
    },
    {
      name: "KDH Engineering",
      imageURL: '/assets/images/kdh-engineering-logo.jpg',
      link: 'https://kdh-engineering.net/company-profile/'
    }

  ]
  return (
    <div className='partners'>
      <h1 className="partners-header">
        Here are some of the partners we have worked with
      </h1>
      <div className="partners-container">

        {
          partnersArr.map((partner, index) => (
            <PartnerCard key={index} name={partner.name} imageURL={partner.imageURL} link={partner.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Partners