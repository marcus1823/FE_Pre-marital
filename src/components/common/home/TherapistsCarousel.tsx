import React from "react";

interface CardProps {
    image: string;
    name: string;
    rating: string;
}

const TherapistCarousel: React.FC<CardProps> = ({ image, name, rating }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
      {/* Ảnh bác sĩ với border tròn */}
      <img 
        src={image} 
        alt={name} 
        className="w-32 h-32 rounded-full border-2 border-green-600 object-cover"
      />
      {/* Tên bác sĩ */}
      <p className="font-medium">{name}</p>
      {/* Đánh giá sao */}
      <div className="flex items-center space-x-1">
        <span className="text-orange-500 text-lg">⭐</span>
        <span className="text-sm font-semibold">{rating}</span>
      </div>
    </div>
    );
};

export default TherapistCarousel;
