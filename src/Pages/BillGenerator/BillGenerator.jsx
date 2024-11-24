import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddField = (event) => {
    event.preventDefault();
    setShowFields(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      if (name === "quantity" || name === "billingPrice") {
        const quantity = parseFloat(updatedData.quantity) || 0;
        const billingPrice = parseFloat(updatedData.billingPrice) || 0;
        updatedData.totalPrice = (quantity * billingPrice).toFixed(2);
      }

      return updatedData;
    });
  };

  const handleDispatch = () => {
    dispatch(addUser(formData));

    toast.success("Bill Submitted Successfully!", {
      position: "top-right",
      autoClose: 1000,
    });

    setFormData({
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

    setTimeout(() => {
      navigate("/sidebar/customerlist");
    }, 1200);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();

    doc.text("Invoice", 105, 20, null, null, "center");
    doc.text(`Client Name: ${formData.clientName}`, 20, 40);
    doc.text(`Mobile Number: ${formData.mobileNumber}`, 20, 50);
    doc.text(`Billing Date: ${formData.billingDate}`, 20, 60);
    doc.text(`Description: ${formData.description}`, 20, 70);
    doc.text(`Address: ${formData.address}`, 20, 80);

    doc.text("Item Details", 20, 100);
    doc.text(`Item: ${formData.item}`, 20, 110);
    doc.text(`Quantity: ${formData.quantity}`, 20, 120);
    doc.text(`Billing Price: Rs. ${formData.billingPrice}`, 20, 130);
    doc.text(`Total Price: Rs. ${formData.totalPrice}`, 20, 140);

    doc.save(`${formData.clientName}_Invoice.pdf`);
  };

  return (
    <div className="container my-2 w-100 text-light">
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
          <button type="button" className="addField" onClick={handleAddField}>
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
                type="number"
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
                  type="number"
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
                  readOnly
                />
              </div>
            </div>
          </>
        )}

        <div className="col-12 d-flex gap-3 mt-4">
          <button type="button" className="billButton" onClick={handleDispatch}>
            Submit
          </button>
          <button
            type="button"
            className="billButton"
            onClick={generateInvoice}
          >
            Download Invoice
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
}

export default BillGenerator;
