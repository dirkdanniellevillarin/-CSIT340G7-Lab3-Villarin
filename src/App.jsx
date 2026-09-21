function Header(props) {
  return <h1>{props.course}</h1>;
}

function Part(props) {
  return (
    <p>
      {props.part.name} - {props.part.exercises} units
    </p>
  );
}

function Content(props) {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  );
}

function Total(props) {
  return <p>Total Units: {props.total}</p>;
}

function Footer(props) {
  return (
    <div>
      <hr />
      <p>
        {props.fullName} - {props.courseCode} - {props.section}
      </p>
    </div>
  );
}

function App() {
  const course = "Application Development";

  const part1 = {
    name: "IT365 - Data Analytics",
    exercises: 3,
  };
  const part2 = {
    name: "CSIT327 - Information Management 2",
    exercises: 3,
  };
  const part3 = {
    name: "CSIT340 - Industry Elective",
    exercises: 3,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer
        fullName="Dirk Dannielle E. Villarin"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  );
}

export default App;
