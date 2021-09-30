import React from "react";

const Projectmenu = ({ filterItem, menuList }) => {
  return (
    <>
    
      
        <div className="btn-group filtermenu">
          {menuList.map((curElem) => {
            return (
              
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      
     
    </>
  );
};

export default Projectmenu;