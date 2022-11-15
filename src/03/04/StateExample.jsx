import React, { Component } from "react";

/**
 *
 * state는 값을 저장하거나 변경할 수 있는 객체이다.
 * state는 생성자에서 반드시 초기화해야 한다.
 * state 값을 변경할 때는 setState() 함수를 반드시 사용해아 한다.
 * setState() 함수는 비동기로 처리되며, setState() 코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거친다.
 */

class StateExample extends Component {
  constructor(props) {
    super(props);

    // state 정의
    this.state = {
      loading: true,
      formData: "no data",
    };

    this.handleData = this.handleData.bind(this);

    // 4초 후에 handleData 함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data";
    const { formData } = this.state;

    // setState 함수는 화면을 그려주는 시점을 리액트 엔진이 정한다.
    this.setState({
      loading: false,
      formData: data + formData,
    });

    console.log("loading값", this.state.loading);
  }

  render() {
    return (
      <div>
        {/* state 데이터는 this.state로 접근 가능하다 */}
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
