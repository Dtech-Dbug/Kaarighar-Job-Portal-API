import React, { useState, useEffect } from "react";
import { readCategory, editCategory } from "../../functions/categories";
import CategoryForm from "./CategoryForm";
import { Card, Form, Button, Input, Upload, message } from "antd";
import "antd/dist/antd.css";

//function to fetch data of a sinle category

const EditCategory = ({ match, history }) => {
  const [category, setCategory] = useState();
  const [formValue, setFormValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const { title } = category;

  const fetchData = () =>
    readCategory(match.params.slug).then((res) => {
      console.log("Categoty:", res);
      console.log("RES -->", res.data.title);

      setCategory(res.data);
    });
  const handleCategoryChange = (e) => {
    setFormValue(e.target.value);
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form value", formValue);
    editCategory(match.params.slug, formValue)
      .then((res) => history.push("/category"))
      .catch((err) => console.log(err.message));
  };

  const editCategoryForm = () => (
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
            // placeholder="Enter Category Name."
            className="p-2"
            value={match.params.slug}
            name={formValue}
            onChange={handleCategoryChange}
          />
        </Form.Item>
        <Button
          onClick={handleEditFormSubmit}
          type="primary"
          size="large"
          className=" my-4"
        >
          Add Category
        </Button>
      </Form>
    </Card>
  );

  console.log("Match", match);
  return (
    <>
      {/* <h1>Edit category : {match.params.slug} </h1> */}
      <br />
      <div>{editCategoryForm()}</div>
      {/* <CategoryForm /> */}
    </>
  );
};

export default EditCategory;
