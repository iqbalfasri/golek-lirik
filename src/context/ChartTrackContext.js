/**
 * NOTE Untuk sementara menggunakan
 * ContextAPI biasa dan nantinya akan
 * menggunakan Context & React Hooks
 */
import React, { Component, createContext } from "react";
import { Skeleton } from "antd";

/**
 * Import Chart Service
 */
import ChartTrackService from "../services/chart-track.service";

/**
 * Initialize Context
 */
export const ChartTrackContext = createContext();

/**
 * Create Context Provider
 */
class ChartTrackContextProvider extends Component {
  constructor() {
    super();

    this.state = {
      chartTracks: [],
      loading: true,
      pageSize: 9
    };

    // this.handleLoadmore = this.handleLoadmore.bind(this);
  }

  componentDidMount() {
    ChartTrackService(this.state.pageSize)
      .then(tracks => {
        this.setState({ chartTracks: tracks, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    this.setState({ pageSize: this.state.pageSize + 6 });
  }

  handleLoadmore = () => {
    this.setState({ pageSize: this.state.pageSize + 6 });
  };

  render() {
    return (
      <ChartTrackContext.Provider
        value={{ ...this.state, handleLoadmore: this.handleLoadmore }}
      >
        {this.props.children}
      </ChartTrackContext.Provider>
    );
  }
}

export default ChartTrackContextProvider;
