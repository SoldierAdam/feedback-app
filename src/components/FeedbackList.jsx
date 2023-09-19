import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbacklList({feedback ,handleDelete}) {
  if(!feedback || feedback === 0){
      return <p>No Feedback!</p>
    }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

FeedbacklList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}

export default FeedbacklList