import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between items-center py-4 px-8 border-b">
      <div className="flex items-center space-x-2">
        <img src="src/assets/logo.png" alt="MarriTalk Logo" className="h-6" />
      </div>
      <nav className="flex space-x-6 font-medium text-teal-700 ">
        <a href="/" className="hover:underline">
          <p className="text-teal-700">Home</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-teal-700"> New & Blog</p>
        </a>
        <a href="/counseling" className="hover:underline">
          <p className="text-teal-700">Counseling</p>
        </a>
        <a href="/quizzes" className="hover:underline">
          <p className="text-teal-700"> Quizzes</p>
        </a>
        <a href="#" className="hover:underline">
          <p className="text-teal-700"> Contact</p>
        </a>
      </nav>
      <Link to="/login">
        <button className="border border-teal-700 text-teal-700 px-4 py-1 rounded-full hover:bg-teal-700 hover:text-white transition">
          Login
        </button>
      </Link>
    </header>
  );
}
