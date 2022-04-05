import "./GraphController.css";
const GraphController = ({ size, setSize, session, setSession }) => {
  const onChange = ({ target }) => {
    setSize(target.value);
  };
  return (
    <div className="controller">
      <button
        className="btn"
        onClick={() => setSession((currSession) => !currSession)}
      >
        {session ? "Stop" : "Start"}
      </button>
      <form className="size">
        <input
          type="range"
          id="data-size"
          name="data-size"
          min="10"
          max="100"
          className="form-control"
          value={size}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default GraphController;
