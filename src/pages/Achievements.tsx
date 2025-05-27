import '../styles/Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h1>Achievements</h1>
      <p>Here are some of the achievements I am proud of.</p>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Achievements & Activities</h2>
      <ul style={{ marginTop: "1rem", lineHeight: "1.8" }}>
        <li>🏅 Participated in a National-Level SEO Hackathon conducted by ANITS CSE Department</li>
        <li>🧠 Participated in National-Level ML Workshop and Hackathon (AI, ML & DS) by ANITS CSE Dept</li>
        <li>📖 Won 2nd Prize in District-level Bhagavad Gita Contest by ISKCON</li>
      </ul>
    </div>
  );
};

export default Achievements;
