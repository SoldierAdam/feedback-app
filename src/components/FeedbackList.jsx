import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedackContext"
import Spinner from "./shared/Spinner"

function FeedbacklList() {
  const {feedback, isLoading} = useContext(FeedbackContext)


  if(!isLoading && (!feedback || feedback === 0)){
      return <p>No Feedback!</p>
    }

  return isLoading ? (
    <Spinner/>
  ) : (
  <div className="feedback-list">
    {feedback.map((item) => (
    <FeedbackItem key={item.id} item={item} />
    ))}
  </div>
  )

}

export default FeedbacklList