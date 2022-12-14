import React from 'react'
import Image from 'next/image'
import styles from '../styles/number.module.css'
import Head from 'next/head'
import '../loader'
import { useEffect } from 'react'
import { useState, forwardRef } from 'react'


function Snack(props,ref) {
  const [number, setnumber] = useState(0);
  const [step, setstep] = useState(1);
  const [max, setmax] = useState(100);
  const [min, setmin] = useState(0);
  const [hello, sethello] = useState(props.id)
  const [hottotal, sethottotal] = useState(0)
  const [price, setprice] = useState(props.price2)
  const[text,settext] = useState( {summary:'',hot:'',price:'',hottotal:''})

if(hottotal<0){
  sethottotal(0)
}


    useEffect(()=>{
      if(parseInt(number)>100){
        setnumber(100)
      }
      else if(parseInt(number)<1){
        setnumber(0)
      }
    },[number])
    useEffect(()=>{
      if(parseInt(hottotal)<0){
        sethottotal(0)
      }
    },[hottotal])

    useEffect(()=>{
      if(number!=0){
        settext({
          summary:`${props.product} x ${number}  =  $ ${parseFloat(hottotal).toFixed(2)}`,
          hot: `${props.product} x ${number}`,
          price1:`$ ${parseFloat(hottotal).toFixed(2)}`,
          hottotal:hottotal
 
         })

       }
       else if(number<=0){
        settext({
          summary:"",
          hot:"",
          price1:"",
          hottotal:""
  
         })
       }
       props.setgooglesheet([]);


    },[hottotal])

    useEffect(()=>{
      if(parseInt(number)>100){
        setnumber(100)
      }
      else if(parseInt(number)<1){
        setnumber(0)
      }
    },[number])
    useEffect(()=>{
      if(parseInt(hottotal)<0){
        sethottotal(0)
      }
    },[hottotal])

    useEffect(()=>{
      props.setgooglesheet('123');
    
    
    },[text])


          
        




  return (
    <div className='mt-1 mb-2 col-11 mx-auto row'> 
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
      </Head>

    
      <div ref={ref} style={{ display: "none" }}>
        <div> {text.hot},,,,,,,,,,,,
        </div>
        <div>{text.price1},,,,,,,,,,,,
        </div>
        <div>{text.hottotal},,,,,,,,,,,,
        </div>
        <div>
        {text.hot},,,,,,,,,,,,{number}
        </div>
        </div>
        <div className="accordion col-12" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={props.accordion3}>
              <button className="accordion-button collapsed d-flex flex-row justify-content-right align-items-center col-12" type="button" data-bs-toggle="collapse" data-bs-target={props.accordion2} aria-expanded="false" aria-controls={props.accordion}>
                
                  <div className={styles.picture}>
                    <Image
                    src={props.pic}
                    alt={props.product}
                    width={50}
                    height={50}
                    layout='fixed'
                    className={styles.pic}
                    />
                  </div>
                  <div className='d-flex flex-column col-8  justify-content-between'>
                    <div>{props.product}</div>
                    <small className='text-secondary' >${parseFloat(price).toFixed(2)}</small>
                  </div>

        

              </button>
            </h2>
            <div id={props.accordion} className="accordion-collapse collapse" aria-labelledby={props.accordion3} data-bs-parent="#accordionExample">
              <div className="accordion-body d-flex flex-column">
                  <div className='d-flex flex-row col-12 justify-content-evenly mt-2 mb-3 mx-auto row'>
                      <small className={styles.detail}>{props.discription}</small>
                      <div className='d-flex flex-row col-12 align-items-start mt-1'>
                        <small ><strong>{props.availableIn}</strong> </small>
                        <small className='text-secondary mx-2' >{props.icelevel}</small>
                      </div>
                    <div className='d-flex flex-row col-12 align-items-center justify-content-between'>
                        {/* <div className='d-flex flex-row col-4  mt-1 align-items-center'>
                            <small ><strong>Price</strong> </small>
                            <small className='text-secondary mx-2' >${price}</small>
                        </div> */}

                        <div className='d-flex flex-row stepper col-5 mt-3'>
                            <span className={styles.inputnumberdecrement } onClick={()=>{setnumber(number-1);sethottotal((price*10)*(number-1)/10)}}>???</span>
                            <input type="number" id={props.id} name={props.googleformqant} value={number} className='form-control' onChange={(e)=>{setnumber(''); setnumber(parseFloat(e.target.value));sethottotal((price*10)*(e.target.value)/10)}}/>
                            <span className={styles.inputnumberincrement} onClick={()=>{setnumber(number+1);sethottotal((price*10)*(number+1)/10)}}>+</span>

                        </div>
                          <input type="text" style={{display:"none"}} name={props.googleformamount} value={hottotal}/>

                        <small className='text-secondary mx-2' >${parseFloat(hottotal).toFixed(2)}</small>

                    </div>


                </div>

              </div>
            </div>
          </div>
        </div>
    </div>

    
  )
}
export default forwardRef(Snack);