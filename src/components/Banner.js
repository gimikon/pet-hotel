import React from "react";
import { Link } from "react-router-dom";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
