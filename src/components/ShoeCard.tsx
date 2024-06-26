import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  
  const handleClick = () => {
    if(bigShoeImg !== imgURL.bigShoe)
      changeBigShoeImage(imgURL.bigShoe);
  }

  return (
    <div 
      className={`border-2 rounded-xl cursor-pointer max-sm: flex-1
      ${(bigShoeImg === imgURL.bigShoe)? 'border-coral-red' : 'border-transparent'}`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-centers bg-card bg-center bg-cover 
      sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img 
          className='object-contain'
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103} 
        />
      </div>
    </div>
  )
}

export default ShoeCard
