import React from "react";

const useAccordion = () => {
  const [activeCategory, setActiveCategory] = React.useState(null);

  const handleCategoryClick = (userClickCategory) => {
    setActiveCategory(null);
    if (activeCategory === userClickCategory) {
      return;
    } else {
      setActiveCategory(userClickCategory);
    }
  };

  return {
    activeCategory,
    handleCategoryClick,
  };
};

export default useAccordion;
