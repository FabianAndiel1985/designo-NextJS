import React from 'react'
import "./ServiceBox.scss"

export const ServiceBox = ({heading, subtext, desktopSize}) => {

  const findBackgroundClass = (heading)=>{

    if(heading === "web design")  {
        return "background-web-design";
    }

    else if(heading === "app design") {
        return "background-app-design";
    }
    return "background-graphic-design"
  }


const backgroundClass = findBackgroundClass(heading);



  return (
    <>    
      <div className={`service-box ${backgroundClass} ${desktopSize && 'medium-desktop-size'}`}>
          <div>
              <h1>{heading}</h1>
              <p>{subtext}</p>
          </div>
      </div>
    </>
  )
}
