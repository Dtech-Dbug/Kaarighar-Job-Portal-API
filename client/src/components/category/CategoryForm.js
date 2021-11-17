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
}) => {
  let props = {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  };

  return (
    <Card className="w-full">
      <form
        action="/admin/category"
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
        <input name="image" type="file" onChange={handleFile}></input>
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