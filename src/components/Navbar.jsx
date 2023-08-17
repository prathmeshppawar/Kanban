import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const Navbar = ({ grouping, ordering, setGrouping, setOrdering }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="dropdown mx-4">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Grouping
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="d-flex flex-row">
                <div
                  className="dropdown-item"
                  onClick={() => setGrouping("Status")}
                >
                  Status
                </div>
                <div className="mx-2">
                  {grouping === "Status" ? <DoneIcon /> : <></>}
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row">
                <div
                  className="dropdown-item"
                  onClick={() => setGrouping("Users")}
                >
                  Users
                </div>
                <div className="mx-2">
                  {grouping === "Users" ? <DoneIcon /> : <></>}
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row">
                <div
                  className="dropdown-item"
                  onClick={() => setGrouping("Priority")}
                >
                  Priority
                </div>
                <div className="mx-2">
                  {grouping === "Priority" ? <DoneIcon /> : <></>}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="dropdown my-2">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordering
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="d-flex flex-row">
                <div
                  className="dropdown-item"
                  onClick={() => setOrdering("Priority")}
                >
                  Priority
                </div>
                <div className="mx-2">
                  {ordering === "Priority" ? <DoneIcon /> : <></>}
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex flex-row">
                <div
                  className="dropdown-item"
                  onClick={() => setOrdering("Title")}
                >
                  Title
                </div>
                <div className="mx-2">
                  {ordering === "Title" ? <DoneIcon /> : <></>}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
