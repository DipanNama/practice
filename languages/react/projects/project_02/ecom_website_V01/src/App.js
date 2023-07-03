// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { ContactUs } from "./Pages/ContactUs";
import { Login } from "./User/Login";
import { TermsAndConditions } from "./Pages/TermsAndConditioins";
import { SignUp } from "./Pages/SignUp";
import { ProductList } from "./Components/Product/ProductList";
import { Search } from "./Components/Product/Search";
import { Categories } from "./Components/Product/Categories";
import { Premium } from "./Components/Premium";
import { FAQs } from "./Pages/FAQs";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { Account } from "./User/Account";
import { Logout } from "./User/Logout";
import { Error } from "./Error";
import { UserProfile } from "./User/UserProfile";
import { UserActivities } from "./User/UserActivities";
import { UserNotifications } from "./User/UserNotifications";
import { Orders } from "./User/Orders";
import { Wishlist } from "./User/Wishlist";
import { Billing } from "./User/Billing";
import { Cart } from "./User/Cart";
import { Explore } from "./User/Explore";
import { History } from "./User/History";
import { Rewards } from "./User/Rewards";
import { Help } from "./Help";
import { Settings } from "./User/Settings";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { AddProduct } from "./Admin/AddProduct";
import Checkout from "./Payment/Checkout";
import ProductDetail from "./User/ProductDetail";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home name={userName} />
              }
            />

            <Route
              exact
              path="/home"
              element={
                <Home name={userName} />
              }
            />

            <Route
              exact
              path="/about"
              element={
                <About name={userName} />
              }
            />

            <Route
              exact
              path="/contact"
              element={
                <ContactUs name={userName}
                />
              }
            />

            <Route
              exact
              path="/login"
              element={
                <Login />
              }
            />

            <Route
              exact
              path="/signup"
              element={
                <SignUp />
              }
            />

            <Route
              exact
              path="/terms_and_conditions"
              element={
                <TermsAndConditions />
              }
            />

            <Route
              exact
              path="/products"
              element={
                <ProductList />
              }
            />

            <Route
              exact
              path="/product/:id"
              element={
                <ProductDetail />
              }
            />

            <Route
              exact
              path="/checkout"
              element={
                <Checkout name={userName} />
              }
            />

            <Route
              exact
              path="/search"
              element={
                <Search />
              }
            />

            <Route
              exact
              path="/categories"
              element={
                <Categories />
              }
            />

            <Route
              exact
              path="/premium"
              element={
                <Premium />
              }
            />

            <Route
              exact
              path="/account"
              element={

                <Account name={userName} />

              }
            />

            <Route
              exact
              path="/product/add"
              element={

                <AddProduct name={userName} />

              }
            />

            <Route
              exact
              path="/profile"
              element={

                <UserProfile name={userName} />

              }
            />

            <Route
              exact
              path="/forgotpassword"
              element={<ForgotPassword />
              }
            />

            <Route
              exact
              path="/activity"
              element={

                <UserActivities name={userName} />

              }
            />

            <Route
              exact
              path="/notifications"
              element={

                <UserNotifications name={userName} />

              }
            />

            <Route
              exact
              path="/orders"
              element={

                <Orders name={userName} />

              }
            />

            <Route
              exact
              path="/wishlist"
              element={

                <Wishlist name={userName} />

              }
            />

            <Route
              exact
              path="/billing"
              element={

                <Billing name={userName} />

              }
            />

            <Route
              exact
              path="/cart"
              element={

                <Cart name={userName} />

              }
            />

            <Route
              exact
              path="/explore"
              element={
                <Explore name={userName} />
              }
            />

            <Route
              exact
              path="/rewards"
              element={

                <Rewards name={userName} />

              }
            />

            <Route
              exact
              path="/history"
              element={

                <History name={userName} />

              }
            />

            <Route
              exact
              path="/settings"
              element={

                <Settings name={userName} />

              }
            />

            <Route
              exact
              path="/logout"
              element={

                <Logout />

              }
            />

            <Route
              exact
              path="/help"
              element={
                <Help />
              }
            />

            <Route
              exact
              path="/faq"
              element={
                <FAQs name={userName} />
              }
            />

            <Route
              path="*"
              element={
                <Error />
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
