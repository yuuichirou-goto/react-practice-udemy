import { useState } from "react";
const Example = () => {
  let valArry = useState(0);
  let [val, setVal] = useState();
  return (
    <>
      <input 
        type = "text" 
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value)
        }}>
      </input>
      = { val }
    </>
  );
};

export default Example;
