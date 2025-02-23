import React from "react";

interface CardProps {
    image: string;
    title: string;
    author: string;
    time: string;
}

const PopularCard: React.FC<CardProps> = ({ image, title, author, time }) => {
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
                        <span className="font-semibold">Source:</span> {author}
                    </p>
                    <p className="text-sm text-gray-500">Time: {time}</p>
                </div>
            </div>
        </div>

    );
};

export default PopularCard;
