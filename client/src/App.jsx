import ChatGPT from "./ChatGPT";

function App() {
  return (
    // <div className="container-fluid d-flex flex-column align-items-center bg-dark gap-5 text-white">
    <div style={{ backgroundColor: "#212529" }}>
      <ChatGPT />
      {/* <h1 className="mt-5">Hello there!</h1>
      <div className="container-fluid d-flex col-6 mx-auto">
        <input type="text" className="fs-3 col-10" onChange={handleChange} />
        <button
          type="button"
          className="btn col-2 btn-primary btn-md fs--5"
          onClick={handleClick}
        >
          Submit
        </button>
      </div> */}
    </div>
  );
}

export default App;
