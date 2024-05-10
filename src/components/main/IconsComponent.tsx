import React from 'react';
import { IconsGridProps } from '@/types/types';
import Image from 'next/image';
import { motion } from "framer-motion"

const IconsGrid: React.FC<IconsGridProps> = ({ title, image }) => {
  return (
    <motion.div className="p-4 flex flex-col items-center icons-grid-item"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >

      <motion.div className="flex justify-center"
        initial={{ y: -50, rotate: -10, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        whileHover={{ rotate: [0, 5, -5, 0] }}
      >
        <Image src={image} alt={title} width={1256} height={1256} />
      </motion.div>
      <motion.span
        className="bg-white bg-opacity-75 backdrop-blur-md rounded-md text-center px-2 py-1 mt-2 text-black font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}>
        <h2 className="text-lg font-semibold mb-2 text-center text-white">{title}</h2>
      </motion.span>


      <style>
        {`
        .icons-grid-item img {
          width: 350px;
          height: auto;
        }`}
      </style>
    </motion.div>
  );
};

export default IconsGrid;