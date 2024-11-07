import React from 'react'
import SpecCard from './SpecCard';
import '../home.modules.css'
const Specs = () => {
  const specsArr = [
    {
      imageURL: "/assets/images/control-boards.png",
      heading: "Control Boards Solutions",
      content: "Precision control boards for diverse applications. Customized solutions built with cutting-edge tech for optimized operations and increased efficiency.",
    },
    {
      imageURL: "/assets/images/solar-power.png",
      heading: "Solar Power Solutions",
      content: "Harness clean solar energy with our comprehensive solutions. From feasibility studies to installation, we create eco-friendly systems for a greener future.",
    },
    {
      imageURL: '/assets/images/scada.png',
      heading: "SCADA Water Distribution Systems",
      content: "Real -time water management with SCADA technology. Gain insights for efficient resource allocation and continuous water supply.",
    }
  ]
  return (
    <div className='specs'>
      <div className="specs-container">
        {specsArr.map((spec, index) => <SpecCard key={index} imageURL={spec.imageURL} heading={spec.heading} content={spec.content} />)}
      </div>
    </div>
  )
}

export default Specs