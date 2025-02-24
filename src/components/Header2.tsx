export default function Header2() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#325343] z-50 flex justify-between items-center py-4 px-8 ">
      <div className="flex items-center space-x-2">
        <img src="src/assets/logo1.png" alt="MarriTalk Logo" className="h-10" />
      </div>
      <nav className="flex space-x-6 font-semibold ">
        <a href="/" className="hover:underline">
          <p className="text-white text-base">Home</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-white text-base"> New & Blog</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-white text-base ">Counseling</p>
        </a>
        <a href="/quizzes" className="hover:underline">
          <p className="text-white text-base "> Quizzes</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-white text-base"> Contact</p>
        </a>
      </nav>
      <button className="bg-white border font-bold border-white text-[#325343] px-5 py-2 rounded-full  cursor-pointer transition duration-500 opacity-100 hover:opacity-60">
        Sign up
      </button>
    </header>
  );
}
