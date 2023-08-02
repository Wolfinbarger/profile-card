import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "green",
  },
  {
    skill: "Git + GitHub",
    level: "intermediate",
    color: "purple"
  },
  {
    skill: "Ruby",
    level: "advance",
    color: "red"
  },
  {
    skill: "React",
    level: "beginner",
    color: "blue"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar photoName="../avatar.jpg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt="Avatar"></img>;
}

function Intro(params) {
  return (
    <div>
      <h3>X'Zaiver Wolfinbarger</h3>
      <p>
        Full-stack web developer who enjoys creating fun and meaningful
        projects. When not busy coding you can find me playing board games, or
        learning about various topics ranging from cooking to finance.
      </p>
    </div>
  );
}
// 💪 👍 👶
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
<Skill skill={skill.skill} color={skill.color} level={skill.level} key={skill.skill}/>
      ))}
    </div>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advance" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
