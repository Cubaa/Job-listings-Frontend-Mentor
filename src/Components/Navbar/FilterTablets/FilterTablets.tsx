import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../hook";
import { SingleTag } from "./SingleTag/SingleTag";

const FilterTabletsContainer = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  min-height: 50px;
  background-color: hsl(180, 31%, 95%);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 0.5rem;
  padding-bottom: 0;
`;

const TagsContainer = styled.div`
  min-width: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

export const FilterTablets: React.FC = () => {
  const tags = useAppSelector((state) => state.tags.tags);

  return (
    <FilterTabletsContainer>
      <TagsContainer>
        {tags.map((tag: string, index: number) => {
          return <SingleTag key={index} tagName={tag} />;
        })}
      </TagsContainer>
    </FilterTabletsContainer>
  );
};
