import React from "react";
import Classes from "./PageHeader.module.css";

export const PageHeader = ({ title }) => {
  return (
    <div className={Classes.Container}>
      <hr></hr>
      <h1>{title}</h1>
    </div>
  );
};

export default PageHeader;
