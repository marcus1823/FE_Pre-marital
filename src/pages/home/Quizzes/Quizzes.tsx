import ButtonCategory from "../../../components/common/quizzes/ButtonCategory";
import QuizBanner from "../../../components/common/quizzes/QuizBanner";
import QuizCard from "../../../components/common/quizzes/QuizCard";

function Quizzes() {
  return (
    <div className="bg-[#F5F3EA]">
      <QuizBanner />
      <div className="flex items-center gap-4 p-10 bg-white whitespace-nowrap overflow-auto">
        <span className="text-gray-700 font-medium text-lg flex-shrink-0 mr-10 ml-10">
          Category :
        </span>
        <div className="flex gap-4">
          <ButtonCategory title="All quizzes" />
          <ButtonCategory title="Relationship" />
          <ButtonCategory title="Finance" />
          <ButtonCategory title="Individual" />
          <ButtonCategory title="Mental Health" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 px-4 text-green-800 pl-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <QuizCard
            image="src/assets/popularcard1.png"
            title="Do I Have Relationship Anxiety Quiz"
            description="Relationship Anxiety feels different for everyone. It can preoccupy your mind and trigger intrusive thoughts and reactions. 'Do I Have Relationship Anxiety?' quiz to find out!"
          />
          <QuizCard
            image="src/assets/popularcard1.png"
            title="Do I Have Relationship Anxiety Quiz"
            description="Relationship Anxiety feels different for everyone. It can preoccupy your mind and trigger intrusive thoughts and reactions. 'Do I Have Relationship Anxiety?' quiz to find out!"
          />
          <QuizCard
            image="src/assets/popularcard1.png"
            title="Do I Have Relationship Anxiety Quiz"
            description="Relationship Anxiety feels different for everyone. It can preoccupy your mind and trigger intrusive thoughts and reactions. 'Do I Have Relationship Anxiety?' quiz to find out!"
          />
          <QuizCard
            image="src/assets/popularcard1.png"
            title="Do I Have Relationship Anxiety Quiz"
            description="Relationship Anxiety feels different for everyone. It can preoccupy your mind and trigger intrusive thoughts and reactions. 'Do I Have Relationship Anxiety?' quiz to find out!"
          />
        </div>
      </div>
    </div>
  );
}

export default Quizzes;
