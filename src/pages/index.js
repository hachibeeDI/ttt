import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{maxWidth: '300px', marginBottom: '1.45rem'}}>
        <Image />
      </div>
      <ul>
        <li>
          <Link to="/news/">News</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/profile/">Profile</Link>
        </li>
      </ul>
    </Layout>
  );
}
