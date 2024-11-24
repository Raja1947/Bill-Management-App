import React from "react";
import { Table } from "react-bootstrap";

function CustomerList() {
  return (
    <div className="container mt-5">
      <div className="table-responsive">
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
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default CustomerList;
