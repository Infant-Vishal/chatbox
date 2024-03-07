import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Contacts />
      <Chat />
      <Profile />
    </div>
  );
}

export default App;
