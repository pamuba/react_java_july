import React, { Component } from "react";
import { UserConsumer } from "./userContext";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {
              (val) => {
                    return <div>{val}</div>;
              }
          }
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
