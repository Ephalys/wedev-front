import React, { Component } from "react";
import axios from "axios";

class DetailsProject extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
  }

  componentDidMount() {
    axios
      .get(
        `/project/1`,
        // {
        //   params: {
        //     id: 1
        //   }
        // },
        {
          headers: { Authorization: localStorage.getItem("token") }
        }
      )
      .then(response => {
        console.log(response.data);
        // this.setState({ projects: response.data.projects });
      });
  }
  render() {
    return (
      <div>
        <div>DetailsProject</div>
        <div>
          <a
            href={`/detailsproject/createsprint/${this.props.match.params.id}`}
          >
            sprint
          </a>
        </div>
      </div>
    );
  }
}

export default DetailsProject;
