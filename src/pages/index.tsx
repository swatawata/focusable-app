import { Package } from "@components/components/atoms/package";

const Home = () => {
  return <>
    {[...Array(4)].map((i, _) => {
      return  (
        <div style={{display: "flex"}} key={i}>
          {[...Array(10)].map((j, _) => <Package key={j}/>)}
        </div>
      )
    })}
  </>
}

export default Home;
