import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
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
function SkillList(props) {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
function Avatar() {
  const imageUrl =
    "https://sciencevision.in/wp-content/uploads/2020/12/IMG_20221231_115303.jpg";

  return <img className="avatar" src={imageUrl} alt="ImageNotFound" />;
}

function Intro() {
  return (
    <div>
      <h1>Sutharsan sparkz</h1>
      <p>
        The warning message you received indicates that you are trying to render
        a function directly as a React child, which is not allowed. This
        typically occurs when you accidentally return a component function
        instead of rendering it by using the JSX syntax within your render
        function.
      </p>
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
