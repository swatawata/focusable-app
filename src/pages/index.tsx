import { Packages } from "@components/components/molecules/packages";
import { useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";

const Home = () => {
  const { setFocus, focusKey, ref } = useFocusable({ focusKey: "0-0" });

  useEffect(() => {
    setFocus("0-0");
  }, [setFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div style={{ height: "300px" }} ref={ref}>
        {[...Array(4)].map((_, i) => {
          return <Packages key={i} id={`${i}`} />;
        })}
      </div>
    </FocusContext.Provider>
  );
};

export default Home;
