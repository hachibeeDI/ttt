import React from 'react';
import {Link, StaticQuery, graphql} from 'gatsby';

import Layout from '../components/layout';

export default function News() {
  return (
    <Layout>
      <h1>New desu</h1>
      <ul>
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 1000) {
                edges {
                  node {
                    frontmatter {
                      path
                      title
                      date
                    }
                  }
                }
              }
            }
          `}
          render={({allMarkdownRemark: {edges}}) => {
            // TODO: as a component
            return edges.map(({node}: {node: any}) => (
              <li key={node.frontmatter.path}>
                {node.frontmatter.title}: {node.frontmatter.date}
              </li>
            ));
          }}
        />
      </ul>
    </Layout>
  );
}
