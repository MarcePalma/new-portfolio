import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const InterfaceIcons = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  function getCurrentTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <ul className="absolute top-0 right-0 py-4 flex gap-4 items-center justify-between pr-10 pl-5 md:pl-10" style={{ zIndex: 9999 }}>
      <li className='hidden md:block'>
        <Image src={"/images/icons/Wifi-icon.webp"} width={40} height={40} alt='wifi-icon' />
      </li>
      <li>
        <Image src={"/images/icons/Battery.webp"} width={60} height={60} alt='battery-icon' />
      </li>
      <li className="time text-white flex items-center">
        <span>{currentTime}</span>
      </li>

    </ul>
  );
};

export default InterfaceIcons;