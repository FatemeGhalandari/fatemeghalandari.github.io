import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const ToggleButton = ({ setOpen, open }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </button>
  );
};

export default ToggleButton;
