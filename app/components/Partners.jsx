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
    <>
      {
        partnersArr.map((partner, index) => (
          <PartnerCard key={index} name={partner.name} imageURL={partner.imageURL} link={partner.link} />
        ))
      }
    </>
  )
}

export default Partners