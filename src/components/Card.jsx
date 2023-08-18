import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  min-height: 100px;
  min-width: 100%;
  align-items: center;
  border: 1px solid #bababa;
  border-radius: 5px;
  position: relative;
  margin-bottom: 15px;
`;

const Header = styled.div`
  display: flex;
  font-size: medium;
  color: #8a8a8a;
  flex-direction: row;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  min-width:90%;
  justify-content: space-between;
`;

const Id = styled.div`
font-size: small;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.div`
  font-size: small;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2%;
  padding-right: 2%;
  width: 90%;
`;

const Card = ({ticket, grouping}) => {
  return (
    <>
      <Container>
        <Header>
          <Id>{ticket.id}</Id>
          <Icon><AccountCircleIcon/></Icon>
        </Header>
        <Title>{ticket.title}</Title>
      </Container>
    </>
  );
};

export default Card;
