import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CustomerList() {
  const getDataSelecter = useSelector((state) => state.user);

  console.log(getDataSelecter);

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        {getDataSelecter.clientName ? (
          <Table bordered hover responsive>
            <thead className="bg-danger" style={{ color: "red" }}>
              <tr>
                <th className="table_heading">Client Name</th>
                <th className="table_heading">Product Quantity</th>
                <th className="table_heading">Billing Date</th>
                <th className="table_heading">Contact Details</th>
                <th className="table_heading">Address</th>
                <th className="table_heading">Billing Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{getDataSelecter.clientName}</td>
                <td>{getDataSelecter.quantity}</td>
                <td>{getDataSelecter.billingDate}</td>
                <td>{getDataSelecter.mobileNumber}</td>
                <td>{getDataSelecter.address}</td>
                <td>Rs. {getDataSelecter.billingPrice}</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <div className="no-data-message">
            <p>Please generate the bill to see the client list.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomerList;
