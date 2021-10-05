import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SingleJobCard } from "../../SingleJobCard/SingleJobCard";
import { ISingleJob } from "../../../Types/jobType";
import { useAppSelector } from "../../../hook";
import { IJobListingsWidthType } from "../../../Types/jobListingsWidthType";

export const JobListings: React.FC = () => {
  const jobs = useAppSelector((state) => state.jobs.jobs);

  const jobsList = useRef<any[]>([]);
  const jobListingsWrapper = useRef<any>();
  const [jobListingsWidth, setJobListingsWidth] =
    useState<IJobListingsWidthType>({
      width: 0,
    });

  useEffect(() => {
    function handleResize() {
      setJobListingsWidth({
        width: jobListingsWrapper.current.getBoundingClientRect().width,
      });
    }
    window.addEventListener("resize", handleResize);
  }, [jobListingsWrapper, jobListingsWidth.width]);

  return (
    <>
      <JobListingsContainer ref={jobListingsWrapper}>
        {jobs.map((job: ISingleJob, index: number) => {
          return (
            <div key={index} ref={(e) => (jobsList.current[index] = e)}>
              <SingleJobCard {...job} />
            </div>
          );
        })}
      </JobListingsContainer>
    </>
  );
};

const JobListingsContainer = styled.div`
  min-height: 10vh;
  margin: 3rem 0rem 5rem 0;
  position: relative;

  @media (max-width: 995px) {
    padding: 0px 20px;
  }
`;
