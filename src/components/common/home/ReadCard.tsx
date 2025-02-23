import { FaUserCircle } from "react-icons/fa";

interface CardProps {
  image: string;
  title: string;
  author: string;
  time: string;
}

const ReadCard: React.FC<CardProps> = ({ image, title, author, time }) => {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden">
      {/* Hình ảnh */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>

      {/* Nội dung */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-teal-900">{title}</h3>

        {/* Thông tin tác giả */}
        <div className="flex items-center justify-between mt-3 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-xl" />
            <span className="font-medium">{author}</span>
          </div>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ReadCard;
