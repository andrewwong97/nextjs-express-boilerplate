import React, { Component } from 'react';

import { Router } from '../routes';
import config from '../config';
import Layout from '../components/layout';

class Userview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.url.query.username
    };
  }

  render() {
    return (
			<Layout className="Userview" title={this.state.username}>
        <h1>{this.state.username}</h1>
				<button className="btn" onClick={() => Router.pushRoute('/')}>Go Back</button>
			</Layout>
    );
  }
}

export default Userview;
