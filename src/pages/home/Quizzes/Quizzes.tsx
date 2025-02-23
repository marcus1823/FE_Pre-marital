import ButtonCategory from "../../../components/common/quizzes/ButtonCategory"
import QuizBanner from "../../../components/common/quizzes/QuizBanner"

function Quizzes() {
    return (
        <div>
            <QuizBanner />
            <div className="flex items-center gap-4 p-10 bg-white whitespace-nowrap overflow-auto">
                <span className="text-gray-700 font-medium text-lg flex-shrink-0 mr-10 ml-10">Category :</span>
                <div className="flex gap-4">
                    <ButtonCategory title="All quizzes" />
                    <ButtonCategory title="Relationship" />
                    <ButtonCategory title="Finance" />
                    <ButtonCategory title="Individual" />
                    <ButtonCategory title="Mental Health" />
                </div>
            </div>

        </div>

    )
}

export default Quizzes