import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import data from "./Data";
const App = () => {
  const CustomNodeTooltip = ({ node }) => {
    const borderColor=node.color
    return (
      <div
        style={{ background: "white", padding: "10px", borderRadius: "10px",fontStyle:"bold",fontWeight:600,border: `2px solid ${borderColor}` }}
      >
        <div>Node ID: {node.id}</div>
        <div>Value: {node.value}</div>
      </div>
    );
  };

  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div style={{ height: "500px" }}>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: "set3" }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkOpacity={0.7}
        linkHoverOpacity={0.8}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={false}
        labelPosition="outside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextSize={16}
        labelTextColor={{ from: "color", modifiers: [["darker", 20]] }}
        animate={true}
        motionStiffness={140}
        motionDamping={13}
        onClick={handleClick}
        nodeTooltip={CustomNodeTooltip}
      />
    </div>
  );
};

export default App;
