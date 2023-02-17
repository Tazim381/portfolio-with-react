import "./body.css";

function Education(props) {
    return (
        <div className="educationalBackground">
        <h2>Eduction</h2>
        <p>Institute: {props.institute}</p>
        <p>Department: {props.department}</p>
        <p>Current Studying Year: {props.year}</p>
      </div>
    )
}

function Skill() {
    return(
        <div className="educationalBackground">
        <h2>Language Skill</h2>
        <p>C, C++, Java, Python, Javascript</p>
      </div>
    )
}

function Projects() {
    return(
    <div className="educationalBackground">
    <h2>Number of Projects</h2>
    <p>C++: 1</p>
    <p>Java: 1</p>
    <p>React: 2</p>
    <p>Javascript: 2</p>
   </div>
    )
}

function Intro(props) {
    return (
        <div className="intro">
        <h1>Hello This is {props.name}</h1>
        <p>I am a Front End Web developer.</p>
      </div>
    )
}
function Body() {
  return (
    <div className="body">
      <Intro name="Tazim"/>
      <div className="wrapEducationBackground">
        <Education institute="Jahangirnagar University" department="Computer Science and Engineering" year=" Honors 3rd year"/>
        <Skill/>
        <Projects/>
      </div>
    </div>
  );
}

export default Body;
