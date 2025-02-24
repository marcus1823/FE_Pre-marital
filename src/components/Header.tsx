import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center py-4 px-8 ">
      <div className="flex w-1/4 items-center space-x-2">
        <img src="src/assets/logo.png" alt="MarriTalk Logo" className="h-6" />
      </div>
      <nav className="flex-1 flex justify-center space-x-6 font-semibold text-[#325343]  ">
        <a href="/" className="hover:underline">
          <p className="text-[#325343] text-base">Home</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-[#325343]   text-base"> New & Blog</p>
        </a>
        <a href="/counseling" className="hover:underline">
          <p className="text-[#325343]  text-base">Counseling</p>
        </a>
        <a href="/quizzes" className="hover:underline">
          <p className="text-[#325343]  text-base"> Quizzes</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-[#325343]   text-base"> Contact</p>
        </a>
      </nav>
      <div className="w-1/4 flex justify-end">
        <Link to="/login">
          <button className="border-2 border-[#325343]  text-[#325343] font-semibold cursor-pointer px-5 py-1 rounded-full hover:bg-teal-700 hover:text-white transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
