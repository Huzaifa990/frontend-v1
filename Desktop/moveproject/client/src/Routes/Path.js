import "../App.css";
import "../bootstrap.min.css";
import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import SubServices from "../components/Services/SubServices";
import Discount from "../components/Services/Discount";
import SubHeaderAbout from "../components/Headers/SubHeader";
import FindCar from "../components/FindCar";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Driver from "../components/Driver";
import Map from "../components/Map";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slider from "../components/Headers/Slider";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Listings from "../components/Listings";
import AddListings from "../components/AddListings";
import ViewListings from "../components/ViewListings";
import EditListing from "../components/EditListings";
import ChangePassword from "../components/ChangePassword";
import DeleteListing from "../components/DeleteListing";
import RequestForget from "../components/RequestForget";
import ResetPassword from "../components/ResetPassword";
import MyListings from "../components/MyListings";
import MyBookings from "../components/MyBookings";
import EditBooking from "../components/EditBooking";
import ViewBooking from "../components/ViewBooking";
import DeleteBooking from "../components/DeleteBooking";
import LessorDashboard from "../components/LessorDashboard";
import LesseeDashboard from "../components/LesseeDashboard";
import AdminDashboard from "../components/AdminDashboard";
import ActivateAccount from "../components/ActivateAccount";
import MyProfile from "../components/MyProfile.js";
import ViewBookingDashBoard from "../components/ViewBookingDashboard";
import ViewUser from "../components/ViewUser";
import ViewListingsDashboard from "../components/ViewListingsDashboard";
import ViewBookingLessor from "../components/ViewBookingLessor";
import LessorWallet from "../components/LessorWallet";
import LesseeWallet from "../components/LesseeWallet";
import TermsAndConditions from "../components/Terms&Conditions";
import PrivacyPolicy from "../components/PrivacyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />  <Slider /> <Introduction /> <SubServices numbering="2" />{" "}
                <Discount /> <FindCar /> <ContactUs numbering="4" /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="About" /> <Introduction />{" "}
                <Driver /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Contact" />{" "}
                <ContactUs numbering="1" /> <Map /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="services"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Services" />{" "}
                <SubServices numbering="1" /> <Discount /> <Driver /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="signup"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="SignUp" /> <SignUp />{" "}
                <SubServices numbering="1" />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="signin"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="SignIn" /> <SignIn />{" "}
                <SubServices numbering="1" />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="listings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Listings" /> <Listings />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="addListings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="List Your Car" /> <AddListings />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="viewListings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Car Details" /> <ViewListings />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="editListings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Edit Details" /> <EditListing />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="changepassword"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Update Password" />{" "}
                <ChangePassword /> <SubServices numbering="1" />
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="deleteListings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Delete Listing" />{" "}
                <DeleteListing /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="requestForget"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Forgot Password" />{" "}
                <RequestForget /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="reset"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Reset Password" />{" "}
                <ResetPassword /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="myListings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="My Listings" /> <MyListings />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="myBookings"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="My Bookings" /> <MyBookings />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="editBooking"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Edit Bookings" /> <EditBooking />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="viewBooking"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="View Bookings" /> <ViewBooking />{" "}
                <Footer />{" "}
              </>
            }
          />

          <Route
            path="viewBookingLessor"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="View Bookings" /> <ViewBookingLessor />{" "}
                <Footer />{" "}
              </>
            }
          />
          <Route
            path="deleteBooking"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Delete Bookings" />{" "}
                <DeleteBooking /> <Footer />{" "}
              </>
            }
          />

          <Route
            path="lessorDashboard"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Dashboard" /> <LessorDashboard />{" "}
                <Footer />{" "}
              </>
            }
          />

          <Route
            path="lesseeDashboard"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Dashboard" /> <LesseeDashboard />{" "}
                <Footer />{" "}
              </>
            }
          />

          <Route
            path="adminDashboard"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Admin Dashboard" />{" "}
                <AdminDashboard /> <Footer />{" "}
              </>
            }
          />

           <Route
            path="myProfile"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="My Profile" />{" "}
                <MyProfile /> <Footer />{" "}
              </>
            }
          />

          <Route
            path="viewBookingDashboard"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="View Booking" />{" "}
                <ViewBookingDashBoard /> <Footer />{" "}
              </>
            }
          />

          <Route
            path="viewListingDashboard"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="View Listing" />{" "}
                <ViewListingsDashboard /> <Footer />{" "}
              </>
            }
          />

          <Route
            path="viewUser"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="View User" />{" "}
                <ViewUser /> <Footer />{" "}
              </>
            }
          />
          <Route
            path="activateAccount"
            element={
              <>
                <ActivateAccount />
              </>
            }
          />

          <Route
            path="lessorWallet"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="My Wallet" />{" "}
                <LessorWallet /> <Footer />{" "}
              </>
            }
          />

          <Route
            path="lesseeWallet"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="My Wallet" />{" "}
                <LesseeWallet/> <Footer />{" "}
              </>
            }
          />
          
          <Route
            path="termsandconditions"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Terms and Conditions" />{" "}
                <TermsAndConditions/> <Footer />{" "}
              </>
            }
          />

            <Route
            path="privacyPolicy"
            element={
              <>
                <NavBar />  <SubHeaderAbout headingText="Privacy Policy" />{" "}
                <PrivacyPolicy/> <Footer />{" "}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
