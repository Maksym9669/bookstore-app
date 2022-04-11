import React, { useState } from "react";
import axios from "axios";
import { Upload, Modal, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

function FileImport(props) {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.api.books);
  const [imageState, setImageState] = useState({
    previewVisible: false,
    previewImage: "",
    fileList: [],
  });

  const elementStyle = { margin: "10px", padding: "2px 5px" };

  const handleCancel = () =>
    setImageState({ ...imageState, previewVisible: false });

  const handlePreview = (file) => {
    setImageState({
      ...imageState,
      previewImage: file.thumbUrl,
      previewVisible: true,
    });
  };

  const handleUpload = ({ fileList }) => {
    setImageState({
      ...imageState,
      fileList,
    });

    let formData = new FormData();
    formData.append("file", imageState.fileList[0].originFileObj);

    axios
      .post("http://localhost:8050/upload", formData)
      .then((res) => {
        props.setImageUrl(res.data.url); // The state of Input is supposed to be updated here, but it isn't
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const uploadButton = (
    <div>
      <DownloadOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <div>
      <Upload
        listType="book-card"
        name="avatar"
        fileList={imageState.fileList}
        onPreview={handlePreview}
        onChange={handleUpload}
        beforeUpload={() => false}
      >
        {uploadButton}
      </Upload>

      <Modal
        visible={imageState.previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={imageState.previewImage}
        />
      </Modal>
    </div>
  );
}

export default FileImport;
