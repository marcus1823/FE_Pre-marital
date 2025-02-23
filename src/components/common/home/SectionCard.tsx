import React from "react";

interface CardProps {
  image: string;
  title: string;
}

const SectionCard: React.FC<CardProps> = ({ image, title }) => {
  return (
    <div className="relative w-80 bg-green-900 rounded-3xl overflow-hidden flex flex-col items-center text-white p-6">
  {/* Ảnh */}
  <img src={image} alt={title} className="w-full h-80 object-cover rounded-xl" />

  {/* Tiêu đề */}
  <p className="mt-5 text-center text-base font-medium">{title}</p>
</div>

  );
};

export default SectionCard;
