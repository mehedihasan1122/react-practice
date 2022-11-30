import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart} = props;

//    console.log(cart);

   let exerciseTime = 0;
//    let breakTime = 0;
    for(const singleItem of cart){
        exerciseTime =exerciseTime + singleItem.time;
        // breakTime = singleItem.breaktime;

     }



    // const btn1 = document.getElementById('brk-btn1');
    //  let btn1Value = 0;
    // const handleBreakTime1 = ()=>{
    //     btn1Value = btn1.innerText;
    //     console.log(btn1Value);

    // };

    // const btn2 = document.getElementById('brk-btn2');
    //  let btn2Value = '';
    // const handleBreakTime2 = ()=>{
    //     btn2Value = btn2.innerText;
    //     console.log(btn2Value);  

    // };
    // const btn3 = document.getElementById('brk-btn3');
    //  let btn3Value = '';
    // const handleBreakTime3 = ()=>{
    //     btn3Value = btn3.innerText;
    //     console.log(btn3Value);  

    // };
    // const btn4 = document.getElementById('brk-btn4');
    //  let btn4Value = '';
    // const handleBreakTime4 = ()=>{
    //     btn4Value = btn4.innerText;
    //     console.log(btn4Value);  

    // };

    // const btn5 = document.getElementById('brk-btn5');
    //  let btn5Value = '';
    // const handleBreakTime5 = ()=>{
    //     btn5Value = btn5.innerText;
    //     console.log(btn5Value);  

    // };




    

  
    return (
        <div>

            <header>
            
            <div>
                <div>
                <img src="../../images/289943718_3159310604335863_2065684127266916815_n.jpg" alt="" />
                </div>

                <div>
                <h3> Mehedi Hasan</h3>
                </div>
            </div>

            <div className='personal-info'>
                <div>
                    <h4>70 <small>kg</small></h4>
                    <p>Weight</p>
                </div>

                <div>
                    <h4>5.4 </h4>
                    <p>Height</p>
                </div>

                <div>
                    <h4>24 <small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>
            
            </header>

            <main>
               <div>
               <h4>Added a break</h4>


                <div className='btn-container'>
                    {/* <button onClick={handleBreakTime1} className='brk-btn' id='brk-btn1'>10s</button>
                    <button onClick={handleBreakTime2} className='brk-btn' id='brk-btn2' >20s</button>
                    <button onClick={handleBreakTime3} className='brk-btn' id='brk-btn3'>30s</button>
                    <button onClick={handleBreakTime4} className='brk-btn' id='brk-btn4'>40s</button>
                    <button onClick={handleBreakTime5} className='brk-btn' id='brk-btn5'>50s</button> */}

                    {/* <button>{breaktime}</button> */}


                </div>

               </div>


               <div>
                <h4>Exercise Details: </h4>
                 <p>Exercise Time :  {exerciseTime} </p>
                 <p>Break time:{} </p>
               </div>

               <button className='btn-activity'>Activity Completed</button>
            </main>
            
        </div>
    );
};

export default Cart;