import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  var x = 0;
  function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("accountType");
    localStorage.removeItem("accountStatus");
    navigate("/");
    window.location.reload();
    document.getElementById("NavCheck").style.top = "-100%";
  }

  function hideNavBar() {
    document.getElementById("NavCheck").style.top = "-100%";
    x = 0;
  }

  function showNavBar() {
    document.getElementById("NavCheck").style.top = "80px";
    x = 1;
  }

  function toggleNavBar() {
    
      x === 0 ? showNavBar() : hideNavBar();
    
  }

  console.log(localStorage.getItem("userName"));
  var userName = JSON.parse(localStorage.getItem("userName"));
  var accountType = JSON.parse(localStorage.getItem("accountType"));
  var accountStatus = JSON.parse(localStorage.getItem("accountStatus"));

  return (
    <div>
      <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-body pr-3" href="Greet.js">
                <i className="fa fa-phone-alt mr-2"></i>+92-3315069961
              </a>
              <span className="text-body">|</span>
              <a className="text-body px-3" href="Greet.js">
                <i className="fa fa-envelope mr-2"></i>F2019-297@BNU.EDU.PK
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <a className="text-body px-3" href="Greet.js">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-body px-3" href="Greet.js">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-body px-3" href="Greet.js">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-body px-3" href="Greet.js">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="text-body pl-3" href="Greet.js">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <link rel="stylesheet" href="style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" onClick={toggleNavBar} className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <label className="logo">Move</label>
          <ul id="NavCheck">
            <li>
              {" "}
              {accountType !== "Admin" ? (
                <Link onClick={hideNavBar} to="/" className="nav-item nav-link active">
                  Home
                </Link>
              ) : null}
            </li>

            <li>
              {accountType !== "Admin" ? (
                <Link onClick={hideNavBar} to="/about" className="nav-item nav-link active">
                  About
                </Link>
              ) : null}
            </li>

            <li>
              {accountType !== "Admin" ? (
                <Link onClick={hideNavBar} to="/services" className="nav-item nav-link active">
                  Services
                </Link>
              ) : null}
            </li>

            <li>
              {accountType !== "Admin" ? (
                <Link onClick={hideNavBar} to="/listings" className="nav-item nav-link active">
                  Car Listings
                </Link>
              ) : null}
            </li>

            <li>
              {accountType !== "Admin" ? (
                <Link onClick={hideNavBar} to="/Contact" className="nav-item nav-link active">
                  Contact
                </Link>
              ) : null}
            </li>

            <li>
              {userName === null ? (
                <Link onClick={hideNavBar} to="/signin" className="nav-item nav-link active">
                  Sign In
                </Link>
              ) : (
                <div>
                  <div className="dropdown nav-item nav-link active">
                    <Link className="dropbtn">
                      {userName}
                      <i style={{ paddingLeft: "10px" }} className="fa fa-caret-down"></i>
                    </Link>
                    <div className="dropdown-content">
                      {userName !== null ? (
                        accountType === "Admin" ? (
                          <Link onClick={hideNavBar} to="/adminDashboard">
                            Admin Dashboard
                          </Link>
                        ) : null
                      ) : null}
                      {userName !== null ? (
                        <Link onClick={hideNavBar} to="/myProfile">
                          My Profile
                        </Link>
                      ) : null}
                      {userName !== null ? (
                        accountType === "Lessor" && accountStatus === true ? (
                          <Link onClick={hideNavBar} to="/myListings">
                            My Listings
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessor" ? (
                          <Link onClick={hideNavBar} to="/lessorDashboard">
                            My Dashboard
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessor" ? (
                          <Link onClick={hideNavBar} to="/lessorWallet">
                            My Wallet
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessee" ? (
                          <Link onClick={hideNavBar} to="/lesseeWallet">
                            My Wallet
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessee" ? (
                          <Link onClick={hideNavBar} to="/lesseeDashboard">
                            My Dashboard
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessor" && accountStatus === true ? (
                          <Link onClick={hideNavBar} to="/addListings">
                            List a Car
                          </Link>
                        ) : null
                      ) : null}

                      {userName !== null ? (
                        accountType === "Lessee" && accountStatus === true ? (
                          <Link onClick={hideNavBar} to="/myBookings">
                            My Bookings
                          </Link>
                        ) : null
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              {userName !== null ? (
                <Link onClick={logout} className="nav-item nav-link active">
                  Logout
                </Link>
              ) : null}
            </li>
          </ul>
        </nav>
        <section />
      </div>
    </div>
  );
};

export default NavBar;
