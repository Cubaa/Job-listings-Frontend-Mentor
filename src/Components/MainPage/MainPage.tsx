import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";
import { JobListings } from "./JobListings/JobListings";

export const MainPage: FC = () => {
  return (
    <>
      <Navbar />
      <JobListings />
    </>
  );
};
