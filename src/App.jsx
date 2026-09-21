function Header(props) {
  return <h1>{props.course}</h1>;
}

function Content(props) {
  return (
    <div>
      <p>
        {props.part1} - {props.exercises1} units
      </p>
      <p>
        {props.part2} - {props.exercises2} units
      </p>
      <p>
        {props.part3} - {props.exercises3} units
      </p>
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

  const part1 = "IT365 - Data Analytics";
  const exercises1 = 3;

  const part2 = "CSIT327 - Information Management 2";
  const exercises2 = 3;

  const part3 = "CSIT340 - Industry Elective";
  const exercises3 = 3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer
        fullName="Dirk Dannielle E. Villarin"
        courseCode="CSIT340"
        section="G5"
      />
    </div>
  );
}

export default App;
