import { useFocusable } from "@noriginmedia/norigin-spatial-navigation"

export const Package = ({ focusKey }: { focusKey: string }) => {
  const { ref, focused } = useFocusable({ focusKey })
  console.log("focusKey", focusKey)
  console.log("focused", focused)

  return (
    <div
      style={{
        backgroundColor: focused ? "red" : "gray",
        height: "300px",
        minWidth: "216px",
        borderRadius: "16px",
        marginRight: "16px",
        marginBottom: "16px",
      }}
      ref={ref}
    />
  )
}
