import GraphController from "./GraphController";
import "./Graph.css";
import { useEffect, useState } from "react";
const Graph = () => {
  const [session, setSession] = useState(false);
  const [size, setSize] = useState(50);
  let graphBars;
  useEffect(() => {}, [size]);

  return (
    <>
      <section className="graph">
        <h1>Graph</h1>
      </section>
      <GraphController
        size={size}
        setSize={setSize}
        session={session}
        setSession={setSession}
      />
    </>
  );
};

export default Graph;
