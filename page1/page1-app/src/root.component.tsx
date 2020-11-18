import React from "react";
import "./root.component.css";

export default function Root() {
  const handler = React.useCallback((): void => {
    window.postMessage("page1", "*");
  }, []);
  return (
    <div className="page1-app__container">
      <div>
        <p style={{ textAlign: "center" }}>Page 1</p>
        <button onClick={handler}>Увеличить счетчик: Page 1</button>
      </div>
    </div>
  );
}
