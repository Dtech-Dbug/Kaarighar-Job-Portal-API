import React, { useState, useEffect } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import {
  createCategory,
  getAllCategories,
  deleteCategory,
  // editCategory,
} from "../../functions/categories";

import { RiLayout2Line } from "react-icons/ri";

const Category = ({ match, history }) => {
  const [formData, setFormData] = useState("");
  const [file, setFile] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () =>
    getAllCategories()
      .then((categories) => {
        setCategoryList(categories.data);
      })
      .catch((err) => alert(err.message));

  const handleCategoryChange = (e) => {
    setFormData(e.target.value);
  };

  const handleCategoryFormSubmit = (e, values) => {
    e.preventDefault();

    let formValues = {
      title: formData,
      file: file,
    };
    console.log("DATA->", formValues);

    //making req to BE to create category
    createCategory(formValues)
      .then((res) => {
        alert("CATEGORY CREATED");
      })
      .catch((err) => console.log(err.message));
  };

  const handleCategoryDelete = (slug) => {
    let confirm = window.confirm("Are you sure , you want to delete?");
    if (confirm) {
      deleteCategory(slug)
        .then((res) => {
          fetchCategories();
        })
        .catch((err) => alert("Error while deleting in frontend", err.message));
    }
  };

  const handleFile = (e) => {
    console.log("File->", e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <h1 className="flex items-center font-bold text-lg py-1.5">
        <RiLayout2Line />
        &nbsp;Category
      </h1>
      <CategoryForm
        handleCategoryChange={handleCategoryChange}
        handleCategoryFormSubmit={handleCategoryFormSubmit}
        setFile={setFile}
      />
      <CategoryList
        categoryList={categoryList}
        handleCategoryDelete={handleCategoryDelete}
      />
    </>
  );
};

export default Category;
