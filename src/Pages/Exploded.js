import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exploded = (props) => {
    const { loggedIn, email } = props 
    const navigate = useNavigate()

    const onButtonClick = () => {
        if (loggedIn) {
          localStorage.removeItem('user')
          props.setLoggedIn(false)
        } else {
          navigate('/login')
        }
      }

    return (
        <div className="mainContainer">
            <div className={'titleContainer'}>
                <div>You Exploded!</div>
            </div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? 'Log out' : 'Log in'}
                />
                {loggedIn ? <div>Your email address is {email}</div> : <div />}
            </div>
        </div>
    )
}

export default Exploded