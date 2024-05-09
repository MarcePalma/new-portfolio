import React from 'react';
import { IconsGridProps } from '@/types/types';
import Image from 'next/image';

const IconsGrid: React.FC<IconsGridProps> = ({ title, image }) => {
  return (
    <div className="p-4 flex flex-col items-center icons-grid-item">

      <div className="flex justify-center">
        <Image src={image} alt={title} width={1256} height={1256} />
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center text-white">{title}</h2>

      <style>
        {`
        .icons-grid-item img {
          width: 350px;
          height: auto;
        }`}
      </style>
    </div>
  );
};

export default IconsGrid;