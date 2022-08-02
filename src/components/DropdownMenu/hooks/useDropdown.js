import React, { useState, useRef } from "react";

const useDropdown = (sidebarClose) => {
  const [dropdown, setDropdown] = useState(false);

  const dropdownRef = useRef(null);
  const toggleRef = useRef(null);

  const toggleDropdown = () => setDropdown((s) => !s);
  const closeDropdown = () => {
    setDropdown(false);
    sidebarClose();
  };

  const closeOpenDropdown = (e) => {
    if (
      dropdownRef.current &&
      dropdown &&
      !dropdownRef.current.contains(e.target) &&
      !toggleRef.current.contains(e.target)
    ) {
      setDropdown(false);
    }
  };

  // Close dropdown when user clicks outside of it
  React.useEffect(() => {
    window.addEventListener("mousedown", closeOpenDropdown);
    return () => {
      window.removeEventListener("mousedown", closeOpenDropdown);
    };
  }, [dropdown]);

  return {
    dropdown,
    dropdownRef,
    toggleRef,
    toggleDropdown,
    closeDropdown,
  };
};

export default useDropdown;
