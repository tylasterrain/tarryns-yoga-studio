import React from "react";

export default function Footer () {
   const date = new Date();
    return (
        <div className="footer pt-4 pb-2">
<p style={{fontSize: "0.5rem"}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>      </p>
<p style={{fontSize: "0.8rem"}}>Copyright {date.getFullYear()}</p>
  </div>
    )
}