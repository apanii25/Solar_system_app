import React from 'react';
function Card(prob) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={prob.imgsrc} alt="MYPIC" className="myimg" />
            <div className="card_info">
              <span className="card_cat">{prob.title}</span>
              <h3 className="card_titile">{prob.sname}</h3>
              <a href={prob.links} target="_blank">
                <button>Read More</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Card;