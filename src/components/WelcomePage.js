import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
    return(
        <div className='Welcome'>
            <h2>Welcome to Advice Giver!</h2>

            <div className="WelcomeH4">
                <h4>Click <Link to='/signup'>here</Link> to sign up or <Link to='/login'>here</Link> to login</h4>
            </div>
        </div>
    )
}

export default WelcomePage