import { Search } from "lucide-react";

export default function QuizBanner() {
  return (
    <div
      className="relative w-full h-[450px] flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("src/assets/quizbanner.png")` }}
    >
      <div className="absolute inset-0  bg-opacity-40"></div>

      <div className="relative z-10">
        {/* Tiêu đề */}
        <h1 className="text-white text-3xl font-bold pb-5">Quizzes</h1>
        <p className="text-white mt-2 px-4 max-w-xl pb-10">
          MarriTalk has Quizzes on a variety of topics, helping you better understand yourself and your love.
        </p>

        {/* Thanh tìm kiếm */}
        <div className="mt-4 relative w-[90%] max-w-[600px] bg-white rounded-full shadow-md">
          <input
            type="text"
            placeholder="Search Quizzes"
            className="w-full px-5 py-3 rounded-full shadow-md outline-none text-gray-700"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-700">
            <Search size={24} />
          </button>
        </div>
        </div>
    </div>
  );
}
