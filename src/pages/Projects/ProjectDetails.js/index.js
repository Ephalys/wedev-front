import React, { Component } from "react";

class DetailsProject extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>DetailsProject</div>
        <div>
          <a href={`/detailsproject/createsprint/${this.props.id}`}>sprint</a>
        </div>
      </div>
    );
  }
}

export default DetailsProject;
