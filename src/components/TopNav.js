import React from "react";
import { Link } from "react-router-dom";

export function TopNav () {
return(
    <>
    <div className="bg-blue-400 overflow-hidden w-full">
  <div className="text-blue-800 underline flex [&>*]:ml-4">
    <Link to='/summary'><div>Product Summary</div></Link>
    <Link to='/test'><div>Test page</div></Link>
</div>
</div>
</>
)
}