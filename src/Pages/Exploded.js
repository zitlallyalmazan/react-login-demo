import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exploded = (props) => {
    const { loggedIn } = props 
    const navigate = useNavigate()

    const onButtonClick = () => {
        if (loggedIn) {
          props.setLoggedIn(false)
        } else {
          navigate('/')
        }
      }

    return (
        <div className="lastContainer">
            <div className={'titleContainer'}>
                <div>You Exploded!</div>
            </div>
            <div className={'buttonContainer'}>
                <input
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? 'Log In' : 'Log Out'}
                />
            </div>
        </div>
    )
}

export default Exploded