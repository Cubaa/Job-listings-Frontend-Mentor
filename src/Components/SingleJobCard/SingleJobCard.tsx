import React, { useRef } from "react";
import styled from "styled-components";
import { ISingleJob } from "../../Types/jobType";
import { useAppDispatch } from "../../hook";

import { setTags } from "../../reducers/tags";
import { filteredJobsAfterAddTag } from "../../reducers/jobs";

interface ICard {
  featured: boolean;
}

export const SingleJobCard: React.FC<ISingleJob> = (props) => {
  const dispatch = useAppDispatch();
  const singleCardWrapper = useRef<HTMLDivElement>(null);

  const allJobTags: string[] = [
    props.role,
    props.level,
    ...props.tools,
    ...props.languages,
  ];

  const getTagHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return;
    const tagName = e.target.dataset.tag as string;

    dispatch(setTags(tagName));
    dispatch(filteredJobsAfterAddTag(tagName));
  };

  return (
    <>
      <SingleJobCardContainer ref={singleCardWrapper} featured={props.featured}>
        <MaincardInfoWrapper>
          <CompanyLogoContainer className="company-logo">
            <CompanyLogoImageWrapper>
              <img src={props.logo} alt={props.company + " logo"} />
            </CompanyLogoImageWrapper>
          </CompanyLogoContainer>
          <MainJobInfoContainer className="job-info">
            <CompanyNameWrapper>
              <span>{props.company}</span>
              {props.new && (
                <div>
                  <span>NEW!</span>
                </div>
              )}
              {props.featured && (
                <div>
                  <span>FEATURED</span>
                </div>
              )}
            </CompanyNameWrapper>
            <JobPositionWrapper>
              <span>{props.position}</span>
            </JobPositionWrapper>
            <OtherInfoAboutJobWrapper>
              <OtherInfoAboutJobContainer>
                <div>
                  <span>{props.postedAt}</span>
                </div>
                <Dot></Dot>
                <div>
                  <span>{props.contract}</span>
                </div>
                <Dot></Dot>
                <div>
                  <span>{props.location}</span>
                </div>
              </OtherInfoAboutJobContainer>
            </OtherInfoAboutJobWrapper>
          </MainJobInfoContainer>
        </MaincardInfoWrapper>
        <TagsContainer>
          <TagsWrapper className="job-tags">
            {allJobTags.map((tag: string, index: number) => {
              return (
                <span onClick={getTagHandler} key={index} data-tag={tag}>
                  {tag}
                </span>
              );
            })}
          </TagsWrapper>
        </TagsContainer>
      </SingleJobCardContainer>
    </>
  );
};

const SingleJobCardContainer = styled.div<ICard>`
  display: flex;
  min-width: 10%;
  min-height: 100px;
  background-color: #fff;
  margin: 20px 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-left: ${(props) => (props.featured ? "4px solid #5EA4A4" : "0px")};

  @media (max-width: 995px) {
    padding: 1rem;
    flex-direction: column;
    min-width: 10%;
  }
`;

const CompanyLogoContainer = styled.div`
  height: 100%;
  width: 30%;
`;

const MainJobInfoContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 995px) {
    width: 100%;
  }
`;

const TagsContainer = styled.div`
  min-width: 50%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  @media (max-width: 995px) {
    padding-top: 10px;
    padding-left: 0px;
  }
`;

const CompanyLogoImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;

  min-width: 10%;
  height: 100%;
  img {
    width: 60%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: 995px) {
    justify-content: flex-start;
  }
  @media (max-width: 486px) {
    padding-bottom: 10px;
  }
  @media (max-width: 405px) {
    img {
      width: 80%;
    }
  }
`;

const CompanyNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  height: 33.33%;

  span {
    color: #5ea4a4;
    font-weight: 700;
    margin-right: 10px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    > span {
      color: #fff;
      padding: 5px 10px;
      font-size: 9px;
      font-weight: 700;
      margin: 0;
    }
  }
  div:nth-of-type(1) {
    background-color: #5ea4a4;
    margin-right: 10px;
  }
  div:nth-of-type(2) {
    background-color: hsl(180, 14%, 20%);
  }
`;
const JobPositionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    color: hsl(180, 14%, 20%);
    font-weight: 700;
    font-size: 14px;
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
      color: #5ea4a4;
    }
  }
  @media (max-width: 995px) {
    span {
      margin: 10px 0 5px 0;
    }
  }
`;
const OtherInfoAboutJobWrapper = styled.div`
  min-width: 10%;
  height: 33.33%;
  display: flex;
  align-items: flex-start;
`;

const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 10px;
`;

const OtherInfoAboutJobContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  span {
    font-size: 9px;
    font-weight: 500;
    color: hsl(180, 8%, 52%);
  }
`;

const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  span {
    display: flex;
    background-color: hsl(180, 52%, 96%);
    padding: 5px 10px;
    font-size: 11px;
    margin: 5px 5px;
    color: #5ea4a4;
    font-weight: 700;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: #5ea4a4;
      color: #fff;
    }
  }
`;

const MaincardInfoWrapper = styled.div`
  min-width: 10%;
  display: flex;
  @media (max-width: 486px) {
    flex-direction: column;
  }
`;
