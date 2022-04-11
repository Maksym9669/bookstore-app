import React from "react";
import BooksList from "../components/BooksList";
import { Row, Col } from "antd";
import InputForm from "../components/InputForm";

function MainLayout(props) {
  return (
    <div>
      <Row>
        <Col span={12} style={{ marginTop: "10px" }}>
          <InputForm></InputForm>
        </Col>
        <Col span={12} style={{ marginTop: "10px" }}>
          <BooksList></BooksList>
        </Col>
      </Row>
    </div>
  );
}

export default MainLayout;
