
const Banner = () => {
  return (
    <div className="relative w-full">
      {/* Phần nền hình ảnh */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-start px-10"
        style={{ backgroundImage: "url('src/assets/banner.png')" }}>

        {/* Lớp overlay tạo hiệu ứng tối dần từ trái sang phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>

        {/* Nội dung bên trong (cũng bị mờ theo gradient) */}
        <div className="relative max-w-lg text-white z-10 opacity-80 ml-15">
        <p className="text-lg">Build happiness now</p>
          <h1 className="text-3xl font-semibold leading-tight mt-2">
            MarriTalk premarital counseling platform helps you prepare well for your marriage journey.
          </h1>
          <button className="mt-4 px-6 py-2 text-white font-semibold rounded-full border-2 border-white">
            Get Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
