import * as React from "react";

interface IProps {
  eventType: string;
}

interface IState {
  isSubscriptionValid: boolean;
}

export class Plugin extends React.Component<IProps, IState> {
  handleZoomChange = (value: string, colorblindType: string) => {
    window.postMessage(
      "zoomChanged",
      JSON.stringify({
        zoomValue: value,
        colorblindType: colorblindType,
      })
    );
  };

  componentDidMount() {}

  render() {
    return <div>Placeholder</div>;
  }
}
