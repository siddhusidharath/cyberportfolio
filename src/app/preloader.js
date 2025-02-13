"use client";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec tak loader show karega
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <h2 className="cyber-text">Initializing Secure Connection...</h2>
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Preloader;
