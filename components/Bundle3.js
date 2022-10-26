import React, { useRef } from 'react'
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect, forwardRef } from 'react'
import bundlepic from '../public/coffee pic/bundle.JPG'


function Bundle3(props,ref) {
  const [tea, settea] = useState(0);
  const [teaprice, setteaprice] = useState(368);
  const [teatotal, setteatotal] = useState(0);
  const [tplus1, settplus1] = useState(0);
  const [tplus2, settplus2] = useState(0);
  const [tplus3, settplus3] = useState(0);
  const [tplus4, settplus4] = useState(0);
  const [tplus5, settplus5] = useState(0);


  const [toption1, settoption1] = useState("Cold");
  const [toption2, settoption2] = useState("Iced Lychee Tea");
  const [toption3, settoption3] = useState("Milk Tea");
  const [toption4, settoption4] = useState("Flakey Butter Croissant");
  const [toption5, settoption5] = useState("Waffles");
  const [toption6, settoption6] = useState("Pain au Chocolat");

  const [mixed, setmixed] = useState(0);
  const [mixedprice, setmixedprice] = useState(415);
  const [mixedtotal, setmixedtotal] = useState(0);
  const [mplus1, setmplus1] = useState(0);
  const [mplus2, setmplus2] = useState(0);
  const [mplus3, setmplus3] = useState(0);
  const [mplus4, setmplus4] = useState(0);
  const [mplus5, setmplus5] = useState(0);
  const [mplus6, setmplus6] = useState(0);
  const [mplus7, setmplus7] = useState(0);
  const [moption1, setmoption1] = useState("Hot");
  const [moption2, setmoption2] = useState("Americano");
  const [moption3, setmoption3] = useState("Latte");
  const [moption4, setmoption4] = useState("Macadamia Latte");
  const [moption5, setmoption5] = useState("Melaka Latte");
  const [moption6, setmoption6] = useState("Iced Lychee Tea");
  const [moption7, setmoption7] = useState("Milk Tea");
  const [moption8, setmoption8] = useState("Flakey Butter Croissant");
  const [moption9, setmoption9] = useState("Waffles");
  const [moption10, setmoption10] = useState("Pain au Chocolat");

  const [essential, setessential] = useState(0);
  const [essentialprice, setessentialprice] = useState(400);
  const [plus1, setplus1] = useState(0);
  const [plus2, setplus2] = useState(0);
  const [plus3, setplus3] = useState(0);
  const [essentialtotal, setessentialtotal] = useState(0);
  const [eoption1, seteoption1] = useState("Hot");
  const [eoption2, seteoption2] = useState("Americano");
  const [eoption3, seteoption3] = useState("Latte");
  const [eoption4, seteoption4] = useState("Flakey Butter Croissant");
  const [eoption5, seteoption5] = useState("Waffles");
  const [eoption6, seteoption6] = useState("Pain au Chocolat");

  const [lattebar, setlattebar] = useState(0);
  const [lattebarprice, setlattebarprice] = useState(483);
  const [lattebartotal, setlattebartotal] = useState(0);
  const [lplus1, setlplus1] = useState(0);
  const [lplus2, setlplus2] = useState(0);
  const [lplus3, setlplus3] = useState(0);
  const [lplus4, setlplus4] = useState(0);
  const [lplus5, setlplus5] = useState(0);
  const [loption1, setloption1] = useState("Hot");
  const [loption2, setloption2] = useState("Macadamia Latte");
  const [loption3, setloption3] = useState("Melaka Latte");
  const [loption4, setloption4] = useState("Flakey Butter Croissant");
  const [loption5, setloption5] = useState("Waffles");
  const [loption6, setloption6] = useState("Pain au Chocolat");

  const[text,settext] = useState( {summary:'',bundle1set1:'',price:'',total:'',option1:'',option2:'',option3:'',option4:'',option5:'',option6:''})
  const[text2,settext2] = useState( {summary:'',bundle1set2:'',price:'',total:'',option1:'',option2:'',option3:'',option4:'',option5:'',option6:''})
  const[text3,settext3] = useState( {summary:'',bundle1set3:'',price:'',total:'',option1:'',option2:'',option3:'',option4:'',option5:'',option6:''})
  const[text4,settext4] = useState( {summary:'',bundle1set4:'',price:'',total:'',option1:'',option2:'',option3:'',option4:'',option5:'',option6:'', option7:'',option8:'',option10:'',option9:''})
 
 useEffect(()=>{
  if(essential>0){
    settext({
      summary:`Full House Essential Set x ${essential} = ${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
      bundle3set1:`Full House Essential Set x ${essential}`,
      price:`$${parseFloat(essentialprice + plus1 + plus2 + plus3).toFixed(2)}`,
      total:`$${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
      total2:`${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
      option1:`* ${eoption1}`,
      option2:`* ${eoption2} x ${essential*25}`,
      option3:`* ${eoption3} x ${essential*25}`,
      option4:`* ${eoption4} x ${essential*15}`,
      option5:`* ${eoption5} x ${essential*15}`,
      option6:`* ${eoption6} x ${essential*20}`,
      quant:essential*50

     })
     props.changebundle3set1(
      {
        summary:`Essential Set x ${essential} = ${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
        bundle3set1:`Full House Essential Set x ${essential}`,
        price:`$${parseFloat(essentialprice + plus1 + plus2 + plus3).toFixed(2)}`,
        total:`$${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
        total2:`${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}`,
        option1:`* ${eoption1}`,
        option2:`* ${eoption2} x ${essential*25}`,
        option3:`* ${eoption3} x ${essential*25}`,
        option4:`* ${eoption4} x ${essential*15}`,
        option5:`* ${eoption5} x ${essential*15}`,
        option6:`* ${eoption6} x ${essential*20}`,
        quant:essential*50

         }
     )

  }
  else if(essential<=0){
   settext({
    summary:'',
    bundle3set1:'',
    price:'',
    total:'',
    total2:0,
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:'',
    option6:'',
    quant:essential*50


    })
    props.changebundle3set1(
      {
        summary:'',
        bundle3set1:'',
        price:'',
        total:'',
        total2:0,
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        option5:'',
        option6:'',
        quant:essential*50
    
        }
    )

  } 

 },[essential,eoption1,eoption2,eoption3,eoption4,eoption6,eoption5,plus1,plus2,plus3])

 useEffect(()=>{
  if(lattebar>0){
    settext2({
      summary:`Full House Lattebar Set x ${lattebar} = ${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      bundle3set2:`Full House Lattebar Set x ${lattebar}`,
      price:`$${parseFloat(lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5).toFixed(2)}`,
      total:`$${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      total2:`${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      option1:`* ${loption1}`,
      option2:`* ${loption2} x ${lattebar*25}`,
      option3:`* ${loption3} x ${lattebar*25}`,
      option4:`* ${loption4} x ${lattebar*15}`,
      option5:`* ${loption5} x ${lattebar*15}`,
      option6:`* ${loption6} x ${lattebar*20}`,
      quant:lattebar*50

     })
     props.changebundle3set2({
      summary:`Full House Lattebar Set x ${lattebar} = ${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      bundle3set2:`Full House Lattebar Set x ${lattebar}`,
      price:`$${parseFloat(lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5).toFixed(2)}`,
      total:`$${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      total2:`${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3 + lplus4 + lplus5) * lattebar).toFixed(2)}`,
      option1:`* ${loption1}`,
      option2:`* ${loption2} x ${lattebar*25}`,
      option3:`* ${loption3} x ${lattebar*25}`,
      option4:`* ${loption4} x ${lattebar*15}`,
      option5:`* ${loption5} x ${lattebar*15}`,
      option6:`* ${loption6} x ${lattebar*20}`,
      quant:lattebar*50
     })

  }
  else if(lattebar<=0){
   settext2({
    summary:'',
    bundle3set2:'',
    price:'',
    total:'',
    total2:0,
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:'',
    option6:'',
    quant:lattebar*50

    })
    props.changebundle3set2({
      summary:'',
      bundle3set2:'',
      price:'',
      total:'',
      total2:0,
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      option5:'',
      option6:'',
      quant:lattebar*50
  
      })
  } 

 },[lattebar,loption1,loption2,loption3,loption4,loption5,loption6,lplus1,lplus2,lplus3,lplus4,lplus5])

 useEffect(()=>{
  if(tea>0){
    settext3({
      summary:`Full House Tea Set x ${tea} = ${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      bundle3set3:`Full House Tea Set x ${tea}`,
      price:`$${parseFloat(teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5).toFixed(2)}`,
      total:`$${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      total2:`${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      option1:`* ${toption1}`,
      option2:`* ${toption2} x ${tea*25}`,
      option3:`* ${toption3} x ${tea*25}`,
      option4:`* ${toption4} x ${tea*15}`,
      option5:`* ${toption5} x ${tea*15}`,
      option6:`* ${toption6} x ${tea*20}`,
      quant:tea*50

     })
     props.changebundle3set3({
      summary:`Tea Set x ${tea} = ${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      bundle3set3:`Full House Tea Set x ${tea}`,
      price:`$${parseFloat(teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5).toFixed(2)}`,
      total:`$${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      total2:`${parseFloat((teaprice + tplus1 + tplus2 + tplus3 + tplus4 + tplus5) * tea).toFixed(2)}`,
      option1:`* ${toption1}`,
      option2:`* ${toption2} x ${tea*25}`,
      option3:`* ${toption3} x ${tea*25}`,
      option4:`* ${toption4} x ${tea*15}`,
      option5:`* ${toption5} x ${tea*15}`,
      option6:`* ${toption6} x ${tea*20}`,
      quant:tea*50

     })
  }
  else if(tea<=0){
   settext3({
    summary:'',
    bundle3set3:'',
    price:'',
    total:'',
    total2:0,
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:'',
    option6:'',
    quant:tea*50


    })
    props.changebundle3set3({
      summary:'',
      bundle3set3:'',
      price:'',
      total:'',
      total2:0,
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      option5:'',
      option6:'',
      quant:tea*50

  
      })
  } 

 },[tea,toption1,toption2,toption3,toption4,toption5,toption6,tplus1,tplus2,tplus3,tplus4,tplus5])


 useEffect(()=>{
  if(mixed>0){
    settext4({
      summary:`Full House Mixed Set x ${mixed} = ${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      bundle3set4:`Full House Mixed Set x ${mixed}`,
      price:`$${parseFloat(mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7).toFixed(2)}`,
      total:`$${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      total2:`${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      option1:`* ${moption1}`,
      option2:`* ${moption2} x ${mixed*9}`,
      option3:`* ${moption3} x ${mixed*8}`,
      option4:`* ${moption4} x ${mixed*8}`,
      option5:`* ${moption5} x ${mixed*8}`,
      option6:`* ${moption6} x ${mixed*9}`,
      option7:`* ${moption7} x ${mixed*8}`,
      option8:`* ${moption8} x ${mixed*15}`,
      option9:`* ${moption9} x ${mixed*15}`,
      option10:`* ${moption10} x ${mixed*20}`,
      quant:mixed*50

     })
     props.changebundle3set4({
      summary:`Full House Mixed Set x ${mixed} = ${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      bundle3set4:`Full House Mixed Set x ${mixed}`,
      price:`$${parseFloat(mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7).toFixed(2)}`,
      total:`$${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      total2:`${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2)}`,
      option1:`* ${moption1}`,
      option2:`* ${moption2} x ${mixed*9}`,
      option3:`* ${moption3} x ${mixed*8}`,
      option4:`* ${moption4} x ${mixed*8}`,
      option5:`* ${moption5} x ${mixed*8}`,
      option6:`* ${moption6} x ${mixed*9}`,
      option7:`* ${moption7} x ${mixed*8}`,
      option8:`* ${moption8} x ${mixed*15}`,
      option9:`* ${moption9} x ${mixed*15}`,
      option10:`* ${moption10} x ${mixed*20}`,
      quant:mixed*50

     })
  }
  else if(mixed<=0){
   settext4({
    summary:'',
    bundle3set4:'',
    price:'',
    total:'',
    total2:0,
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    option5:'',
    option6:'',
    option7:'',
    option8:'',
    option9:'',
    option10:'',
    quant:mixed*50


    })
    props.changebundle3set4({
      summary:'',
      bundle3set4:'',
      price:'',
      total:'',
      total2:0,
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      option5:'',
      option6:'',
      option7:'',
      option8:'',
      option9:'',
      option10:'',
      quant:mixed*50
  
      })
  } 

 },[
  mixed,moption1,moption2,moption3,
  moption4,moption5,moption6,moption7,
  moption8,moption9,moption10,mplus1,
  mplus2,mplus3,mplus4,mplus5,mplus6,mplus7])


  useEffect(() => {
    if (props.size == "Regular") {
      setessentialprice(400);
      setteaprice(368);
      setlattebarprice(483);
      setmixedprice(415);
    } else if (props.size == "Small") {
      setessentialprice(350);
      setteaprice(318);
      setlattebarprice(433);
      setmixedprice(365);
    }
  }, [props.size]);

  useEffect(() => {
    if (eoption4 == "Flakey Butter Croissant") {
      setplus1(0);
    } else if (eoption4 == "Ham and Cheese Croissant") {
      setplus1(25.5);
    } else if (eoption4 == "Beef Pastrami Croissant") {
      setplus1(40.5);
    }
  }, [eoption4]);

  useEffect(() => {
    if (eoption5 == "Banana Yoghurt Muffin") {
      setplus2(0);
    } else if (eoption5 == "Ham and Cheese Croissant") {
      setplus2(25.5);
    } else if (eoption5 == "Beef Pastrami Croissant") {
      setplus2(40.5);
    }
  }, [eoption5]);

  useEffect(() => {
    if (eoption6 == "Pain au Chocolat") {
      setplus3(0);
    } else if (eoption6 == "Ham and Cheese Croissant") {
      setplus3(34);
    } else if (eoption6 == "Beef Pastrami Croissant") {
      setplus3(54);
    }
  }, [eoption6]);

  useEffect(() => {
    if (loption2 == "Macadamia Latte") {
      setlplus1(0);
    } else if (loption2 == "Nutella Latte") {
      setlplus1(20);
    } 
  }, [loption2]);
  useEffect(() => {
    if (loption3 == "Melaka Latte") {
      setlplus1(0);
    } else if (loption3 == "Nutella Latte") {
      setlplus1(20);
    } 
  }, [loption3]);

  useEffect(() => {
    if (loption4 == "Flakey Butter Croissant") {
      setlplus1(0);
    } else if (loption4 == "Ham and Cheese Croissant") {
      setlplus1(25.5);
    } else if (loption4 == "Beef Pastrami Croissant") {
      setlplus1(40.5);
    }
  }, [loption4]);

  useEffect(() => {
    if (loption5 == "Banana Yoghurt Muffin") {
      setlplus2(0);
    } else if (loption5 == "Ham and Cheese Croissant") {
      setlplus2(25.5);
    } else if (loption5 == "Beef Pastrami Croissant") {
      setlplus2(40.5);
    }
  }, [loption5]);

  useEffect(() => {
    if (loption6 == "Pain au Chocolat") {
      setlplus3(0);
    } else if (loption6 == "Ham and Cheese Croissant") {
      setlplus3(34);
    } else if (loption6 == "Beef Pastrami Croissant") {
      setlplus3(54);
    }
  }, [loption6]);

  useEffect(() => {
    if (toption2 == "Iced Lychee Tea") {
      settplus1(0);
    } else if (toption2 == "Iced Peach Tea") {
      settplus1(0);
    } else if (toption2 == "Matcha Milk") {
      settplus1(57.5);
    }
  }, [toption2]);

  useEffect(() => {
    if (toption3 == "Milk Tea") {
      settplus1(0);
    } else if (toption3 == "Matcha Milk") {
      settplus1(57.5);
    }
  }, [toption3]);

  useEffect(() => {
    if (toption4 == "Flakey Butter Croissant") {
      settplus1(0);
    } else if (toption4 == "Ham and Cheese Croissant") {
      settplus1(25.5);
    } else if (toption4 == "Beef Pastrami Croissant") {
      settplus1(40.5);
    }
  }, [toption4]);

  useEffect(() => {
    if (toption5 == "Banana Yoghurt Muffin") {
      settplus2(0);
    } else if (toption5 == "Ham and Cheese Croissant") {
      settplus2(25.5);
    } else if (toption5 == "Beef Pastrami Croissant") {
      settplus2(40.5);
    }
  }, [toption5]);

  useEffect(() => {
    if (toption6 == "Pain au Chocolat") {
      settplus3(0);
    } else if (toption6 == "Ham and Cheese Croissant") {
      settplus3(34);
    } else if (toption6 == "Beef Pastrami Croissant") {
      settplus3(54);
    }
  }, [toption6]);

  //mixed

  useEffect(() => {
    if (moption4 == "Macadamia Latte") {
      setmplus1(0);
    } else if (moption4 == "Nutella Latte") {
      setmplus1(6.4);
    }
  }, [moption4]);

  useEffect(() => {
    if (moption5 == "Melaka Latte") {
      setmplus2(0);
    } else if (moption5 == "Nutella Latte") {
      setmplus2(6.4);
    }
  }, [moption5]);

  useEffect(() => {
    if (moption6 == "Iced Lychee Tea") {
      setmplus3(0);
    } else if (moption6 == "Iced Peach Tea") {
      setmplus3(0);
    } else if (moption6 == "Matcha Milk") {
      setmplus3(20.7);
    }
  }, [moption6]);

  useEffect(() => {
    if (moption7 == "Milk Tea") {
      setmplus4(0);
    } else if (moption7 == "Matcha Milk") {
      setmplus4(18.4);
    }
  }, [moption7]);

  useEffect(() => {
    if (moption8 == "Flakey Butter Croissant") {
      setmplus5(0);
    } else if (moption8 == "Ham and Cheese Croissant") {
      setmplus5(25.5);
    } else if (moption8 == "Beef Pastrami Croissant") {
      setmplus5(40.5);
    }
  }, [moption8]);

  useEffect(() => {
    if (moption9 == "Banana Yoghurt Muffin") {
      setmplus6(0);
    } else if (moption9 == "Ham and Cheese Croissant") {
      setmplus6(25.5);
    } else if (moption9 == "Beef Pastrami Croissant") {
      setmplus6(40.5);
    }
  }, [moption9]);

  useEffect(() => {
    if (moption10 == "Pain au Chocolat") {
      setmplus7(0);
    } else if (moption10 == "Ham and Cheese Croissant") {
      setmplus7(25.5);
    } else if (moption10 == "Beef Pastrami Croissant") {
      setmplus7(40.5);
    }
  }, [moption10]);

  return (
    <div className="mt-1 mb-2 col-11 mx-auto row">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="accordion col-12" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id={props.accordion3}>
            <button
              className="accordion-button collapsed d-flex flex-row justify-content-right align-items-center col-12"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={props.accordion2}
              aria-expanded="false"
              aria-controls={props.accordion}
            >
              <div className={styles.picture}>
                <Image
                  src={bundlepic}
                  alt={props.product}
                  width={50}
                  height={50}
                  layout="fixed"
                  className={styles.pic}
                />
              </div>
              <div className="d-flex flex-column col-8  justify-content-between">
                <div>Full House 50 Drinks + 50 Snacks </div>
              </div>
            </button>
          </h2>
          <div
            id={props.accordion}
            className="accordion-collapse collapse"
            aria-labelledby={props.accordion3}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body d-flex flex-column ">
              <div className="d-flex flex-row col-12 justify-content-left mt-2 mb-1  mx-auto row ">
                <small className={styles.detail}>
                  Choose one coffee and one snack to make a bundle for 50
                  people.
                </small>
              </div>
              <div className="d-flex flex-row col-12 justify-content-left mb-3 pb-3 mx-auto row ">
                <div className="mt-3 col-11 mx-auto ">
                  <div className="d-flex flex-column col-11 mt-3">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <strong>
                        1. Essentials Set&nbsp;&nbsp; $
                        {parseFloat(essentialprice + plus1 + plus2 + plus3).toFixed(2) }
                      </strong>
                      <div className="d-flex flex-row stepper col-5">
                        <span
                          className={styles.inputnumberdecrement}
                          onClick={() => {
                            if (essential > 0) {
                              setessential(essential - 1);
                              setessentialtotal(
                                (essentialprice * 10000 * (essential - 1)) /10000);
                            } else {
                              sethot(0);
                              setessentialtotal(0);
                            }
                          }}
                        >
                          –
                        </span>
                        <input
                          type="number"
                          name="essential"
                          value={essential}
                          className="form-control"
                          onChange={(e) => {
                            setessential(parseFloat(e.target.value));
                            setessentialtotal(
                              (essentialprice * 10000 * e.target.value) / 10000);
                          }}
                        />
                        <span
                          className={styles.inputnumberincrement}
                          onClick={() => {
                            setessential(essential + 1);
                            setessentialtotal(
                              (essentialprice * 10000 * (essential + 1)) / 10000
                            );
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-2">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          seteoption1(e.target.value);
                        }}
                        required
                      >
                        <option value="Hot" selected>
                          Hot
                        </option>
                        <option value="Cold">Cold</option>
                      </select>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        required
                      >
                        <option value="Americano" selected>
                          Americano
                        </option>
                      </select>
                      <div className="m-3 col-4">x 25</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          seteoption3(e.target.value);
                        }}
                        required
                      >
                        <option value="Latte" selected>
                          Latte
                        </option>
                        <option value="Flatwhite">Flatwhite</option>
                      </select>
                      <div className="m-3 col-4"> x 25</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          seteoption4(e.target.value);
                        }}
                        required
                      >
                        <option value="Flakey Butter Croissant" selected>
                          Flakey Butter Croissant
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          seteoption5(e.target.value);
                        }}
                        required
                      >
                        <option value="Banana Yoghurt Muffin" selected>
                        Banana Yoghurt Muffin
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          seteoption6(e.target.value);
                        }}
                        required
                      >
                        <option value="Pain au Chocolat" selected>
                          Pain au Chocolat
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 20</div>
                    </div>

                    <div className="mt-3">
                      ${parseFloat((essentialprice + plus1 + plus2 + plus3) * essential).toFixed(2)}
                    </div>
                  </div>
                  <hr className="mt-3" />

                  <div className="d-flex flex-column col-11 mt-5">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <strong>
                        2. Latte Bar Set&nbsp;&nbsp; $
                        {parseFloat(lattebarprice + lplus1 + lplus2 + lplus3).toFixed(2) }
                      </strong>
                      <div className="d-flex flex-row stepper col-5">
                        <span
                          className={styles.inputnumberdecrement}
                          onClick={() => {
                            if (lattebar > 0) {
                              setlattebar(lattebar - 1);
                              setlattebartotal(
                                (lattebarprice * 10000 * (lattebar - 1)) / 10000
                              );
                            } else {
                              setlattebar(0);
                              setlattebartotal(0);
                            }
                          }}
                        >
                          –
                        </span>
                        <input
                          type="number"
                          name="lattebar"
                          value={lattebar}
                          className="form-control"
                          onChange={(e) => {
                            setlattebar(parseFloat(e.target.value));
                            setlattebartotal(
                              (lattebarprice * 10000 * e.target.value) / 10000
                            );
                          }}
                        />
                        <span
                          className={styles.inputnumberincrement}
                          onClick={() => {
                            setlattebar(lattebar + 1);
                            setlattebartotal(
                              (lattebarprice * 10000 * (lattebar + 1)) / 10000
                            );
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-2">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption1(e.target.value);
                        }}
                        required
                      >
                        <option value="Hot" selected>
                          Hot
                        </option>
                        <option value="Cold">Cold</option>
                      </select>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption2(e.target.value);
                        }}
                        required
                      >
                        <option value="Macadamia Latte" selected>
                          Macadamia Latte
                        </option>
                        <option value="Nutella Latte">
                          Nutella Latte +$0.80 each
                        </option>
                      </select>
                      <div className="m-3 col-4"> x 25</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption3(e.target.value);
                        }}
                        required
                      >
                        <option value="Melaka Latte" selected>
                          Melaka Latte
                        </option>
                        <option value="Nutella Latte">
                          Nutella Latte +$0.80 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 25</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption4(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          * choose snack
                        </option>
                        <option value="Flakey Butter Croissant" selected>
                          Flakey Butter Croissant
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption5(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          * choose snack
                        </option>
                        <option value="Banana Yoghurt Muffin" selected>
                        Banana Yoghurt Muffin
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setloption6(e.target.value);
                        }}
                        required
                      >
                        <option value="" disabled selected hidden>
                          * choose snack
                        </option>
                        <option value="Pain au Chocolat" selected>
                          Pain au Chocolat
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 20</div>
                    </div>
                    <div className="mt-3">
                      ${parseFloat((lattebarprice + lplus1 + lplus2 + lplus3) * lattebar).toFixed(2) }
                    </div>
                  </div>
                  <hr className="mt-3" />

                  <div className="d-flex flex-column col-11 mt-5">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <strong>
                        3. Tea Set&nbsp;&nbsp; ${parseFloat(teaprice + tplus1 + tplus2 + tplus3).toFixed(2) }
                      </strong>
                      <div className="d-flex flex-row stepper col-5">
                        <span
                          className={styles.inputnumberdecrement}
                          onClick={() => {
                            if (tea > 0) {
                              settea(tea - 1);
                              setteatotal(
                                (teaprice * 10000 * (tea - 1)) / 10000
                              );
                            } else {
                              settea(0);
                              setteatotal(0);
                            }
                          }}
                        >
                          –
                        </span>
                        <input
                          type="number"
                          id={props.id}
                          name="tea"
                          value={tea}
                          className="form-control"
                          onChange={(e) => {
                            settea(parseFloat(e.target.value));
                            setteatotal(
                              (teaprice * 10000 * e.target.value) / 10000
                            );
                          }}
                        />
                        <span
                          className={styles.inputnumberincrement}
                          onClick={() => {
                            settea(tea + 1);
                            setteatotal((teaprice * 10000 * (tea + 1)) / 10000);
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-2">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption1(e.target.value);
                        }}
                        required
                      >
                        <option value="Hot">Hot</option>
                        <option value="Cold" selected>
                          Cold
                        </option>
                      </select>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption2(e.target.value);
                        }}
                        required
                      >
                        <option value="Iced Lychee Tea" selected>
                          Iced Lychee Tea
                        </option>
                        <option value="Iced Peach Tea">Iced Peach Tea</option>
                        <option value="Matcha Milk">
                          Matcha Milk +$2.30 each
                        </option>
                      </select>
                      <div className="m-3 col-4"> x 25</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption3(e.target.value);
                        }}
                        required
                      >
                        <option value="Milk Tea" selected>
                          Milk Tea
                        </option>
                        <option value="Matcha Milk">
                          Matcha Milk +$2.30 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 25</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption4(e.target.value);
                        }}
                        required
                      >
                        <option value="Flakey Butter Croissant" selected>
                          Flakey Butter Croissant
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption5(e.target.value);
                        }}
                        required
                      >
                        <option value="Banana Yoghurt Muffin" selected>
                        Banana Yoghurt Muffin
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          settoption6(e.target.value);
                        }}
                        required
                      >
                        <option value="Pain au Chocolat" selected>
                          Pain au Chocolat
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 20</div>
                    </div>
                    <div className="mt-3">
                      ${parseFloat((teaprice + tplus1 + tplus2 + tplus3) * tea).toFixed(2)}
                    </div>
                  </div>
                  <hr className="mt-3" />

                  <div className="d-flex flex-column col-11 mt-5">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <strong>
                        4. Mixed Set&nbsp;&nbsp; $ 
                        {parseFloat(mixedprice +
                          mplus1 +
                          mplus2 +
                          mplus3 +
                          mplus4 +
                          mplus5 +
                          mplus6 +
                          mplus7).toFixed(2) }
                      </strong>
                      <div className="d-flex flex-row stepper col-5">
                        <span
                          className={styles.inputnumberdecrement}
                          onClick={() => {
                            if (mixed > 0) {
                              setmixed(mixed - 1);
                              setmixedtotal(
                                (mixedprice * 10000 * (mixed - 1)) / 10000
                              );
                            } else {
                              setmixed(0);
                              setmixedtotal(0);
                            }
                          }}
                        >
                          –
                        </span>
                        <input
                          type="number"
                          name="mixed"
                          value={mixed}
                          className="form-control"
                          onChange={(e) => {
                            setmixed(parseFloat(e.target.value));
                            setmixedtotal(
                              (mixedprice * 10000 * e.target.value) / 10000
                            );
                          }}
                        />
                        <span
                          className={styles.inputnumberincrement}
                          onClick={() => {
                            setmixed(mixed + 1);
                            setmixedtotal(
                              (mixedprice * 10000 * (mixed + 1)) / 10000
                            );
                          }}
                        >
                          +
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between mt-2 mb-2">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption1(e.target.value);
                        }}
                        required
                      >
                        <option value="Hot" selected>
                          Hot
                        </option>
                        <option value="Cold">Cold</option>
                      </select>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption2(e.target.value);
                        }}
                        required
                      >
                        <option value="Americano" selected>
                          Americano
                        </option>
                      </select>
                      <div className="m-3 col-4"> x 9</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption3(e.target.value);
                        }}
                        required
                      >
                        <option value="Latte" selected>
                          Latte
                        </option>
                        <option value="Flatwhite">Flatwhite</option>
                      </select>
                      <div className="m-3 col-4"> x 8</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption4(e.target.value);
                        }}
                        required
                      >
                        <option value="Macadamia Latte" selected>
                          Macadamia Latte
                        </option>
                        <option value="Nutella Latte">
                          Nutella Latte +$0.80 each
                        </option>
                      </select>
                      <div className="m-3 col-4"> x 8</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption5(e.target.value);
                        }}
                        required
                      >
                        <option value="Melaka Latte" selected>
                          Melaka Latte
                        </option>
                        <option value="Nutella Latte">
                          Nutella Latte +$0.80 each
                        </option>
                      </select>
                      <div className="m-3 col-4"> x 8</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption6(e.target.value);
                        }}
                        required
                      >
                        <option value="Iced Lychee Tea" selected>
                          Iced Lychee Tea
                        </option>
                        <option value="Iced Peach Tea">Iced Peach Tea</option>
                        <option value="Matcha Milk">
                          Matcha Milk +$2.30 each
                        </option>
                      </select>

                      <div className="m-3 col-4">x 9</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption7(e.target.value);
                        }}
                        required
                      >
                        <option value="Milk Tea" selected>
                          Milk Tea
                        </option>
                        <option value="Matcha Milk">
                          Matcha Milk +$2.30 each
                        </option>
                      </select>

                      <div className="m-3 col-4">x 8</div>
                    </div>

                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption8(e.target.value);
                        }}
                        required
                      >
                        <option value="Flakey Butter Croissant" selected>
                          Flakey Butter Croissant
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption9(e.target.value);
                        }}
                        required
                      >
                        <option value="Banana Yoghurt Muffin" selected>
                        Banana Yoghurt Muffin
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 15</div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      <select
                        name="entry.1148949922"
                        className={` ${styles.inputbox} form-control col-8`}
                        onChange={(e) => {
                          setmoption10(e.target.value);
                        }}
                        required
                      >
                        <option value="Pain au Chocolat" selected>
                          Pain au Chocolat
                        </option>
                        <option value="Ham and Cheese Croissant">
                          Ham and Cheese Croissant + $1.70 each
                        </option>
                        <option value="Beef Pastrami Croissant">
                          Beef Pastrami Croissant +$2.70 each
                        </option>
                      </select>
                      <div className="m-3 col-4">x 20</div>
                    </div>
                    <div className="mt-3">
                      ${parseFloat((mixedprice +mplus1 +mplus2 +mplus3 +mplus4 +mplus5 +mplus6 +mplus7) *mixed).toFixed(2) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Bundle3);
