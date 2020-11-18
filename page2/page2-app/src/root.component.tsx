import React from "react";
import "./root.component.css";
import { Link, BrowserRouter, Route } from "react-router-dom";

export default function Root(props) {
  const handler = (): void => {
    window.postMessage("page2", "*");
  };
  return (
    <BrowserRouter>
      <div className="page2-app__container">
        <div>
          <Route path="/page2/2">
            <div>
              <p>Page 2/2</p>
            </div>
          </Route>
          <Route path="/page2/1">
            <div>
              <p>Page 2/1</p>
            </div>
          </Route>
          <div>
            <Link to="/page2/1">Page 2/1</Link>
          </div>
          <div>
            <Link to="/page2/2">Page 2/2</Link>
          </div>
          <button onClick={handler}>Увеличить счетчик: Page 2</button>
        </div>
      </div>
    </BrowserRouter>
  );
}
