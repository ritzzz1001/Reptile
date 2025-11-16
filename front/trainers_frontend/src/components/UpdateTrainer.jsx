import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTrainer, updateTrainer } from "../api";

export const UpdateTrainer = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: "",
  });

  // Load trainer by ID
  const loadTrainer = async () => {
    try {
      const data = await getTrainer(id);
      setTrainer(data);
    } catch (error) {
      console.error("Failed to load trainer", error);
    }
  };

  useEffect(() => {
    loadTrainer();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTrainer(id, trainer);
      alert("Trainer updated successfully!");
      navigate("/list");
    } catch (error) {
      console.error("Failed to update trainer", error);
    }
  };

  return (
    <div className="container mt-4 p-4 shadow rounded" style={{ maxWidth: "500px", background: "#f8f9fa" }}>
      <h2 className="text-center mb-4">Update Trainer</h2>
      <form onSubmit={handleSubmit}>
        {["name", "place", "phone", "email", "technology1", "technology2"].map((field) => (
          <div className="mb-3" key={field}>
            <input
              name={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="form-control"
              value={trainer[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success w-100">
          Update Trainer
        </button>
      </form>
    </div>
  );
};
