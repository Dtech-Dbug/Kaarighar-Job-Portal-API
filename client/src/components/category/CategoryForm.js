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
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
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
        <Dragger {...props} onChange={handle}>
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
