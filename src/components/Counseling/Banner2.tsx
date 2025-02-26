import React from "react";
import { Search } from "lucide-react";

export default function Banner2() {
  return (
    <div className="relative w-full h-[450px] flex flex-col justify-center items-center text-center">
      <img
        src="src/assets/banner2.jpg"
        alt="MarriTalk Logo"
        className="absolute w-full h-full object-cover inset-0"
      />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Tiêu đề */}
        <h1 className="text-white mt-4 text-3xl font-bold pb-2">
          Tìm kiếm nhà trị liệu
        </h1>
        <p className="text-white mt-2 text-lg text-center font-medium px-4 max-w-xl pb-6">
          Các nhà trị liệu của MarriTalk luôn sẵn sàng cùng bạn xây dựng hạnh
          phúc
        </p>

        {/* Thanh tìm kiếm */}
        <div className="mt-4 relative w-[100%] max-w-[700px] bg-white rounded-full shadow-md">
          <input
            type="text"
            placeholder="Tìm kiếm nhà trị liệu"
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
