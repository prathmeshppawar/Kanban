import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  height: 7vh;
  align-items: center;
  justify-content: flex-start;
`;
const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownMenu = styled.div`
  padding: 12px;
  background-color: white;
  border: 1px solid #bababa;
  border-radius: 5px;
  width: 130px;
  position: absolute;
  right: 20;
  z-index: 1;
`;

const DropdownMenu2 = styled.div`
  padding: 12px;
  background-color: white;
  border: 1px solid #bababa;
  border-radius: 5px;
  width: 130px;
  position: absolute;
  left: 5%;
  z-index: 1;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;

  &:hover + & {
    display: inline-block;
  }
`;

const Li = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = ({ grouping, ordering, setGrouping, setOrdering }) => {
  const [menuVisible1, setMenuVisible1] = useState(false);
  const [menuVisible2, setMenuVisible2] = useState(false);
  return (
      <Container>
        <Wrapper>
          <DropdownContainer
            onMouseEnter={() => setMenuVisible1(true)}
            onMouseLeave={() => setMenuVisible1(false)}
          >
            <DropdownButton>Grouping</DropdownButton>
            {menuVisible1 && (
              <DropdownMenu>
                <Ul>
                  <Li>
                    <div onClick={() => setGrouping("Status")}>Status</div>
                    <div className="mx-2">
                      {grouping === "Status" ? <DoneIcon /> : <></>}
                    </div>
                  </Li>
                  <Li>
                    <div onClick={() => setGrouping("Users")}>Users</div>
                    <div className="mx-2">
                      {grouping === "Users" ? <DoneIcon /> : <></>}
                    </div>
                  </Li>
                  <Li>
                    <div onClick={() => setGrouping("Priority")}>Priority</div>
                    <div className="mx-2">
                      {grouping === "Priority" ? <DoneIcon /> : <></>}
                    </div>
                  </Li>
                </Ul>
              </DropdownMenu>
            )}
          </DropdownContainer>
          <DropdownContainer
            onMouseEnter={() => setMenuVisible2(true)}
            onMouseLeave={() => setMenuVisible2(false)}
          >
            <DropdownButton >Ordering</DropdownButton>
            {menuVisible2 && (
              <DropdownMenu2>
                <Ul>
                  <Li>
                    <div onClick={() => setOrdering("Priority")}>Priority</div>
                    <div className="mx-2">
                      {ordering === "Priority" ? <DoneIcon /> : <></>}
                    </div>
                  </Li>
                  <Li>
                    <div onClick={() => setOrdering("Title")}>Title</div>
                    <div className="mx-2">
                      {ordering === "Title" ? <DoneIcon /> : <></>}
                    </div>
                  </Li>
                </Ul>
              </DropdownMenu2>
            )}
          </DropdownContainer>
        </Wrapper>
      </Container>
  );
};

export default Navbar;
