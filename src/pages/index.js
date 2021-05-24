import * as React from "react";
import { graphql, link } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Ecom Addresses</h1>
      {data.allAirtable.edges.map((address) => (
        <div key={address.node.id}>
          <div>{address.node.data.Address}</div>
          <div>{address.node.data.Tags}</div>
        </div>
      ))}
    </main>
  );
};

export const query = graphql`
  query MyQuery {
    allAirtable {
      edges {
        node {
          id
          data {
            Address
            Tags
            LOB
          }
        }
      }
    }
  }
`;

export default IndexPage;
