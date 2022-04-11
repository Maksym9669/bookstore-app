import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Upload, Alert } from "antd";
import { Row, Col } from "antd";
import { current } from "@reduxjs/toolkit";
import { insertBook, editBook } from "../redux/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import FileImport from "./FileImport";

import { Select } from "antd";

function InputForm(props) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.api.books);
  const message = useSelector((state) => state.api.message);
  const method = useSelector((state) => state.api.method);
  const bookId = useSelector((state) => state.api.id);

  const [backendResponse, setBackendResponse] = useState({
    message: "",
    success: null,
  });

  const [formFields, setFormFields] = useState({
    title: null,
    year: null,
    author: null,
    pageNumber: null,
    genre: null,
    imageUrl: "123",
    description: null,
    adult: null,
  });

  const setImageUrl = (url) => {
    setFormFields({ ...formFields, imageUrl: url }); //Not working for some reason, the state of the form should be updated which then goes to the store with the Submit/Edit button click
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (method === "create") dispatch(insertBook(formFields));
    else dispatch(editBook({ formFields, bookId }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  const { TextArea } = Input;
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      {method === "create" ? (
        <Col span={24}>
          <h2 className="main-header">Add a new book</h2>
        </Col>
      ) : (
        <Col span={24}>
          <h2 className="main-header">Edit book</h2>
        </Col>
      )}
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 12,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form-input"
      >
        {message ? (
          <Alert
            message={message}
            closable
            type="error"
            style={{ margin: "15px" }}
          />
        ) : null}
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input book's title!",
            },
          ]}
        >
          <Input
            onChange={(e) =>
              setFormFields({ ...formFields, title: e.target.value })
            }
            value={formFields.title}
          />
        </Form.Item>

        <Form.Item
          label="Year"
          name="year"
          rules={[
            {
              required: true,
              message: "Please input book's year published!",
            },
          ]}
        >
          <Input
            onChange={(e) =>
              setFormFields({ ...formFields, year: +e.target.value })
            }
            value={formFields.year}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input book's description!",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder=""
            maxLength={200}
            onChange={(e) =>
              setFormFields({ ...formFields, description: e.target.value })
            }
            value={formFields.description}
          />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please input book's author!",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder=""
            maxLength={200}
            onChange={(e) =>
              setFormFields({ ...formFields, author: e.target.value })
            }
            value={formFields.author}
          />
        </Form.Item>

        <Form.Item
          label="Number of pages"
          name="pagenumber"
          rules={[
            {
              required: true,
              message: "Please input book's number of pages!",
            },
          ]}
        >
          <Input
            onChange={(e) =>
              setFormFields({ ...formFields, pageNumber: +e.target.value })
            }
            value={formFields.pageNumber}
          />
        </Form.Item>

        <Form.Item
          label="Adult"
          name="adult"
          rules={[
            {
              required: true,
              message:
                "Please input information about whether this book is for mature audience!",
            },
          ]}
        >
          <select
            style={{ width: 120 }}
            onChange={(e) =>
              setFormFields({ ...formFields, adult: e.target.value })
            }
            value={formFields.adult}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </Form.Item>

        <Form.Item
          label="Genre"
          name="genre"
          rules={[
            {
              required: true,
              message: "Please input book's genre!",
            },
          ]}
        >
          <select
            style={{ width: 120 }}
            onChange={(e) =>
              setFormFields({ ...formFields, genre: e.target.value })
            }
            value={formFields.genre}
          >
            <option value="Classics">Classics</option>
            <option value="Detective">Detective</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Poetry">Poetry</option>
            <option value="Other">Other</option>
          </select>
        </Form.Item>

        <Form.Item label="Images">
          <Form.Item
            name="images"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <FileImport
              setImageUrl={(url) => {
                setFormFields({ ...formFields, imageUrl: url });
              }}
            ></FileImport>
          </Form.Item>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            {method === "create" ? "Create" : "Update"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default InputForm;
