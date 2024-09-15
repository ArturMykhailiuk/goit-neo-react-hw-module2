import PropTypes from 'prop-types';
import css from './Feedback.module.css'


function Feedback({ totalFeedback, good, neutral, bad }) {
    const positiveFeedback = Math.round((good / totalFeedback) * 100);

    return (
            <div className={css.feedback} >
                <p>Good: {good}</p>     
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Positive feedback: {positiveFeedback}%</p>
            </div>
    )
}




Feedback.propTypes = {
  totalFeedback: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};

export default Feedback