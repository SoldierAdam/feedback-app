import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedackContext"

function FeedbacklList() {
  const {feedback} = useContext(FeedbackContext)


  if(!feedback || feedback === 0){
      return <p>No Feedback!</p>
    }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default FeedbacklList