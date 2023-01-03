import React from "react";
import { Link } from "react-router-dom";

export function HomePage () {
    return(
        <>
        <div className="m-auto relative mt-10 ml-20">
            <div>
                Products
            </div>

            <div className="text-blue-400 [&>div]:flex">
                <Link to='/summary'><div>Product Summary</div></Link>
                <Link to='/test'><div>Test page</div></Link>
            </div>

        </div>
        </>
    )
}