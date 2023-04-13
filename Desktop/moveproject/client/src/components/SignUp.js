import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { InputMask } from "primereact/inputmask";

const SignUp = () => {
  const sendData = () => {
    alert("hi");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let account = document.getElementById("accountType");
    let accountType = account[account.selectedIndex].value;
    let initCnic = document.getElementById("cnic").value;
    let profilePicture = document.getElementById("profile-pic").value;
    let phone = document.getElementById("phoneNumber").value;

    let phoneStrip = "";
    for (var j = 0; j < phone.length; j++) {
      if (phone[j] !== "(" && phone[j] !== ")" && phone[j] !== "+" && phone[j] !== "-") {
        phoneStrip += phone[j];
      }
    }
    let phoneNumber = parseInt(phoneStrip);
    let cnic = "";
    for (var i = 0; i < initCnic.length; i++) {
      if (initCnic[i] !== "-") {
        cnic += initCnic[i];
      }
    }
    axios
      .post("https://moveapi.onrender.com/api/auth/sign-up", {
        name,
        email,
        password,
        confirmPassword,
        accountType,
        profilePicture,
        phoneNumber,
        cnic,
      })
      .then((res) => {
        console.log(res);
        document.getElementById("errorMessage").innerText =
          "Please check your email to verify your account";
        document.getElementById("errorApi").style.visibility = "visible";
        document.getElementById("errorApi").style.position = "relative";
        document.getElementById("errorApi").style.backgroundColor = "#00ad5f";
        document.getElementById("errorApi").style.width = "100%";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("cnic").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("accountType").value = "Choose Account Type";
      })
      .catch((e) => {
        console.log(e);
        if (e.response.data.msg !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("password").style.border = "none";
          document.getElementById("confirmPassword").style.border = "none";
          document.getElementById("email").style.border = "2px solid crimson";

          document.getElementById("errorMessage").innerText = e.response.data.msg;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.name !== undefined) {
          document.getElementById("name").style.border = "2px solid crimson";
          document.getElementById("errorMessage").innerText = e.response.data.error.name;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
          document.getElementById("errorApi").style.width = "100%";
        } else if (e.response.data.error.email !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "2px solid crimson";
          document.getElementById("errorMessage").innerText = e.response.data.error.email;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.password !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "none";
          document.getElementById("password").style.border = "2px solid crimson";
          document.getElementById("errorMessage").innerText = e.response.data.error.password;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.confirmPassword !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "none";
          document.getElementById("password").style.border = "none";
          document.getElementById("confirmPassword").style.border = "2px solid crimson";

          document.getElementById("errorMessage").innerText = e.response.data.error.confirmPassword;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.cnic !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "none";
          document.getElementById("password").style.border = "none";
          document.getElementById("confirmPassword").style.border = "none";
          document.getElementById("cnic").style.border = "2px solid crimson";

          document.getElementById("errorMessage").innerText = e.response.data.error.cnic;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.phoneNumber !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "none";
          document.getElementById("password").style.border = "none";
          document.getElementById("confirmPassword").style.border = "none";
          document.getElementById("cnic").style.border = "none";
          document.getElementById("phoneNumber").style.border = "2px solid crimson";

          document.getElementById("errorMessage").innerText = e.response.data.error.phoneNumber;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        } else if (e.response.data.error.accountType !== undefined) {
          document.getElementById("name").style.border = "none";
          document.getElementById("email").style.border = "none";
          document.getElementById("password").style.border = "none";
          document.getElementById("confirmPassword").style.border = "none";
          document.getElementById("accountType").style.border = "2px solid crimson";
          document.getElementById("cnic").style.border = "none";
          document.getElementById("phoneNumber").style.border = "none";

          document.getElementById("errorMessage").innerText = e.response.data.error.accountType;
          document.getElementById("errorApi").style.visibility = "visible";
          document.getElementById("errorApi").style.position = "relative";
        }
      });
  };

  function readFile(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader();
        reader.onload = () => {
          var img = document.getElementById("b1");
          img.style.backgroundImage = `url(${reader.result})`;

          document.getElementById("profile-pic").value = reader.result;
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  function acceptTerms()
  {
    
  }

  function togglePopup() {
    const popupContainer = document.getElementById("pop");
    if (popupContainer.style.display === "block") {
      popupContainer.style.display = "none";
    } else {
      popupContainer.style.display = "block";
    }
  }

  function toggleOff() {
    const popupContainer = document.getElementById("pop");
    popupContainer.style.display = "none";
  }

  return (
    <div className="signup-form-container">
      <label htmlFor id="errorApi">
        {" "}
        <span id="errorMessage"></span>
      </label>
      <div class="user-avatar">
        <div className="container-1">
          <div className="box" id="b1">
            <input onChange={readFile} type="file" id="file1" name="file1" accept="image/*" />
            <label for="file1" className="camera-icon"></label>
          </div>
          <p style={{fontWeight: "bold", color:"white"}}>Upload Profile Picture</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6 form-group">
          <input
            type="text"
            className="form-control p-4"
            placeholder="Name"
            required="required"
            id="name"
          />
        </div>
        <div className="col-6 form-group">
          <input
            type="text"
            className="form-control p-4"
            placeholder="Email"
            required="required"
            id="email"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6 form-group">
          <input
            type="password"
            className="form-control p-4"
            placeholder="Password"
            required="required"
            id="password"
          />
        </div>
        <div className="col-6 form-group">
          <input
            type="password"
            className="form-control p-4"
            placeholder="Confirm Password"
            required="required"
            id="confirmPassword"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6 form-group">
          <InputMask
            className="form-control p-4 cnic-inp"
            mask="99999-9999999-9"
            id="cnic"
            placeholder="CNIC"
          />
        </div>

        <div className="col-6 form-group">
          <InputMask
            className="form-control p-4 cnic-inp"
            mask="(+99)-9999999999"
            id="phoneNumber"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div className="row">
        <div class="form-group col-12 ">
          <select
            class="custom-select px-4 mb-3 bg-dark"
            placeholder="Select Account Type"
            id="accountType"
            style={{ height: 50 }}
          >
            <option selected>Choose Account Type</option>
            <option value="Lessee">I Want to Rent a Car</option>
            <option value="Lessor">I Want to Upload My Car for Rent</option>
          </select>
        </div>
      </div>

      <label htmlFor id="password-lbl-error">
        PASSWORD DOES NOT MATCH!
      </label>

      <input type="text" id="profile-pic" hidden />

        <input class="terms" type="checkbox" onClick={acceptTerms}></input>
        <h4>I have read and agree to the <a href="#0" onClick={togglePopup}>Terms and Conditions.</a></h4>
      <div>

      <div class="popuptc-container" id="pop" onClick={toggleOff}>
                      <div class="popuptc">
                      <div>
            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Eligibility, registration, verification</h1>
                <div className="stats-container">
                    <ul className="list-group">To access and use certain features of our website or services, you may be required to create an account and register with us. By doing so, you represent and warrant that all information provided during the registration process is true, accurate, and complete. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. We reserve the right to refuse registration, suspend or terminate your account, or restrict your access to our website or services at any time, with or without cause, in our sole discretion. You must have to meet the following required to meet the following conditions to use our services:
                        <br></br>
                        <br></br>
                        <li>All details entered must be valid.</li>
                        <li>You must have a valid CNIC.</li>
                        <li>Your Phone Number must be verified.</li>
                        <li>Your Email must be verified.</li>
                        <li>You must have a valid Driving License</li>
                    </ul>
                </div>
            </div>

            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Payment and Charges</h1>
                <div className="stats-container">
                    <p></p>

                    <ul className="list-group">Payment methods to access our services include credit cards, debit cards, or cash on delivery methods accepted by us. You represent and warrant that you have the legal right to use any payment method you provide to us, and that any payment information you provide is true, accurate, and complete. We reserve the right to refuse or cancel any payment, or terminate your access to our website or services if we suspect any fraudulent activity or unauthorized use of payment methods.
                        <br></br>
                        <br></br>
                        <li>You will be charged upon booking a car instantly if you choose to pay online.</li>
                        <li>The company will charge you 20% of the payment fees if you wish to cancel the booking after it has been accepted. The remaining fees will be deposited to your wallet.</li>
                        <li>Upon rejecting a booking, you will be charged Rs. 1000 as per company policy.</li>
                    </ul>
                </div>
            </div>

            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Car Rental Terms</h1>
                <div className="stats-container">
                    <p>
                    By renting a car through our website and services, you agree to comply with our car rental terms. You are responsible for inspecting the car before and after the rental period, reporting any damages, and returning the car on time and in the same condition as received, except for normal wear and tear. You agree to use the car only for lawful purposes and in accordance with traffic laws and regulations. We reserve the right to restrict your account at any time, with or without notice, if you violate these terms or engage in any illegal or unsafe activities.
                    </p>
                </div>
            </div>

            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Disclaimer of Warranties and Liability</h1>
                <div className="stats-container">
                    <p>
                    Our website and services are provided on an "as is" and "as available" basis, without any representations or warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or availability. We do not guarantee the accuracy, completeness, reliability, or timeliness of any information or content on our website or services. You acknowledge and agree that your use of our website and services is at your own risk, and that we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to your use of our website or services.
                    </p>
                </div>
            </div>

            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Intellectual Property Rights</h1>
                <div className="stats-container">
                    <p>
                    Our website and services may contain proprietary content and information, including but not limited to trademarks, logos, text, graphics and images. The information on this website shall be reused for any sort of car rental activities without our permission. You acknowledge and agree that such content and information are protected by intellectual property laws and regulations, and may not be used or reproduced without our prior written consent.
                    </p>
                </div>
            </div>

            <div className="container-1-1">
                <h1 class="pl-3 mb-4 text-primary text-center">Your Commitments</h1>
                <div className="stats-container">
                    <p>
                        You agree that you will always use your Move Account and the Services in compliance with these Terms, applicable law, and any other policies and standards provided to you by Move.
                        <br></br>
                        <br></br>
                        You are, and will be solely responsible for, all of the activity that occurs through your Move Account. Keep your Move Account information, including your password, secure. You agree that you will not disclose your password to any third party and that you will take sole responsibility for any activities or actions under your Move Account, whether or not you have authorized such activities or actions. You will immediately notify Move of any actual or suspected unauthorized use of your Move Account. We are not responsible for your failure to comply with this clause, or for any delay in shutting down or protecting your Move Account unless you have reported unauthorized access to us.
                    </p>
                </div>
            </div>

            <button className="btn btn-primary py-3 px-5" onClick={toggleOff}>
          Okay
        </button>

        </div>
                        </div>
                    </div>

        <button className="btn btn-primary py-3 px-5" id="signUpbtn" onClick={sendData}>
          Sign Up
        </button>
        <br /> <br />
        <Link to="/signin">Already have an account?</Link>
      </div>
    </div>
  );
};

export default SignUp;
