import { FocusableTestCom } from "@components/components/atoms/test";
import { Packages } from "@components/components/molecules/packages";
import { init, useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import { use, useEffect } from "react";

const Home = () => {
  init();
  const { focusSelf, focusKey, ref } = useFocusable();

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

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
