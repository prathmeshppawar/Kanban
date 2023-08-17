import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Status from "./components/Status";
import axios from "axios";
import Users from "./components/Users";
import Priority from "./components/Priority";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState(
    JSON.parse(localStorage.getItem("group"))
  );
  const [ordering, setOrdering] = useState(
    JSON.parse(localStorage.getItem("order"))
  );
  const [users, setUsers] = useState([]);
  const getTickets = async () => {
    try {
      const res = await axios.get(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      setTickets(res.data.tickets);
      setUsers(res.data.users);
      setOrder();
    } catch (err) {}
  };
  const setOrder = () => {
    if (ordering === "Priority") {
      setTickets((prev) =>
        [...prev].sort((a, b) => {
          return b.priority - a.priority;
        })
      );
    } else if (ordering === "Title") {
      setTickets((prev) =>
        [...prev].sort((a, b) => {
          return a.title.localeCompare(b.title);
        })
      );
    }
  };
  useEffect(() => {
    getTickets();
  }, []);
  useEffect(() => {
    localStorage.setItem("group", JSON.stringify(grouping));
  }, [grouping]);
  useEffect(() => {
    setOrder();
    localStorage.setItem("order", JSON.stringify(ordering));
  }, [ordering]);
  return (
    <div>
      <Navbar grouping={grouping} ordering={ordering} setOrdering={setOrdering} setGrouping={setGrouping} />
      {grouping === "Status" || !grouping ? (
        <Status tickets={tickets} />
      ) : (
        <></>
      )}
      {grouping === "Users" ? <Users tickets={tickets} users={users} /> : <></>}
      {grouping === "Priority" ? <Priority tickets={tickets} /> : <></>}
    </div>
  );
}

export default App;
