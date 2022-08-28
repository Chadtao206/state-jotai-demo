import "./App.css";
import { Provider } from "jotai";
import Toggle from "./components/Toggle";
import { Profile, Profile2 } from "./components/ProfileVariants";

function App() {
  return (
    <Provider>
      <div className="flex justify-evenly">
        <Profile />
        <Profile2 />
        <Toggle />
      </div>
    </Provider>
  );
}

export default App;
