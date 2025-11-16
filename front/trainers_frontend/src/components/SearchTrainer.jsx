import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchTrainer = () => {
  const [filter, setFilter] = useState({
    name: "",
    place: "",
    technology: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(filter).toString();
    navigate(`/list?${params}`);
  };

  return (
    <div className="container mt-4">

      {/* Header */}
      <h2 className="text-center mb-4" style={{ fontWeight: "600", color: "#2d6a4f" }}>
        Trainer Search
      </h2>

      {/* Modern Filter Section */}
      <div
        className="p-4 rounded shadow-sm"
        style={{ background: "#f8f9fa" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="row g-3">

            {/* Name */}
            <div className="col-md-4">
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Trainer Name"
                value={filter.name}
                onChange={handleChange}
              />
            </div>

            {/* Place */}
            <div className="col-md-4">
              <input
                type="text"
                name="place"
                className="form-control form-control-lg"
                placeholder="Place"
                value={filter.place}
                onChange={handleChange}
              />
            </div>

            {/* Technology */}
            <div className="col-md-4">
              <input
                type="text"
                name="technology"
                className="form-control form-control-lg"
                placeholder="Technology"
                value={filter.technology}
                onChange={handleChange}
              />
            </div>

            {/* Button Row */}
            <div className="col-12 mt-4 text-center">
              <button
                type="submit"
                className="btn btn-success px-5 py-2"
                style={{ fontSize: "1.1rem" }}
              >
                Search
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};
