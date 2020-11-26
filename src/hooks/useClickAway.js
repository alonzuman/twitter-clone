const { useEffect, useState } = require("react");


const useClickAway = (ref) => {
  const [clickedAway, setClickedAway] = useState(false);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickedAway(true)
    }
  }

  useEffect(() => {
    if (clickedAway) {
      return setClickedAway(false);
    }
  }, [clickedAway])

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return { clickedAway }
}

export default useClickAway;
