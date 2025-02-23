import React from "react";

interface ButtonProps {
    title: string;
}

const ButtonCategory: React.FC<ButtonProps> = ({ title }) => {
    return (
        <div className="bg-whiteoverflow-hidden w-full max-w-lg">
            <button className="border-2 border-teal-800 text-teal-800 bg-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-teal-800 hover:text-white transition">
                {title}
            </button>

        </div>

    );
};

export default ButtonCategory;
