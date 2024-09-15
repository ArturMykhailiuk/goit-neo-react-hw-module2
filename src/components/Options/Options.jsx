import css from './Options.module.css'
import PropTypes from 'prop-types'

function Options({ updateFeedback, totalFeedback }) {
    const handleReset = () => {
        // localStorage.setItem('feedbackState', JSON.stringify('{good}: 0, {neutral}: 0, {bad}: 0'));
        localStorage.clear();
        window.location.reload();
    };
    console.log(totalFeedback)
    return (
        <div className={css.options}>
          <button onClick={() => updateFeedback('good')}>Good</button>
          <button onClick={() => updateFeedback('neutral')}>Neutral</button>
          <button onClick={() => updateFeedback('bad')}>Bad</button>
          {totalFeedback > 0 ? 
          <button onClick={handleReset}>Reset</button> : null
          }
        </div>
    )
}


Options.propTypes = {updateFeedback: PropTypes.func.isRequired, totalFeedback: PropTypes.number.isRequired}


export default Options