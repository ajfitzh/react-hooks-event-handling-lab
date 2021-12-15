import React, {useState} from 'react'

function EyesOnMe(){
        return (<div><button       onFocus={(e) => {console.log('Good!');}}onBlur={(e) => {console.log('Hey! Eyes on me!')}}>'Eyes on me'</button>
        
        
        </div>)

}

console.log('Good!')

export default EyesOnMe;