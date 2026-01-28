export default function DifficultyButton({ difficultyname, onClick }) {
  return (
    <button className={`home-option ${difficultyname}`} onClick={onClick}>
      {difficultyname}
    </button>
  );
}
