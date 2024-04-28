import css from "./Options.module.css";

export default function Options({
  feedback,
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  const feedbackValues = Object.keys(feedback);

  return (
    <div className={css.container}>
      <button onClick={() => updateFeedback(feedbackValues[0])}>
        {feedbackValues[0]}
      </button>
      <button onClick={() => updateFeedback(feedbackValues[1])}>
        {feedbackValues[1]}
      </button>
      <button onClick={() => updateFeedback(feedbackValues[2])}>
        {feedbackValues[2]}
      </button>
      {totalFeedback ? <button onClick={resetFeedback}>Reset</button> : ""}
    </div>
  );
}
