import React from 'react';
import { IconsGridProps } from '@/types/types';
import Image from 'next/image';
import { motion } from "framer-motion"
import Link from 'next/link';

const IconsGrid: React.FC<IconsGridProps> = ({ title, image, href }) => {
  return (
    <Link href={href}>
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
          className="bg-white bg-opacity-75 backdrop-blur-md rounded-md text-center px-2 py-1 mt-2 mb-0 text-black font-semibold md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: 'black' }}>
          <h2 className="text-lg font-semibold text-center text-black">{title}</h2>
        </motion.span>


        <style>
          {`
        .icons-grid-item img {
          width: 300px;
          height: auto;
        }`}
        </style>
      </motion.div>
    </Link>

  );
};

export default IconsGrid;
