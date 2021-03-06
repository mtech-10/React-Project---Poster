import Access from "./components/auth/acess";
import Join from "./components/auth/join";
import Home from "./components/posts/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Widgets.css";
import "./styles/auth.css";
import "./styles/feeds.css";
import "./styles/chats.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./components/error_page";
import Chat from "./components/chats/Chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/join" exact component={Join}></Route>
        <Route path="/access" exact component={Access}></Route>
        <Route path="/chat" exact component={Chat}></Route>
        <Route path="*" exact component={ErrorPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
