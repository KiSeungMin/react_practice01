import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * 프로퍼티 : 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용
 */

class PropsComponent extends Component {
  render() {
    return <div className="message-container">{this.props.name}</div>;
  }
}

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
