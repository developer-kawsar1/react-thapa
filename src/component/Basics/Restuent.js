
import React from "react";
import "./style.css"

function Restaurant() {
 
  return (
    <>
         
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-number card-circle subtle">1</span>
          <span className="card-author subtle">BreakFast</span>
          <h2 className="card-title">Maggi</h2>
          <span className="card-description subtle">
            Touch and hold a clip to pin it. Unpinned clips will be deleted after 1 hour.Touch and hold a clip to pin it. Unpinned clips will be deleted after 1 hour.Touch and hold a clip to pin it. Unpinned clips will be deleted after 1 hour.
          </span>
          <div className="card-read">  Read  </div>
          <img className="card-media" src="" alt="" />
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
    </div>
    </>
  );
}


export default Restaurant;

