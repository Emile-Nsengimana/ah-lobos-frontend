/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SocialLogin from "./views/SocialLogin";
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import SignupPage from "./views/SignupPage";
import NewPassword from "./views/NewPassword";
import ResetPassword from "./views/ResetPassword";
import EditProfile from "./views/EditProfile";
import ReadArticle from "./views/ReadArticle/ReadArticle";
import CommentArticle from "./views/comment";
import Follow from "./views/Follow";
import Followee from "./views/getFollowee";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/social-login" component={SocialLogin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignupPage} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/newpassword/:token" component={NewPassword} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/article/:slug" component={ReadArticle} />
          <Route exact path="/articles/:slug" component={CommentArticle} />
          <Route path="/article/:slug" component={ReadArticle} />
          <Route exact path="/follow" component={Follow} />
          <Route exact path="/followee" component={Followee} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
