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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
}

function Total(props) {
  return (
    <p>
      Total Units:{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
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

  const parts = [
    {
      name: "IT365 - Data Analytics",
      exercises: 3,
    },
    {
      name: "CSIT327 - Information Management 2",
      exercises: 3,
    },
    {
      name: "CSIT340 - Industry Elective",
      exercises: 3,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        fullName="Dirk Dannielle E. Villarin"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  );
}

export default App;
