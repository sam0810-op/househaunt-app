import React, { useEffect, useState } from "react";
import "./ownerrenter.css";

function RenterDashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch("https://househaunt-app.onrender.com/api/property/all");
      const data = await res.json();
      setProperties(data);
    };

    fetchAll();
  }, []);

  return (
    <div className="container">
      <h1 className="title">🏠 HouseHaunt</h1>
      <h2 className="subtitle">Available Properties</h2>

      <div className="property-grid">
        {properties.length === 0 ? (
          <p>No properties available.</p>
        ) : (
          properties.map((property) => (
            <div className="property-card" key={property._id}>
              <h3>{property.title}</h3>
              <p><strong>Address:</strong> {property.address || "N/A"}</p>
              <p><strong>Description:</strong> {property.description}</p>
              <p><strong>Cost:</strong> ₹{property.cost}</p>
              <p><strong>Contact:</strong> {property.contact}</p>
              <button
                className="apply-button"
                onClick={() => alert("✅ Applied successfully! The owner will contact you soon.")}
              >
                Apply Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RenterDashboard;
