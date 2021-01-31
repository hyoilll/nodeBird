import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const NodeBird = ({ Component }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Component></Component>
    </div>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
