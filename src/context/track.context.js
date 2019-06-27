import React, { Component, Fragment, createContext } from "react";

/**
 * Initial context
 */
const TrackContext = createContext();

/**
 * Main Provider
 */
export default class Provider extends Component {
  render() {
    return <Fragment />;
  }
}

/**
 * Initial consumer
 */
const TrackConsumer = TrackContext.Consumer;

export { Provider };
