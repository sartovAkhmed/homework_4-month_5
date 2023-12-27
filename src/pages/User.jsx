import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const User = () => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const {name, age} = useSelector((state) => state)
    const dispatch = useDispatch()

    const enterUser = () => {
        dispatch({ type: 'ADD_USER', 
            payload: userName,
            payloadOne: userAge
        })
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        enterUser()
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="userName">Name</label>
                <input type="text" id='userName' value={userName}
                    onChange={(event) => setUserName(event.target.value)} />
                <label htmlFor="userAge">Age</label>
                <input type="text" id='userAge' value={userAge}
                    onChange={(event) => setUserAge(event.target.value)}/>
                <button type='submit'>Save</button>
            </form>
            <div>
                <h3>{name}</h3>
                <span>{age}</span>
            </div>
        </div>
    )
}