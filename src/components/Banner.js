import React from "react";
import { Link } from "react-router-dom";
import Button from './Button'

export default function Banner({ children, title, subtitle,button }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <button className="btn-primary">{button}</button>
    </div>
  );
}
