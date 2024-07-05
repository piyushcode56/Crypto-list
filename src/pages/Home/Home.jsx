import React, { useContext, useEffect, useState } from 'react'
import './Home.css';
import { coinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';
const Home = () => {
  const {allCoins, currency} = useContext(coinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [input, setInput] = useState('');
  useEffect(()=>{
    setDisplayCoins(allCoins);
  },[allCoins])
  
  const inputHandler = (e) =>{
     setInput(e.target.value);
     if (e.target.value === '') {
      setDisplayCoins(allCoins);
     }
     
  }
  const searchHandler = async (e) =>{
    e.preventDefault();
    const coin = await allCoins.filter((item) =>{
    return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoins(coin);
  }
  return (
    <div className='Home'>
      <div className="hero">
            <h1>Largest <br />Crypto Trade Show</h1>
            <p>Welcome to the world's largest cryptocurrency Trade Show. <br />Sign up in Crypto List to explore more Cryptos.</p> 
            
            <form action="" className='crypto-form' onSubmit={searchHandler}>
                <input type="text" list='coinlist' placeholder='Search here...' onChange={inputHandler} value={input} required/>

                <datalist id='coinlist'>
                {
                  allCoins.map((item, index)=>(
                     <option key={index} value={item.name}/>
                  ))
                }
                </datalist>
                <button type='submit'>Search</button>
            </form>
      </div>
      <div className="table">
        <div className="table-layout">
          <p>Market rank</p>
          <p >Coins</p>
          <p>Price</p>
          <p style={{textAlign:'center'}}>24H Volume</p>
          <p className='market'>Market Cap</p>
        </div>
        {
          displayCoins.slice(0, 10).map((item, id)=>{
            return <Link to={`/coin/${item.id}`} className="table-layout" key={id}>
               <p>{item.market_cap_rank}</p>
               <div className='item-image'>
                <img src={item.image} alt="" />
                <p>{item.name + " - " + item.symbol}</p>
                </div>
                <p>{currency.symbol}  {item.current_price}</p>
                <p style={{textAlign:"center"}} className={item.price_change_percentage_24h>0? "green" : "red"}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                <p className='market'>{item.market_cap}</p>
               
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default Home
