import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildComponent2 extends Component {
  render() {
    const { objValue, requiredStringValue } = this.props;

    return (
      <div>
        {/* 객체를 문자열로 변환하여 출력 */}
        <div>객체값: {String(Object.entries(objValue))}</div>
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
  }
}

ChildComponent2.propTypes = {
  // 객체 프로퍼티의 자료형은 PropTypes의 shape를 사용하여 정의한다.
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // 필수 프로퍼티로 지정
  requiredStringValue: PropTypes.string.isRequired,
};

export default ChildComponent2;
