import React from "react";
import Body from "./HomeBody";
import Layout from "../../Layout/Layout";
import Background from "../../Layout/Background";
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Background
          img={`${process.env.PUBLIC_URL}/img/background/homeBackground.jpg`}
        />
        <Body />
      </Layout>
    );
  }
}

export default Home;
