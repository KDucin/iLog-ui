import React from 'react'

/*Renderer builds dynamic data from JSON*/
function Renderer(
    {
        name,
        data
    }
 ) {
   
    return (
        
        <div>
            what i got:    {name}, {data}
        </div>
    )
}

export default Renderer
