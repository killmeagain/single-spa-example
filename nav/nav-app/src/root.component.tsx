import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root(props) {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const handler1 = React.useCallback(
    (e: MessageEvent): void => {
      if (e.data === "page1") {
        setCount1(count1 + 1);
      }
    },
    [count1]
  );

  const handler2 = React.useCallback(
    (e: MessageEvent): void => {
      if (e.data === "page2") {
        setCount2(count2 + 1);
      }
    },
    [count2]
  );

  React.useEffect(() => {
    window.addEventListener("message", handler1);

    return () => window.removeEventListener("message", handler1);
  });

  React.useEffect(() => {
    window.addEventListener("message", handler2);

    return () => window.removeEventListener("message", handler2);
  });

  return (
    <BrowserRouter>
      <nav className="nav">
        <div>
          <Link to="/page1" className="link">
            Page 1
          </Link>
          <Link to="/page2" className="link">
            Page 2
          </Link>
        </div>
        <div>
          <div style={{ color: "white" }}>Счетчик Page 1: {count1}</div>
          <div style={{ color: "white" }}>Счетчик Page 2: {count2}</div>
        </div>
      </nav>
    </BrowserRouter>
  );
}
