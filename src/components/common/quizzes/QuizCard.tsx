import React from "react";

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const QuizCard: React.FC<CardProps> = ({ image, title, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-lg">
            {/* Card Content */}
            <div className="p-4 flex gap-4">
                {/* Image */}
                <img src={image} alt={title} className="w-48 h-28 rounded-md object-cover" />

                {/* Text Content */}
                <div className="flex-1">
                    <h3 className="font-bold text-sm leading-snug text-black">{title}</h3>
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Source:</span> {description}
                    </p>
                </div>
            </div>
            <button className="mt-4 border-2 border-teal-800 text-teal-800 px-4 py-1 rounded-full text-sm font-semibold hover:bg-teal-800 hover:text-white transition">
          Relationship
        </button>
        </div>

    );
};

export default QuizCard;
