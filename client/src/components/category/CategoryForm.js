import React from "react";
import Resizer from "react-image-file-resizer";

import { Card, Form, Button, Input, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Dragger } = Upload;

const CategoryForm = ({
  handleCategoryChange,
  handleCategoryFormSubmit,
  handleCategoryFormEditSubmit,
}) => {
  let props = {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  };

  function fileUploadAndResize(e) {
    // let filesUploaded = images;
    //console.log(e.target.files);

    //resize: use resize react file npm : npm i react-image-file-resizer
    //for a single file : e.target.files[0]
    //buty for multiple uploads , we need to loop through the arrys of file lists
    let files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          200,
          200,
          "JPEG",
          100,
          0,
          (uri) => {
            //the calback dunction : most important
            console.log("uri ===> ", uri);

            //make request to backend with images
          },
          "base64"
        );
      }
    }
    //send to srevr to upload to cloudianry

    //get response , and set images URL in the images array in the values object
  }

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      console.log("Uploading");
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        console.log("url->", imageUrl)
      );
    }
  };

  function files(e) {
    // e.preventDefault();
    console.log("hi");
  }

  return (
    <Card className="w-full">
      <Form name="Add Category" layout="vertical">
        <Form.Item
          label="Category Name"
          name="category-name"
          rules={[
            {
              required: true,
              message: "Please input category name!",
            },
          ]}
        >
          <Input
            placeholder="Enter Category Name."
            className="p-2"
            onChange={handleCategoryChange}
          />
        </Form.Item>
        <Dragger
          {...props}
          onChange={handleChange}
          beforeUpload={beforeUpload}
          action="http://localhost:8000/api/admin/category"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint px-4">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>

        <Button
          onClick={handleCategoryFormSubmit}
          type="primary"
          size="large"
          className=" my-4"
        >
          Add Category
        </Button>
      </Form>
    </Card>
  );
};

export default CategoryForm;
