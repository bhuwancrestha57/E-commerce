import React, { useState } from "react";
import "../../style/Main.css"; // Import your component-specific CSS file

const Category = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>Hover me</div>
      {isHovered && (
        <div className="dropdown-content">
          <div>Additional content</div>
          <div>Additional content</div>
          <div>Additional content</div>
        </div>
      )}
    </div>
  );
};

export default Category;
