import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Main.css'

const Main = () => {

    const [items , setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    const handleAddToCart= (item)=>{

        // console.log(item);
        const newCart = [...cart,item];
        setCart(newCart);
    }






    return (
        <div className='main-container'>
            <div className='items-container'>

                {
                    items.map( item => <Item 
                        item={item}
                        handleAddToCart={handleAddToCart}
                        ></Item> 
                        )


                
                }

                



            </div>
            <div className='cart-container'>
            
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;