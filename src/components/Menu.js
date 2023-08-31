import React from "react";

function Menu({ darkMode, toggleDarkMode }) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="darkMode"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
