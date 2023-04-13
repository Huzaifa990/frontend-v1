import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// 👇️ View all listings from the API
const ViewListingsDashboard = () => {
  const location = useLocation();
  console.log(location.state.id);

  // 👇️ Use states for storing data and images from the API
  const [name, setName] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    names();
  });
  var imgg = [];
  var userDetails = JSON.parse(localStorage.getItem("userDetails"));

  // 👇️ Getting data from the API and setting use states to store data and images form the API
  const names = async () => {
    const response = await fetch("https://moveapi.onrender.com/api/listing/" + location.state.id, {
      headers: { Authorization: userDetails },
    });
    console.log(response);
    const data = await response.json();
    imgg = data.item.picture;
    setImg(imgg);
    console.log(imgg);
    console.log(data.item);
    setName(data.item);
  };

  // 👇️ Changing the format of time and date so that it can be inserted into the form inputs
  function timeFix() {
    const timeInput1 = document.getElementById("pickTime");

    timeInput1.addEventListener("input", (e) => {
      let hour = e.target.value.split(":")[0];
      e.target.value = `${hour}:00`;
    });

    const timeInput2 = document.getElementById("dropTime");

    timeInput2.addEventListener("input", (e) => {
      let hour = e.target.value.split(":")[0];
      e.target.value = `${hour}:00`;
    });
  }

  setTimeout(timeFix, 2000);


  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container pt-5 pb-3">
          <h1 className="display-4 text-uppercase mb-5">
            {name.company} {name.carName}
          </h1>
          <div className="row align-items-center pb-2">
            {img.length < 3 && img.length > 1 ? (
              <>
                <div className="col-lg-4 mb-4">
                  <img className="img-fluid" src={img[0]} alt="" />
                  <img className="img-fluid" src={img[1]} alt="" />
                </div>
              </>
            ) : img.length < 4 && img.length > 1 ? (
              <>
                <div className="col-lg-4 mb-4">
                  <img className="img-fluid" src={img[0]} alt="" />
                  <img className="img-fluid" src={img[1]} alt="" />
                </div>
                <div className="col-lg-6 mb-4">
                  <img className="img-fluid" src={img[2]} alt="" />
                </div>{" "}
              </>
            ) : img.length < 5 && img.length > 1 ? (
              <>
                <div className="col-lg-4 mb-4">
                  <img className="img-fluid" src={img[0]} alt="" />
                  <img className="img-fluid" src={img[1]} alt="" />
                </div>
                <div className="col-lg-4 mb-4">
                  <img className="img-fluid" src={img[2]} alt="" />
                  <img className="img-fluid" src={img[3]} alt="" />
                </div>{" "}
              </>
            ) : (
              <div className="col-lg-6 mb-4">
                <img className="img-fluid" src={img[0]} alt="" />
              </div>
            )}

            <div className="col-lg-6 mb-4">
              <h4 className="mb-2">PKR{name.rentPerDay}/Day</h4>
              <div className="d-flex mb-3">
                <h6 className="mr-2">Rating:</h6>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star text-primary mr-1"></small>
                  <small className="fa fa-star-half-alt text-primary mr-1"></small>
                  <small>(250)</small>
                </div>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum
                et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing
                labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur
                invidunt
              </p>
              <div className="d-flex pt-1">
                <h6>Share on:</h6>
                <div className="d-inline-flex">
                  <a className="px-2" href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="px-2" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="px-2" href="/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-n3 mt-lg-0 pb-4">
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-car text-primary mr-2"></i>
              <span>Model: {name.model}</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-cogs text-primary mr-2"></i>
              <span>{name.transmission}</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-road text-primary mr-2"></i>
              <span>20km/liter</span>
            </div>
            <div className="col-md-3 col-6 mb-2">
              <i className="fa fa-eye text-primary mr-2"></i>
              <span>GPS Navigation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewListingsDashboard;
