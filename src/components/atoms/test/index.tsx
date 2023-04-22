import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

export const FocusableTestCom  = () => {
    const { ref, focused } = useFocusable();
    console.log("focused", focused);
    
    return (
        <div ref={ref} 
        style={{
            backgroundColor: focused ? "red" : "gray",
            height: "300px",
            width: "216px",
            borderRadius: "16px",
            marginRight: "16px",
            marginBottom: "16px",
        }}/>
    )
}