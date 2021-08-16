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

    //making req to BE to create category
    createCategory(formData)
      .then((res) => {
        // alert("CATEGORY CREATED");
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };

  //   const handleCategoryFormEditSubmit = (e, values) => {
  //     e.preventDefault();
  //     console.log(formData);

  //     //making req to BE to create category
  //     editCategory(match.params.slug, formData)
  //       .then((res) => {
  //         // alert("CATEGORY CREATED");
  //         history.pushState("/category");
  //       })
  //       .catch((err) => console.log(err.message));
  //   };

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

  return (
    <>
      <h1 className="flex items-center font-bold text-lg py-1.5">
        <RiLayout2Line />
        &nbsp;Category
      </h1>
      <CategoryForm
        handleCategoryChange={handleCategoryChange}
        handleCategoryFormSubmit={handleCategoryFormSubmit}
        // handleCategoryFormEditSubmit={handleCategoryFormEditSubmit}
      />
      <CategoryList
        categoryList={categoryList}
        handleCategoryDelete={handleCategoryDelete}
      />
    </>
  );
};

export default Category;
