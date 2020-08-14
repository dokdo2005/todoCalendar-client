import React from 'react';
import 'antd/dist/antd.css';
import styled from "styled-components";
import { Calendar } from 'antd';


const Section = styled.section`
  border: 1px solid black;
  width:80%;
  margin: 10px auto;
`
const MoreBtn = styled.div`
  text-align:center;
  background-color:lightgray;
`

function Cal() {

  function getListData(value) {
    // console.dir(value)
    let listData;

    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    // 달력의 셀 렌더할때마다 실행된다.

    // 투두 리스트 받아오고 
    // 3개만 표기하고 
    // 3개를 초과하면 더보기 버튼 렌더


    const listData = getListData(value);
    // let fakeData = {
    //   userId: "1234567890",
    //   lists:[
    //     {
    //       id: 1,
    //       title: '제목',
    //       body: '바디',
    //       startDate: '2020-01-01 09:00:00',
    //       endDate: '2020-01-01 09:00:00',
    //     },
    //     {
    //       id: 2,
    //       title: '제목',
    //       body: '바디',
    //       startDate: '2020-01-02 09:00:00',
    //       endDate: '2020-01-02 09:00:00',
    //     },
    //     {
    //       id: 3,
    //       title: '제목',
    //       body: '바디',
    //       startDate: '2020-01-10 09:00:00',
    //       endDate: '2020-01-02 09:00:00',
    //     },
    //     {
    //       id: 4,
    //       title: '제목',
    //       body: '바디',
    //       startDate: '2020-01-20 09:00:00',
    //       endDate: '2020-01-02 09:00:00',
    //     }
    //   ]}
    return (
      <>
        <ul className="events">
          {

            listData.slice(0, 3).map(item => (
              <li key={item.content}>
                <div onClick={e => {
                  // console.log(e.target.id)
                  // console.dir(e.target)
                }} id={item.type}>
                  {item.content.slice(0, 15) + '...'}
                </div>
              </li>
            ))}
        </ul>
        {listData.length > 3 ? <MoreBtn onClick={e => console.dir(e.target)}>...</MoreBtn> : null}
      </>
    );
  }

  // function getMonthData(value) {
  //   if (value.month() === 8) {
  //     return 1394;
  //   }
  // }

  // function monthCellRender(value) {
  //   const num = getMonthData(value);
  //   return num ? (
  //     <div className="notes-month" >
  //       <section>{num}</section>
  //       <span>Backlog number</span>
  //     </div>
  //   ) : null;
  // }

  return (
    <>
      <Section>
        <Calendar
          dateCellRender={dateCellRender}
        // monthCellRender={monthCellRender}
        // onSelect={e => console.log(e)}
        />
      </Section>
    </>
  )
}

export default Cal;
