import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <>
<nav class="navbar navbar-expand-lg  main">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Route Task</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" to="/users">Users</Link>
      </div>
    </div>
  </div>
</nav>

     
    </>
  );
}
