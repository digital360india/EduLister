
import React, { useState } from 'react';
import Image from 'next/image';

const CategoryGalleryGoEdu = ({ data, index, citySlug }) => {
  const [expandedCard, setExpandedCard] = useState('c1');

  const handleCardClick = (id) => {
    setExpandedCard(id);
  };

  return (
    <div className="flex justify-center items-center  bg-white">
      <div className="goEdu-container flex flex-col space-y-4 m-4">
        {['c1', 'c2', 'c3', 'c4'].map((cardId, idx) => (
          <div
            key={cardId}
            className={`goEdu-card ${
              expandedCard === cardId ? 'h-60 w-[310px]' : 'h-10 w-[310px]'
            } w-[310px] cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out`}
            onClick={() => handleCardClick(cardId)}
          >
            <Image
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1733386822/EduLister/${citySlug}/${
                ['G', 'I', 'H', 'G'][idx]
              }-${data?.fields?.Image_Code}.png`}
              alt={`Category ${cardId}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGalleryGoEdu;

{/* CSS styles */}
<style jsx>{`
  .goEdu-container {
    width: 310px; 
  }

  .goEdu-card {
    box-shadow: 8px 0px 5px 0px #7A7A7A40;
  }

  .goEdu-card:not(:last-child) {
    margin-bottom: 1rem;
  }
`}</style>