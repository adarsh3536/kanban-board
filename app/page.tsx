import React from "react";
import { Col, Row } from "antd";
import Cards from "@/app/components/card/Cards";

//mx-48 my-10

function page() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="header bg-white w-3/4 my-10 py-8 px-5 rounded-2xl flex items-center justify-center justify-between">
          <h1 className="text-2xl ">Desktop & Mobile Application</h1>
          <button className="bg-purple-500 rounded h-10 px-5 py-6 text-white flex items-center justify-center ">
            Create Task
          </button>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default page;

{
  /* // const App: React.FC = () => (
//   <Row>
//     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//       Col
//     </Col>
//     <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//       Col
//     </Col>
//     <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
//       Col
//     </Col>
//   </Row>
// ); */
}
