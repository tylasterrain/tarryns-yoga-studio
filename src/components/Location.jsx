import React from "react";


export default function Location() {
  return (
    <div id="location" className="location-desc py-5 px-5 row mx-auto">
    <h2 className="py-2">Location</h2>
    <div className="col-md-8 pt-3 mx-auto">
      <p>
        Tarryn's Yoga Studio is located 
        <br/>near Waterstone Village at
        </p>
        <p>
        14 Oleander Street 
        <br/>Heldervue
        <br/>Somerset-West.
      </p>
      <div className="location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.1860732969794!2d18.821553951264598!3d-34.06474403659231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb53919ccf93b%3A0x5d88a733dce5a34c!2s14%20Oleander%20St%2C%20Heldervue%2C%20Cape%20Town%2C%207130!5e0!3m2!1sen!2sza!4v1642422146339!5m2!1sen!2sza"
        width="80%"
        height="300px"
        style={{border: "0"}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
    </div>
  </div>





   
  );
}
