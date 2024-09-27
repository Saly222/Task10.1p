import React from 'react'
import './Header.css'

function Header (props)
{
    return (<div className = 'Header-div'> <h2>{props.text}</h2>
                 <input class = 'form' placeholder="  Search"/>
            <button class ='button1' type="submit">Post</button>
            <button class ='button2' type="submit">Login</button>
            </div>)
}
export default Header;