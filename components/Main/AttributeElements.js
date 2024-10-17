import React from 'react'
import AttributeElement from './AttributeElement'
import "./AttributeElements.scss"

const AttributeElements = ({attributeElements}) => {
  
    return (
    <>
        <div className='attribute_elements'>
        {attributeElements && attributeElements.map(
            (element) => <AttributeElement element={element}/>
        )}
        </div>
    </>
  )
}

export default AttributeElements