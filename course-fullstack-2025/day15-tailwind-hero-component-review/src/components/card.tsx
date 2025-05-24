// src/components/Card.tsx
import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  showButton?: boolean;
};

export const Card = ({ image, title, description, showButton = true }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        {showButton && (
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            ดูเพิ่มเติม
          </button>
        )}
      </div>
    </div>
  );
};
