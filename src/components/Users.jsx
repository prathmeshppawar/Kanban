import React from 'react'
import Card from './Card';

const Users = ({ tickets, users }) => {
    
  return (
    <div>
      <section id="pricing" className="bg-white">
        <div className="container">
          <div className="spacer spacer-line border-primary">&nbsp;</div>
          <div className="spacer">&nbsp;</div>
          <div className="d-flex flex-row">
            {users.map((user) => (
              <>
                <div className="col mx-1">
                  <div className="pricing-table">
                    <div className="pricing-table-price text-center bg-info">
                      <p className="title-font">
                        <span className="pricing-period text-white">
                          {user.name}
                        </span>
                      </p>
                    </div>
                    <div className="pricing-table-content">
                      {tickets.map((ticket) =>
                        ticket.userId === user.id ? (
                          <Card ticket={ticket} key={ticket.id} />
                        ) : (
                          <></>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users
