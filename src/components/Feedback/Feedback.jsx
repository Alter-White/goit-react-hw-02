export default function Feedback({
  feedback,
  totalFeedback,
  positiveFeedbackPercent,
}) {
  return (
    <div>
      {Object.entries(feedback).map(([key, value], index) => (
        <p key={index}>
          {key} : {value}
        </p>
      ))}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercent}%</p>
    </div>
  );
}
