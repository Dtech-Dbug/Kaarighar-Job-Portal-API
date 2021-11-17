import React from "react";
import Resizer from "react-image-file-resizer";

import { Card, Form, Button, Input, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
const { Dragger } = Upload;

const CategoryForm = ({
  handleCategoryChange,
  handleCategoryFormSubmit,
  handleFile,
  setFile,
}) => {
  let props = {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  };

  return (
    <Card className="w-full">
      <form
        action="/singleFile"
        method="POST"
        name="Category"
        layout="vertical"
        enctype="multipart/form-data"
      >
        <Input
          placeholder="Enter Category Name."
          className="p-2"
          onChange={handleCategoryChange}
        />
        <input
          name="image"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        ></input>
        <Button
          onClick={handleCategoryFormSubmit}
          type="primary"
          size="large"
          className=" my-4"
        >
          Add Category
        </Button>
      </form>
    </Card>
  );
};

export default CategoryForm;
