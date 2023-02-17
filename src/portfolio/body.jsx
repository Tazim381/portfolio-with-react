import "./body.css";

function Body() {
  return (
    <div className="body">
      <div className="intro">
        <h1>Hello This is Tazim</h1>
        <p>I am a Front End Web developer.</p>
      </div>
      <div className="wrapEducationBackground">
        <div className="educationalBackground">
          <h2>Eduction</h2>
          <p>Institute: Jahangirnagar University</p>
          <p>Department: Computer Science and Engineering</p>
          <p>Current Studying Year: Honors 3rd year</p>
        </div>
        <div className="educationalBackground">
          <h2>Language Skill</h2>
          <h4>C C++ Java Python Javascript Perl </h4>
        </div>
        <div className="educationalBackground">
          <h2>Number of Projects</h2>
          <p>C++: 1</p>
          <p>Java: 1</p>
          <p>React:2</p>
          <p>Javascript:2</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
