import Layout from '../components/layout'
import React from 'react';
import { Router } from '../routes';
import config from '../config';

import 'isomorphic-unfetch'

// server rendered code
export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    // fetch data here
    return  { users: ['User1', 'User2', 'User3']};
  }

  render() {
    return (
      <Layout title="Home">
        {
          this.props.users.map(u => (<button className="btn" onClick={(e) => Router.pushRoute('user', {username: u})}>{u}</button>))
        }

      </Layout>
    )
  }
}
