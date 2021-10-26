import React from "react";

function ResultsContainer({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default ResultsContainer;
