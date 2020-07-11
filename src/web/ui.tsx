import * as React from "react";
import Dialog from "./shared/dialog";

interface IProps {
  eventType: string;
}

interface IState {
  isSubscriptionValid: boolean;
}

export class Plugin extends React.Component<IProps, IState> {
  componentDidMount() {}

  render() {
    return <Dialog />;
  }
}
