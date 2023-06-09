import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const titleCurrentTheme = isLightTheme ? "light" : "dark";

  return (
    <div className={`App ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      <h1>Current theme: {titleCurrentTheme}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
