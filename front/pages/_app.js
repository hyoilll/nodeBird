import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";
import withReduxSaga from "next-redux-saga"; // next와 redux-saga를 연결하는 라이브러리
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    // <Provider store={store}></Provider> : react일 경우에는 감싸워야 하는데 next.js로 하고 있기 때문에 자동으로 감싸줌
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

export default wrapper.withRedux(withReduxSaga(NodeBird));
