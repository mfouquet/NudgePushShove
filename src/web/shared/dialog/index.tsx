import * as React from "react";
import "./style.css";

interface IProps {
  // eventType: string;
}

interface IState {
  // isSubscriptionValid: boolean;
}

export default class Plugin extends React.Component<IProps, IState> {
  handleZoomChange = (value: string, colorblindType: string) => {
    console.log("nothing");
  };

  componentDidMount() {}

  render() {
    return (
      <div className="dialog">
        <div className="dismiss">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L9 9"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <header>
          <button>Website</button>
          <span className="separator">&#183;</span>
          <button>Help</button>
          <span className="separator">&#183;</span>
          <button>1.4.0</button>
        </header>
        <main>
          <div className="row">
            <label>Nudge</label>
            <input autoFocus />
          </div>
          <div className="divider" />
          <div className="row">
            <label>Push</label>
            <input />
          </div>
          <div className="divider" />
          <div className="row">
            <label>Shove</label>
            <input />
          </div>

          <button className="button--save">Save</button>
          <button>Reset</button>
        </main>
      </div>
    );
  }
}
