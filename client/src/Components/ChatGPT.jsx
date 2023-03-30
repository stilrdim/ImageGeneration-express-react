import { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInfoLabel, setShowInfoLabel] = useState(false);

  // Using this to test out data sent from the API in an HTML Paragraph
  const [backendData, setBackendData] = useState([{}]);

  async function createImage() {
    setLoading(true);
    await axios
      .post("/api/OpenAI/GenerateImage", {
        prompt: prompt,
      })
      .then((response) => {
        setAnswer(response.data);
      });
    setLoading(false);
  }

  const handleClick = () => {
    // Avoid crashing the backend with bad requests
    if (prompt.length < 1) {
      setShowInfoLabel(true);
      return;
    } else {
      setShowInfoLabel(false);
    }

    createImage();
  };

  // Allow clicking enter to submit the prompt aswell
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    setPrompt(e.currentTarget.value);
  };

  return (
    <div id="chatgpt">
      {answer == null ? <h1>DALL-E Image Generator</h1> : null}
      <input
        type="text"
        style={{ fontSize: "1.5rem", width: "650px" }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>

      {/* Submitted empty prompt */}
      {showInfoLabel == true && <h2>You can't submit an empty prompt!</h2>}

      {loading ? <h2>Generating your image...</h2> : null}

      {/* The actual image (only when requested) */}
      {answer != null && (
        <img src={answer} width="750" height="750" alt="Image placeholder" />
      )}

      {/* Don't render element if we haven't received any backend data in the Test variable */}
      {JSON.stringify(backendData) != "[{}]" && (
        <p>{JSON.stringify(backendData)}</p>
      )}
    </div>
  );
};

export default ChatGPT;
