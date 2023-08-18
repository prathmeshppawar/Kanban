import React from 'react'
import Card from './Card';
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Main = styled.div`
  display: flex;
  flex: 5;
  padding: 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  min-width: 100%;
  justify-content: space-between;
  align-items: space-between;
  position: relative;
`;
const Left = styled.div`
  display: flex;
  font-size: small;
  padding: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Right = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Body = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  align-items: center;
  position: relative;
`;

const Hidden = styled.div`
  display: none;
`;

const None = styled.div`
  display: none;
`;

const Count = styled.div`
  color: #8a8a8a;
  font-size: small;
  margin-left: 10px;
`;


const Priority = ({ tickets, grouping }) => {
  const priority = ["No Priority", "Low", "Medium", "High", "Urgent"];
  let i = 0;
  let count = [0, 0, 0, 0, 0];
  return (
    <Main>
      {priority.map((priority) => (
        <Container>
          <Header>
            <None>
              {tickets.map((ticket) =>
                ticket.priority === i ? (
                  <>
                    <None>{count[i] == count[i]++}</None>
                  </>
                ) : (
                  <></>
                )
              )}
            </None>
            <Left>
              {priority}
              <Count>{count[i]}</Count>
            </Left>
            <Right>
              <AddIcon />
              <MoreHorizIcon />
            </Right>
          </Header>
          <Body>
            {tickets.map((ticket) =>
              ticket.priority === i ? (
                <Card ticket={ticket} key={ticket.id} grouping={grouping} />
              ) : (
                <></>
              )
            )}
            <Hidden>{i++}</Hidden>
          </Body>
        </Container>
      ))}
    </Main>
  );
};

export default Priority
