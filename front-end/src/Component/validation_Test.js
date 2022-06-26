import React, { useState } from 'react'

export default function From(){
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();
        
        if(first.length=== 0 || second.length ===0){
            setError(true)
        }


        if(first&&second){
            console.log('First Name:',first, '\nSecond Name:',second)
        }

    }

    return (<>

        <from>
            <div>
                <input placeholder="First Name" onChange={e =>setFirst(e.target.value)}  />
            </div>

            {/* ---------------error---------------- */}
            {error && first.length <=0? <label style={{color: 'red'}}>First Name can't be empty</label>: ''}
            
            <div>
                <input placeholder="Second Name" onChange={e =>setSecond(e.target.value)}  />
            </div>
            
            {/* ---------------error---------------- */}
            {error && second.length <=0? <label style={{color: 'red'}}>second Name can't be empty</label>: ''}
            
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </from>
    
    </>)
}



