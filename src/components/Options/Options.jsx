import css from "./Options.module.css";
import PropTypes from "prop-types";

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? (
        <button onClick={resetFeedback}>Reset</button>
      ) : null}
    </div>
  );
}

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func,
};

export default Options;
