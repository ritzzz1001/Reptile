import React, { useState, useEffect } from "react";
import { searchTrainer, deleteTrainer } from "../api";
import { useLocation, Link, useNavigate } from "react-router-dom";

export const TrainerList = () => {
  const [trainers, setTrainers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const filters = Object.fromEntries(new URLSearchParams(location.search));

  const loadData = async () => {
    try {
      const response = await searchTrainer(filters);
      setTrainers(response);
    } catch (error) {
      console.error("Data is not loading...", error);
    }
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Delete trainer data?")) {
        await deleteTrainer(id);
        alert("Trainer data successfully deleted");
        loadData();
      }
    } catch (error) {
      console.log("Data not deleted", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "600", color: "#2d6a4f" }}>
        Trainers List
      </h2>

      <div className="card shadow-sm rounded-4 p-3" style={{ background: "#f8f9fa" }}>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle mb-0">
            <thead className="table-success text-center">
              <tr>
                <th>Name</th>
                <th>Place</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Technology 1</th>
                <th>Technology 2</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {trainers.map((t) => (
                <tr key={t.id}>
                  <td>{t.name}</td>
                  <td>{t.place}</td>
                  <td>{t.phone}</td>
                  <td>{t.email}</td>
                  <td>{t.technology1}</td>
                  <td>{t.technology2}</td>
                  <td>
                    <Link to={`/update/${t.id}`}>
                      <button className="btn btn-success btn-sm me-2">Edit</button>
                    </Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(t.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
