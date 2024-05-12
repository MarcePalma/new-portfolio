import React from 'react';
import Image from 'next/image';

const InterfaceIcons = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className=" flex items-center justify-end pr-10">
      <div className="battery-icon mr-10">
        <Image src={"/images/icons/Battery.webp"} width={120} height={120} alt='battery-icon' />
      </div>
      <div className="time text-white">
        <span>{currentTime}</span>
      </div>
    </div>
  );
};

export default InterfaceIcons;