import React from 'react'
import './Container.css'
import {Styled} from 'styled.component'
const StyledContainer = Styled.Container`

`
function Container({children}) {
  return (
   
    <div className='container'>{children}</div>
    
  )
}

export default Container