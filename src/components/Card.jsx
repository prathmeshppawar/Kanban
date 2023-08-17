import React from "react";

const Card = ({ticket}) => {
  return (
    <>
        <strong>
          <div className="card mb-2" styles="width: 18rem;">
            <div className="card-body">
              <h5 className="card-title">{ticket.id}</h5>
              <p className="card-subtitle mb-2 text-muted">{ticket.title}</p>
              <p className="card-subtitle mb-2 text-muted">Priority - {ticket.priority}</p>
            </div>
          </div>
        </strong>
    </>
  );
};

export default Card;
