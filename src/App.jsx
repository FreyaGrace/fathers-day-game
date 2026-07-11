import { useEffect, useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [time, setTime] = useState(30);
  const [pos, setPos] = useState({ x: 100, y: 100 });

  function moveHeart() {
    setPos({
      x: Math.random() * 300,
      y: Math.random() * 500,
    });
  }

  function catchHeart() {
    const newScore = score + 1;
    setScore(newScore);

    if (newScore > highScore) {
      setHighScore(newScore);
    }

    moveHeart();
  }

  function restartGame() {
    setScore(0);
    setTime(30);
    moveHeart();
  }

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  useEffect(() => {
    if (time <= 0) return;

    const mover = setInterval(moveHeart, 800);

    return () => clearInterval(mover);
  }, [time]);

  if (time <= 0) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <h1>🎉 Game Over</h1>

        <img
          src="https://pngtree.com/freepng/happy-father-s-day_20945886.html"
          alt="Dad"
          style={{
            width: "250px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        />

        <h2>Happy Father's Day, Papang! 💙</h2>

        <p>Thanks for every laugh, lesson, and sacrifice.</p>

        <h3>Score: {score}</h3>

        <h3>🏆 Highest Score: {highScore}</h3>

        <button
          onClick={restartGame}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "#38bdf8",
            color: "white",
          }}
        >
          🔄 Try Again
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#87CEEB",
        position: "relative",
      }}
    >
      <h2 style={{ padding: 20 }}>
        ❤️ Score: {score} | ⏳ {time}s | 🏆 {highScore}
      </h2>

      <button
        onClick={catchHeart}
        style={{
          position: "absolute",
          left: pos.x,
          top: pos.y,
          fontSize: "40px",
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        ❤️
      </button>
    </div>
  );
}
