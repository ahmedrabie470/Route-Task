import React, { useState } from "react";
import "./user.css";
import Chart from "chart.js/auto";
import data from "../../data/customers";
import { useNavigate } from "react-router-dom";
export default function Users() {
  let [search, setSearch] = useState("");
  let navigate = useNavigate();
  
  // Create an array to hold the combined data
  let combinedData = [];

  // Loop through customers
  data.customers.forEach((customer) => {
    // Find transactions for the current customer
    let customerTransactions = data.transactions.filter(
      (transaction) => transaction.customer_id === customer.id
    );
    // Map each transaction to include customer details
    customerTransactions = customerTransactions.map((transaction) => ({
      id: transaction.id,
      customer_id: transaction.customer_id,
      customer_name: customer.name,
      date: transaction.date,
      amount: transaction.amount,
    }));
    // Push all transactions of current customer into combinedData
    combinedData.push(...customerTransactions);
  });

  const navigateToDashboard = (customerId) => {
    navigate(`/dashboard/${customerId}`); // Navigate to Dashboard with customer_id
  };
  return (
    <>
      <div className="container users text-center w-50   mt-5  rounded-3">
        <h2 className="text-white">All Users Information</h2>
        <div className="row ">
          <div className="d-flex mt-5 p-0 justify-content-between d-flex align-items-center">
            <div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="form-control rounded-2 px-3 mx-0 shadow-sm  "
                placeholder="Search by name "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container users text-center text-center w-50 bg-white  mt-5 shadow-sm rounded-3">
        <div className="row ">
          <div className="col-md-2 my-3  ">
            <span className=" py-2  "> ID</span>
          </div>
          <div className="col-md-2 my-3">
            <span className=" py-2  py-2">customer_id</span>
          </div>
          <div className="col-md-3 my-3">
            <span className=" py-2  py-2">customer_name</span>
          </div>
          <div className="col-md-3 my-3">
            <span className=" py-2  py-2">date</span>
          </div>
          <div className="col-md-2 my-3">
            <span className=" py-2  py-2">amount</span>
          </div>

          <hr className="mt-2" />
        </div>

        {combinedData
          .filter((customer) => {
            const customerIdMatch = customer.amount
              .toString()
              .toLowerCase()
              .includes(search.toLowerCase());
            const customerNameMatch = customer.customer_name
              .toLowerCase()
              .includes(search.toLowerCase());
            return customerIdMatch || customerNameMatch;
          })
          .map((customer) => (
              <div
                className="row py-3 border-bottom border-1  "
                style={{ cursor: "pointer" }}
                key={customer.id}
                onClick={() => navigateToDashboard(customer.customer_id)}
              >
                <div className="col-md-2 ">
                  <span className=" py-2"> {customer.id}</span>
                </div>
                <div className="col-md-2">
                  <span className=" py-2">{customer.customer_id}</span>
                </div>

                <div className="col-md-3 ">
                  <span className=" py-2"> {customer.customer_name}</span>
                </div>
                <div className="col-md-3 ">
                  <span className=" py-2"> {customer.date}</span>
                </div>
                <div className="col-md-2 ">
                  <span className=" py-2"> {customer.amount}</span>
                </div>
              </div>
          ))}
      </div>
    </>
  );
}
