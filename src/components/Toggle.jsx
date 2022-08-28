import {  useAtom } from "jotai";
import { isDarkModeAtom } from "../globalState";
export default function Toggle() {
    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
  return (
    <div class="toggle-switch">
      <label>
        <input
          onChange={(e) => setIsDarkMode(b => !b)}
          checked={!isDarkMode}
          type="checkbox"
        />
        <span class="slider"></span>
      </label>
    </div>
  );
}
