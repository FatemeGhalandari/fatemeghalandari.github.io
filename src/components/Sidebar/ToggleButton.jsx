import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ setOpen, open }) => {
  const toggleSidebar = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  return (
    <button
      className="nav-btn fixed z-[20] top-6 left-6 w-[50px] h-[50px] bg-transparent border-r-4 border-none cursor-pointer"
      onClick={toggleSidebar}
    >
      {open ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </button>
  );
};

export default ToggleButton;
