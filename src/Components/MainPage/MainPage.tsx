import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { JobListings } from "./JobListings/JobListings";

export const MainPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <JobListings />
    </>
  );
};
