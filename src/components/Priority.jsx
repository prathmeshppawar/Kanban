import React from 'react'
import Card from './Card';

const Priority = ({ tickets }) => {
    const priority = ["No Priority", "Low", "Medium", "High", "Urgent"];
    let i = 0;
  return (
    <div>
      <section id="pricing" className="bg-white">
        <div className="container">
          <div className="spacer spacer-line border-primary">&nbsp;</div>
          <div className="spacer">&nbsp;</div>
          <div className="d-flex flex-row">
            {priority.map((priority) => (
              <>
                <div className="col mx-1">
                  <div className="pricing-table">
                    <div className="pricing-table-price text-center bg-info">
                      <p className="title-font">
                        <span className="pricing-period text-white">
                          {priority}
                        </span>
                      </p>
                    </div>
                    <div className="pricing-table-content">
                      {tickets.map((ticket) =>
                        ticket.priority === i ? (
                          <Card ticket={ticket} key={ticket.id}/>
                        ) : (
                          <></>
                        )
                                )}
                                <div className="d-none">
                                {i++}
                                </div>
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

export default Priority
