import React, { useState } from "react";


function BillGenerator() {
  const [formData, setFormData] = useState({
    clientName: "",
    mobileNumber: "",
    description: "",
    billingDate: "",
    address: "",
    item: "",
    quantity: "",
    billingPrice: "",
    totalPrice: "",
  });

  const [showFields, setShowFields] = useState(false);

  const handleAddField = (event) => {
    event.preventDefault();
    setShowFields(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  return (
    <div className="container my-2 w-50 text-light">
      <form className="row g-3 p-3">
        <div className="col-md-6">
          <label htmlFor="clientName" className="form-label">
            Client Name
          </label>
          <input
            type="text"
            className="form-control"
            id="clientName"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="billingDate" className="form-label">
            Billing Date
          </label>
          <input
            type="date"
            className="form-control"
            id="billingDate"
            name="billingDate"
            value={formData.billingDate}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button
            type="button"
            className="addField"
            onClick={handleAddField}
          >
          + Add Field
          </button>
        </div>

        {showFields && (
          <>
            <div className="col-12">
              <label htmlFor="item" className="form-label">
                Item
              </label>
              <input
                type="text"
                className="form-control"
                id="item"
                name="item"
                value={formData.item}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="billingPrice" className="form-label">
                Billing Price
              </label>
              <div className="input-group">
                <div className="input-group-text">Rs.</div>
                <input
                  type="text"
                  className="form-control"
                  id="billingPrice"
                  name="billingPrice"
                  value={formData.billingPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-5">
              <label htmlFor="totalPrice" className="form-label">
                Total Price
              </label>
              <div className="input-group">
                <div className="input-group-text">Rs.</div>
                <input
                  type="text"
                  className="form-control"
                  id="totalPrice"
                  name="totalPrice"
                  value={formData.totalPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}

        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            
          >
            Download Invoice
          </button>
        </div>
      </form>
    </div>
  );
}

export default BillGenerator;
