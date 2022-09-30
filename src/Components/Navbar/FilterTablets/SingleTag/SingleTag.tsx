import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../../../hook";
import { filteredJobsAfterRemoveTag } from "../../../../reducers/jobs";
import { resetTags } from "../../../../reducers/tags";

interface ISingleTagProps {
  tagName: string;
}

export const SingleTag: FC<ISingleTagProps> = (props) => {
  const { tagName } = props;

  const dispatch = useAppDispatch();

  const removeTagHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    dispatch(filteredJobsAfterRemoveTag(e.target.dataset.tag as string));
    dispatch(resetTags(e.target.dataset.tag as string));
  };

  return (
    <SingleTagContainer>
      <span>{tagName}</span>
      <div onClick={removeTagHandler} data-tag={tagName}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ color: "#fff", pointerEvents: "none" }}
        />
      </div>
    </SingleTagContainer>
  );
};

const SingleTagContainer = styled.div`
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  border-radius: 3px;
  background-color: #c1f3f3;
  margin-right: 10px;
  margin-bottom: 10px;

  span {
    font-size: 11px;
    width: 100%;
    margin-right: 3px;
    line-height: 16px;
    padding: 0.3rem;
    color: #5ea4a4;
    font-weight: 700;
  }
  
  div {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: #5ea4a4;
    padding: 0.3rem;
    transition: all 0.2s linear;

    &:hover {
      background-color: hsl(180, 14%, 20%);
    }
  }
`;
