import Banner from "../../components/common/home/Banner";
import ReadCard from "../../components/common/home/ReadCard";
import PopularCard from "../../components/common/home/PopularCard";
import SectionCard from "../../components/common/home/SectionCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TherapistCarousel from "../../components/common/home/TherapistsCarousel";

const therapists = [
  {
    image: "src/assets/theparists1.png",
    name: "Nguyễn Thị Thanh Tho",
    rating: "5.0",
  },
  {
    image: "src/assets/theparists1.png",
    name: "Nguyễn Thị Thanh Tho",
    rating: "5.0",
  },
  {
    image: "src/assets/theparists1.png",
    name: "Nguyễn Thị Thanh Tho",
    rating: "5.0",
  },
  {
    image: "src/assets/theparists1.png",
    name: "Nguyễn Thị Thanh Tho",
    rating: "5.0",
  },
  {
    image: "src/assets/theparists1.png",
    name: "Nguyễn Thị Thanh Tho",
    rating: "5.0",
  },
];

function HomePages() {
  return (
    <div className="bg-[#EDEBDF] pb-20">
      {/* <Header /> */}
      <Banner />
      <div className="flex flex-col justify-center items-center min-h-screen bg-green-900 text-white text-center px-4">
        {/* Chữ trên cùng */}
        <div className="max-w-full overflow-x-auto">
          <h2 className="text-2xl font-semibold">You deserve to be happy.</h2>
          <p className="mt-2 text-lg whitespace-nowrap">
            Let us accompany, listen and support your couple in the following
            ways.
          </p>
        </div>

        {/* Các SectionCard */}
        <div className="flex flex-wrap justify-center gap-x-6 mt-12">
          <SectionCard
            image="src/assets/sectioncard1.png"
            title="Provide news & blogs"
          />
          <SectionCard
            image="src/assets/sectioncard2.png"
            title="Appointment with experts"
          />
          <SectionCard
            image="src/assets/sectioncard3.png"
            title="Take the Quizzes"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 px-4 text-green-800 pl-20">
        <div className="w-fit mx-auto pb-2 border-b-2 border-green-800">
          <h2 className="text-2xl font-semibold">Recommended for you</h2>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">TOP READ</h3>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600 mr-12">
            View More
          </button>
        </div>

        {/* Grid layout for ReadCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <ReadCard
            image="src/assets/readcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 px-4 text-green-800 pl-10">
        {/* Đường gạch chân toàn trang */}
        <div className="w-full border-b-2 border-green-800 mb-4"></div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">POPULAR QUIZZES</h3>
          <button className="bg-green-800 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600">
            View More
          </button>
        </div>

        {/* Grid layout for ReadCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <PopularCard
            image="src/assets/popularcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <PopularCard
            image="src/assets/popularcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <PopularCard
            image="src/assets/popularcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
          <PopularCard
            image="src/assets/popularcard1.png"
            title="Suggestions for meaningful gifts for couples on Valent..."
            author="TAT news"
            time="14/02/2025"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 px-4 py-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-center text-green-800 mb-10">
          Our Therapists
        </h3>
        <div className="relative flex items-center justify-center pt-5">
          <button className="absolute left-0 text-green-800 p-2">
            <ChevronLeftIcon />
          </button>
          <div className="flex space-x-4 overflow-hidden">
            {therapists.map((therapist, index) => (
              <TherapistCarousel key={index} {...therapist} />
            ))}
          </div>
          <button className="absolute right-0 text-green-800 text-2xl p-2">
            <ChevronRightIcon />
          </button>
        </div>
        <div className="text-center mt-15">
          <button className="bg-green-800 text-white px-4 py-2 rounded-full font-medium hover:bg-green-600">
            View More
          </button>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePages;
