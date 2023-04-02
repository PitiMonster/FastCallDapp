import { useState } from "react";

import { ABIFunction } from "common/types";

export const ABIFunctionDetails: React.FC<{ data: ABIFunction }> = ({
  data
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-[200px] bg-gray">
      <button onClick={() => setIsExpanded((prev) => !prev)}>
        <h4>{data.name}</h4>
      </button>
      {isExpanded && (
        <div>
          <p>Inputs:</p>
          <ul>
            {data.inputs.map((i) => (
              <li key={i.name}>
                {i.name}: {i.type}
              </li>
            ))}
          </ul>
          <p>Outputs:</p>
          <ul>
            {data.outputs.map((o) => (
              <li key={o.name}>
                {o.name}: {o.type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
