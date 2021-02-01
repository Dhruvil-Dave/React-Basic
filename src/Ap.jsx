import React from "react";
import { add, sub, mul, div} from "./Calc";

function Ap(){
    return(
        <>
            <ul>
                <li> {add(40,3)}</li>
                <li> {sub(40,3)}</li>
                <li> {mul(40,3)}</li>
                <li> {div(40,3)}</li>
            </ul>
        </>
    );
}

export default Ap;