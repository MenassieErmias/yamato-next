import React from 'react'
import SpecCard from './SpecCard';
import scada from '../../public/assets/Images/scada.png';
import controlBoards from '../../public/assets/Images/control-boards.png';
import solarPower from '../../public/assets/Images/solar-power.png';

const Specs = () => {
  const specsArr = [
    {
      imageURL: "/assets/Images/control-boards.png",
      heading: "Control Boards Solutions",
      content: "Precision control boards for diverse applications. Customized solutions built with cutting-edge tech for optimized operations and increased efficiency.",
    },
    {
      imageURL: "/assets/Images/solar-power.png",
      heading: "Solar Power Solutions",
      content: "Harness clean solar energy with our comprehensive solutions. From feasibility studies to installation, we create eco-friendly systems for a greener future.",
    },
    {
      imageURL: '/assets/Images/scada.png',
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