import React, { useState } from "react";
  
function Parent() {
  const [fName, setfName] = useState("firstName");
  const [lName, setlName] = useState("LastName");
  return (
    <>
      <div className="mt-10 text-red-400">Parent Component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  );
}
  
function ChildA({ fName, lName }) {
  return (
    <>
      ChildA Component.
      <br />
      <ChildB fName={fName} lName={lName} />
    </>
  );
}
  
function ChildB({ fName, lName }) {
  return (
    <>
      ChildB Component.
      <br />
      <ChildC fName={fName} lName={lName} />
    </>
  );
}
  
function ChildC({ fName, lName }) {
  return (
    <>
    <div className="mt-10">
      ChildC component.
      <br />
      <h3 className="text-red-400"> Data from Parent component is as follows:</h3>
      <h4>{fName}</h4>
      <h4>{lName}</h4>
    </div>
    </>
  );
}
  
export default Parent;