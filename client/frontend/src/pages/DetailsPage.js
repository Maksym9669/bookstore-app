import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";
import { Image } from "antd";
import { Row, Col } from "antd";
import { Descriptions } from "antd";

function DetailsPage(props) {
  let index = window.location.href.lastIndexOf("/");
  let id = parseInt(window.location.href.slice(index + 1));

  const style = { margin: "10px", padding: "10px" };
  const books = useSelector((state) => state.api.books);
  const book = books.find((elem) => elem.id === id);
  const elementStyle = { margin: "10px", padding: "3px" };
  console.log("BOOKS FROM DETAIL PAGE: ", books);
  console.log("BOOK FROM DETAIL PAGE: ", book.title);

  return (
    <Row>
      <Col span={24} style={{ display: "flex" }}>
        <h2 className="main-header" style={style}>
          Book details
        </h2>
        <Link to={`/books/main`}>
          <HomeFilled
            style={{
              fontSize: "30px",
              alignItems: "center",
              marginLeft: "15px",
              marginTop: "20px",
            }}
          />
        </Link>
      </Col>

      <Descriptions
        title="Descriptions"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Title">{book.title}</Descriptions.Item>
        <Descriptions.Item label="Year">{book.year}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {book.description}
        </Descriptions.Item>
        <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
        <Descriptions.Item label="Number of pages">
          {book.pageNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Adult">{book.adult}</Descriptions.Item>
        <Descriptions.Item label="Images">
          <Image
            width={100}
            style={elementStyle}
            src={
              book.imageUrl
                ? `http://localhost:8050/public/${book.imageUrl}`
                : "https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg"
            }
          />
        </Descriptions.Item>
        <Descriptions.Item label="Genre">{book.genre}</Descriptions.Item>
      </Descriptions>
    </Row>
  );
}

export default DetailsPage;
