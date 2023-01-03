import React, { useRef, useState } from "react";
import styles from "./Map.module.css";

const Map = ({ center, zoom, children }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center, zoom]);

  return (
    <div className={styles.map} ref={ref}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </div>
  );
};

export default Map;
