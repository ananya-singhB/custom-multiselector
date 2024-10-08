import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedColor, setSelectedColor] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const colors = ["red", "blue", "green", "white", "yellow", "black"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRemove = (color) => {
    setSelectedColor((colors) => colors.filter((curr) => curr !== color));
  };

  const handleSelect = (color) => {
    if (selectedColor.includes(color)) {
      handleRemove(color);
    } else {
      setSelectedColor((colors) => [...colors, color]);
    }
  };

  const toggleExpansion = () => {
    setExpand(!expand);
  };

  return (
    <div className="App">
      <div>
        <div>Select Colors</div>
        <button className="select-button" onClick={toggleExpansion}>
          {expand
            ? 'Hide'
            : "Expand"}
        </button>
        {expand && 
          <select
            multiple={true}
            onChange={(e) => handleSelect(e.target.value)}
            value={selectedColor}
            className="multiselect"
          >
            {colors.map((color, index) => (
              <option value={color} key={`${index}-${color}`} className={selectedColor.includes(color) ? 'item-selected' : 'item'}>
               {color}
              </option>
            ))}
          </select>
        }

        <button className="dropdown-button" onClick={toggleDropdown}>
          {selectedColor.length > 0
            ? selectedColor.join(", ")
            : "Select Colors"}
        </button>
        {isOpen && (
          <div className="dropdown-list">
            {colors.map((color) => (
              <label key={color}>
                <input
                  type="checkbox"
                  checked={selectedColor.includes(color)}
                  onChange={() => handleSelect(color)}
                />
                {color}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
