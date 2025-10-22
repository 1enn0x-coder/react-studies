export default function CounterButton({ title, handleclick }) {
  return (
    <button
      style={{
        margin: "5px",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "8px",
      }}
      onClick={handleclick}
    >
      {title}
    </button>
  );
}
