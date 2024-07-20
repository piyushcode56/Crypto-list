import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/Self_transparent.png';
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const {setCurrency} = useContext(coinContext);

    const currencyHandler = (event)=>{
        switch(event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol:"$"});
                break;
            }
            case "eur": {
                setCurrency({name: "eur", symbol: "€"});
                break;
            }
            case "inr": {
                setCurrency({name: "inr", symbol: "₹"});
                break;
            }

            default: {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }

        }
    }
  return (
    <div>
      <nav>
        <div className="navbar-image">
            <Link to={'/crypto-list'}><img src={logo} alt="" /></Link>
        </div>
        <div className="nav-links">
            {/* <ul>
                <Link to={'/'}><li><a href="#">Home</a></li></Link>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
            </ul> */}
        </div>
        <div className="nav-language">
            <select name="" id="" onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            
        </div>
      </nav>
    </div>
  )
}

export default Navbar

