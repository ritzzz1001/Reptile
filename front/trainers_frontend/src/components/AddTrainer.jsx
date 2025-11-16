import React, { useState } from 'react';
import { addTrainer } from '../api';
import { useNavigate } from 'react-router-dom';

export const AddTrainer = () => {
  const navigate = useNavigate();

  const [trainer, setTrainer] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    technology1: "",
    technology2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainer((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTrainer(trainer);
      alert("Trainer added successfully!");
      navigate("/list");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save trainer.");
    }
  };

  return (
    <div className="container mt-4 p-4 shadow rounded" style={{ maxWidth: "500px", background: "#f8f9fa" }}>
      <h2 className="text-center mb-4" style={{ fontWeight: "600", color: "#2d6a4f" }}>Add Trainer</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-control"
            value={trainer.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            name="place"
            type="text"
            placeholder="Place"
            className="form-control"
            value={trainer.place}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            className="form-control"
            value={trainer.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="form-control"
            value={trainer.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            name="technology1"
            type="text"
            placeholder="Technology 1"
            className="form-control"
            value={trainer.technology1}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            name="technology2"
            type="text"
            placeholder="Technology 2"
            className="form-control"
            value={trainer.technology2}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Save Trainer
        </button>
      </form>
    </div>
  );
};
