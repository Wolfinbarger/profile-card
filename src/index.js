import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function SkillList(params) {
  return (
    <div className="skill-list">
      <Skill name="HTML + CSS" color="red" emoji="🎶"/>
      <Skill name="JavaScript" color="yellow"  emoji="👍"/>
      <Skill name="Git + GitHub" color="green" emoji="👽" />
      <Skill name="React" color="aqua" emoji="😎"/>
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <span >{props.name}</span>
      <span>{props.emoji}</span>
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
