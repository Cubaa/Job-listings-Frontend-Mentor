import React, { FC, useRef } from "react";
import styled from "styled-components";
import { SingleJobCard } from "../../SingleJobCard/SingleJobCard";
import { ISingleJob } from "../../../interfaces/job.interface";
import { useAppSelector } from "../../../hook";

export const JobListings: FC = () => {
  const jobs = useAppSelector<ISingleJob[]>((state) => state.jobs.jobs);

  const jobsList = useRef<(HTMLDivElement | null)[]>([]);
  const jobListingsWrapper = useRef<HTMLDivElement | null>(null);

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
