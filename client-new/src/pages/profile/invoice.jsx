import React from 'react'

const Invoice = ({posts}) => {
  return (
    <div className="card p-3 mid-card">
    <p>Invoice & Payments</p>

    <div className="horizontal-tabs">
    
      <div className="tab-content">
        <div
          role="tabpanel"
          className="tab-pane active"
          id="booked_media"
        >
    <h5> No data </h5>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoice
