import React from 'react'
import { ServiceBox } from './ServiceBox'
import "./ServiceBoxes.scss"

export const ServiceBoxes = () => {
  return (
    <div className={"service-boxes"}>
        <ServiceBox heading={"web design"} subtext={"view projects"}/>
          <div className={"service-boxes__container"}>
            <ServiceBox heading={"app design"} subtext={"view projects"}/>
            <ServiceBox heading={"graphic design"} subtext={"view projects"}/>
         </div> 
    </div>
  )
}
