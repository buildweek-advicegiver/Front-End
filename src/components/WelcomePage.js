import React from 'react'
import {Link} from 'react-router-dom'

const WelcomePage = () => {
    return(
        <div className='Welcome'>
            <h2>Welcome to Advice Giver!</h2>

            <div>
                <h4>Click <Link to='/posts'>here</Link> to get some advice!</h4>
            </div>
        </div>
    )
}

export default WelcomePage