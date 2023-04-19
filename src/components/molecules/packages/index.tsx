import { Package } from "@components/components/atoms/package";

export const Packages = ({ id }: { id: string }) => {
    return (
      <div style={{ display: "flex", width: "1000px" }}>
        {[...Array(10)].map((_, j) => (
          <Package focusKey={`${id}-${j}`} key={j} />
        ))}
      </div>
    );
  };
  