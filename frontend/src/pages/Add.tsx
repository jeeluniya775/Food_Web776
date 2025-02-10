import React, { useState, ChangeEvent, FormEvent } from "react";
import Main_header from "../components/Main_header";
import Footer from "../parts/Fotter";

interface RecipeFormData {
  name: string;
  category: string;
  preparationTime: string;
  servings: string;
  ingredients: string;
  description: string;
  madeBy: string;
  image: File | null;
}

const Add: React.FC = () => {
  const [formData, setFormData] = useState<RecipeFormData>({
    name: "",
    category: "",
    preparationTime: "",
    servings: "",
    ingredients: "",
    description: "",
    madeBy: "",
    image: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch("http://localhost:5001/recipes/create", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Recipe added successfully!");
        setFormData({
          name: "",
          category: "",
          preparationTime: "",
          servings: "",
          ingredients: "",
          description: "",
          madeBy: "",
          image: null,
        });
      } else {
        alert("Failed to add recipe.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Main_header />
      <div className="container">
        <h2 className="title">Fill Up Details Step by Step</h2>
        <div className="form-card">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name of Recipe</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                className="form-control"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="dessert">Dessert</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="snack">Snack</option>
                <option value="beverage">Beverage</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preparationTime">
                Preparation Time (in minutes)
              </label>
              <input
                type="number"
                id="preparationTime"
                className="form-control"
                value={formData.preparationTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="servings">Serving People</label>
              <input
                type="number"
                id="servings"
                className="form-control"
                value={formData.servings}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ingredients">Ingredients</label>
              <textarea
                id="ingredients"
                className="form-control"
                rows={4}
                value={formData.ingredients}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                rows={5}
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="image">Upload Recipe Image</label>
              <input
                type="file"
                id="image"
                className="form-control"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="madeBy">Made By</label>
              <input
                type="text"
                id="madeBy"
                className="form-control"
                value={formData.madeBy}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Add;
