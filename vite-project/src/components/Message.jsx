export default function Message({ count }) {
  let message = "Start clicking to see your proggress!";
  if (count === 0) {
    return <h1>{message}</h1>;
  } else if (count > 0 && count <= 5) {
    return <h1>Good start! Keep going!</h1>;
  } else if (count > 5 && count <= 10) {
    return <h1>You're doing great!</h1>;
  } else if (count > 10 && count <= 20) {
    return <h1>Amazing! You're a clicking master!</h1>;
  } else if (count < 0) {
    return <h1>Negative clicks? That's a new record!</h1>;
  } else if (count > 20) {
    return <h1>stop now tryhard</h1>;
  }
}
