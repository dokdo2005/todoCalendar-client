import React from "react";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: null,
    };
    this.quotes = {
      0: "성공하려면 귀는 열고 입은 닫아라. - 존 데이비슨 록펠러",
      1: "때로는 한 순간의 결정이 인생을 바꾼다. - 나폴레온 힐",
      2: "무조건 믿지 마라. 검증하라. - 스티븐 D. 레빗",
      3: "중요한 일을 절대 e메일로 보내지 마라. - 엘리어트 스피처(미국 뉴욕주 검찰총장)",
      4: "타협의 범위를 최대한 넓혀라. - 한스-올로브 올슨(볼보 자동차 회장)",
      5: "누군가를 위해서 일할 때는 진심으로 하라. - 지그 지글러",
      6: "가장 훌륭한 일은 모험과 도전정신으로 이루어진다. - 윌리엄 맥나이트(3M 전CEO)",
      7: "학벌이나 경력이 아닌 태도를 먼저 봐라. - 도널드 트럼프",
      8: "돈의 힘을 제대로 이해하라. - 말콤 S. 포브스",
      9: "인내는 어떤 실력보다 강하다. - 백 호건",
    };
  }

  componentDidMount() {
    let randomQuote = Math.round(
      Math.random() * (Object.keys(this.quotes).length - 1)
    );
    this.setState({
      currentQuote: this.quotes[randomQuote],
    });
  }

  render() {
    if (this.state.currentQuote === null) {
      return <>Loading...</>;
    }
    return <>{this.state.currentQuote}</>;
  }
}

export default Quotes;
