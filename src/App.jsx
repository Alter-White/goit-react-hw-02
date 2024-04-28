import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

export default function App() {
  const feedbackEmpty = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const getFeedbackFromLocalStorage = () => {
    const savedObject = window.localStorage.getItem("feedback");
    return savedObject !== null ? JSON.parse(savedObject) : feedbackEmpty;
  };

  const [feedback, setFeedback] = useState(() => getFeedbackFromLocalStorage());

  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positiveFeedbackPercent = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  function updateFeedback(feedbackType) {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  }

  function resetFeedback() {
    setFeedback(feedbackEmpty);
  }

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        feedback={feedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercent={positiveFeedbackPercent}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
