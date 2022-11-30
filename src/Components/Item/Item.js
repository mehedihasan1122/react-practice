import React from 'react';
import './Item.css'

const Item = (props) => {

    // console.log(props);

    const {name, picture , age, id , time} =props.item

    return (
        <div className='item'>
            <img src= {picture} alt="" />
            <h5>Name: {name} </h5>
            <p>id: {id}</p>
            <p>Age: {age}</p>
            <p>Time: {time} s</p>
            <p>Age: {age}</p>

            <button onClick={()=>props.handleAddToCart(props.item)} className='items-btn'>Add to cart</button>
        </div>
    );
};

export default Item;