import { useState } from "react";

export default function Counter({ amount, setAmount } = props) {
  function removeCount() {
    // Don't go under 1
    if (amount <= 1) return;

    setAmount((current) => {
      return current - 1;
    });
  }

  function addCount() {
    // Don't go over 4
    if (amount >= 4) return;
    setAmount((current) => {
      return current + 1;
    });
  }

  return (
    <div>
      <h3 id="count" data-toggle="tooltip" title="Amount of images">
        {amount}
      </h3>
      <button
        className="btn btn-danger py-1"
        id="count-down"
        onClick={removeCount}
        data-toggle="tooltip"
        title="Lower amount of images"
      >
        -
      </button>
      <button
        className="btn btn-primary py-1"
        id="count-up"
        onClick={addCount}
        data-toggle="tooltip"
        title="Increase amount of images"
      >
        +
      </button>
    </div>
  );
}
