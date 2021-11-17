import React, { useState, useEffect } from "react";
import { readCategory, editCategory } from "../../functions/categories";
// import CategoryForm from "./CategoryForm";
import { Card, Form, Button, Input } from /* Upload, message*/ "antd";
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
      setFormValue(res.data.title);
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
        <input
          class="ant-input p-2"
          type="text"
          value={formValue}
          onChange={handleCategoryChange}
        />

        <Button
          onClick={handleEditFormSubmit}
          type="primary"
          size="large"
          className=" my-4"
        >
          Edit Category
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
