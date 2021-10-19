import React, { Component } from "react";
import { Layout, List, Tag, Typography, Table } from "antd";
import { contentStyle } from "../../styles";
import coinGeckoLogo from "../../images/branding/CoinGecko.png";
import { connect } from "react-redux";
import { setHeaderMenuItem } from "../../redux_actions";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

class ReactAbout extends Component {
  componentDidMount() {
    this.props.setHeaderMenuItem("about");
  }

  render() {
    const packages = [
      {
        name: "antd",
        version: "^3.20.6",
        purpose: "",
      },
      {
        name: "gh-pages",
        version: "^2.0.1",
        purpose: "",
      },
      {
        name: "react",
        version: "^16.8.6",
        purpose: "",
      },
      {
        name: "react-dom",
        version: "^16.8.6",
        purpose: "",
      },
      {
        name: "react-router-dom",
        version: "^5.0.1",
        purpose: "",
      },
      {
        name: "react-scripts",
        version: "3.0.1",
        purpose: "",
      },
      {
        name: "react-chartjs-2",
        version: "^2.7.6",
        purpose: "",
      },
      {
        name: "axios",
        version: "^0.19.0",
        purpose: "",
      },
      {
        name: "redux-thunk",
        version: "^2.3.0",
        purpose: "",
      },
      {
        name: "redux",
        version: "^4.0.4",
        purpose: "",
      },
      {
        name: "react-redux",
        version: "^7.1.0",
        purpose: "",
      },
    ];

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Version",
        dataIndex: "version",
        key: "version",
        render: (item) => <Tag color="green">{item}</Tag>,
      },
    ];

    const challenges = [
      "Organizing large amounts of data from third party API.",
      "Complex routing within nested components.",
      "Restructuring data from API calls into a suitable format for UI components.",
      "Creating maintainable structure for components and resusable configurations.",
      "Learning to use a brand new UI framework (Ant Design UI).",
    ];

    return (
      <Layout style={{ padding: "1rem" }}>
        <Content className="text-focus-in" style={{ ...contentStyle }}>
          <Title level={2}>What is Crypto Currency?</Title>
          <Paragraph>
            A cryptocurrency is a digital or virtual currency that is secured by
            cryptography, which makes it nearly impossible to counterfeit or
            double-spend. Many cryptocurrencies are decentralized networks based
            on blockchain technology—a distributed ledger enforced by a
            disparate network of computers. A defining feature of
            cryptocurrencies is that they are generally not issued by any
            central authority, rendering them theoretically immune to government
            interference or manipulation.{" "}
          </Paragraph>

          <Title level={3}>How secure is Crypto Currency?</Title>
          <Paragraph>
            Cryptocurrencies are usually built using blockchain technology.
            Blockchain describes the way transactions are recorded into "blocks"
            and time stamped. It iss a fairly complex, technical process, but
            the result is a digital ledger of cryptocurrency transactions that
            is hard for hackers to tamper with. In addition, transactions
            require a two-factor authentication process. For instance, you might
            be asked to enter a username and password to start a transaction.
            Then, you might have to enter an authentication code that is sent
            via text to your personal cell phone. While securities are in place,
            that does not mean cryptocurrencies are un-hackable. In fact,
            several high-dollar hacks have cost cryptocurrency startups heavily.
            Hackers hit Coincheck to the tune of $534 million and BitGrail for
            $195 million in 2018. That made them two of the biggest
            cryptocurrency hacks of 2018,
          </Paragraph>

          <Table
            bordered
            pagination={false}
            dataSource={packages}
            columns={columns}
          ></Table>
        </Content>
      </Layout>
    );
  }
}

const mapActionsToProps = {
  setHeaderMenuItem,
};

export default connect(null, mapActionsToProps)(ReactAbout);
