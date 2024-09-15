import "./App.css";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import { useState, useEffect } from "react";

function App() {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackState, setFeedbackState] = useState(() => {
    const storedFeedbackState = localStorage.getItem("feedbackState");
    return storedFeedbackState ? JSON.parse(storedFeedbackState) : initialState;
  });

  const totalFeedback =
    feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const good = feedbackState.good;
  const neutral = feedbackState.neutral;
  const bad = feedbackState.bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackState((prevFeedbackState) => {
      return {
        ...prevFeedbackState,
        [feedbackType]: prevFeedbackState[feedbackType] + 1,
      };
    });
  };

  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  const resetFeedback = () => {
    setFeedbackState(initialState);
  };

  useEffect(() => {
    localStorage.setItem("feedbackState", JSON.stringify(feedbackState));
  }, [feedbackState]);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
