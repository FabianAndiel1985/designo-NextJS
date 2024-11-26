import React from 'react'
import BoxWithInfo from './BoxWithInfo'
import "./BoxesWithInfo.scss"

const BoxesWithInfo = ({data}) => {
  return (
    <>    
         <div className='boxes-container'>
        {
            data.map((element)=>(
                <BoxWithInfo element={element}/>
            ))
        }
        </div>
    </>

  )
}

export default BoxesWithInfo