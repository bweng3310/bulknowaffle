import Head from "next/head";
import styles from "../styles/Home.module.css";
import Item from "../components/Item";
import { useEffect, useRef } from "react";
import logo from "../public/logo.webp";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import lattebar from "../menu/Lattebar.json";
import Essentials from "../menu/essential.json";
import Coldbrew from "../menu/coldbrew.json";
import food from "../menu/food.json";
import teas from "../menu/Iced taas.json";
import Snack from "../components/Snack";
import Bundle1 from "../components/Bundle1"
import Bundle2 from "../components/Bundle2"
import Bundle3 from "../components/Bundle3"
import Milk from "../components/Milk";
import menu from "../public/menu2.webp"
import  version from '../version'

export default function Home() {
  const myRefs = useRef([]);



  const [summary1, setsummary1] = useState([]);
  const changesummary1 = (ischange) => {
    setsummary1(ischange);
  };
  const changesummary3 = (ischange) => {
    setsummary3(ischange);
  };
  const [summary2, setsummary2] = useState(parseFloat(0).toFixed(2));
  //size regular or small
  const [sizeprice, setsizeprice] = useState("Regular");
  //total quantity
  const [quant, setquant] = useState(0);
  //delevery fee


  //summary:hot item summary text, hot: hot item summary quantity, price1: hot item summary price
  //summary:cold item summary text, cold: cold item summary quantity, price2: cold item summary price

  const [summary3, setsummary3] = useState([])
  console.log(summary3)


  const essential = Essentials.data;
  const coldbrew = Coldbrew.data;
  const food1 = food.data;
  const lattebar1 = lattebar.data;
  const teas1 = teas.data;
  const [dvalue, setDvalue] = useState("");
  const [pickup, setPickup] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [max, setMax] = useState(null);
  const [subtotal, setsubtotal] = useState(0);
  const [menu2, setmenu2] = useState(false);


  //calendar limit
  useEffect(() => {
    var today = new Date();
    var time = today.getHours();

    if (time >= 14) {
      setMax(1);
    } else {
      setMax("");
    }
  }, []);


  console.log(quant);
  console.log(myRefs);








const [bundle1set1, setbundle1set1] = useState({summary:'',bundle1set1:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle1set2, setbundle1set2] = useState({summary:'',bundle1set2:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle1set3, setbundle1set3] = useState({summary:'',bundle1set3:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle1set4, setbundle1set4] = useState({summary:'',bundle1set4:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'', option7:'',option8:'',option10:'',option9:'',quant:0});
const [bundle2set1, setbundle2set1] = useState({summary:'',bundle2set1:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle2set2, setbundle2set2] = useState({summary:'',bundle2set2:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle2set3, setbundle2set3] = useState({summary:'',bundle2set3:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle2set4, setbundle2set4] = useState({summary:'',bundle2set4:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'', option7:'',option8:'',option10:'',option9:'',quant:0});
const [bundle3set1, setbundle3set1] = useState({summary:'',bundle3set1:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle3set2, setbundle3set2] = useState({summary:'',bundle3set2:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle3set3, setbundle3set3] = useState({summary:'',bundle3set3:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'',quant:0});
const [bundle3set4, setbundle3set4] = useState({summary:'',bundle3set4:'',price:'',total:'',total2:0,option1:'',option2:'',option3:'',option4:'',option5:'',option6:'', option7:'',option8:'',option10:'',option9:'',quant:0});
let bundletotal=0

  bundletotal= parseFloat(bundle1set1.total2) + parseFloat(bundle1set2.total2)+
  parseFloat(bundle1set3.total2)+parseFloat(bundle1set4.total2)+
  parseFloat(bundle2set1.total2)+parseFloat(bundle2set2.total2)+
  parseFloat(bundle2set3.total2)+parseFloat(bundle2set4.total2)+
  parseFloat(bundle3set1.total2)+parseFloat(bundle3set2.total2)+
  parseFloat(bundle3set3.total2)+parseFloat(bundle3set4.total2)


let bundlesummary1=[
  bundle1set1.summary,
  bundle1set1.option1,
  bundle1set1.option2,
  bundle1set1.option3,
  bundle1set1.option4,
  bundle1set1.option5,
  bundle1set1.option6,
  bundle1set2.summary,
  bundle1set2.option1,
  bundle1set2.option2,
  bundle1set2.option3,
  bundle1set2.option4,
  bundle1set2.option5,
  bundle1set2.option6,
  bundle1set3.summary,
  bundle1set3.option1,
  bundle1set3.option2,
  bundle1set3.option3,
  bundle1set3.option4,
  bundle1set3.option5,
  bundle1set3.option6,
  bundle1set4.summary,
  bundle1set4.option1,
  bundle1set4.option2,
  bundle1set4.option3,
  bundle1set4.option4,
  bundle1set4.option5,
  bundle1set4.option6,
  bundle1set4.option7,
  bundle1set4.option8,
  bundle1set4.option9,
  bundle1set4.option10,
  bundle2set1.summary,
  bundle2set1.option1,
  bundle2set1.option2,
  bundle2set1.option3,
  bundle2set1.option4,
  bundle2set1.option5,
  bundle2set1.option6,
  bundle2set2.summary,
  bundle2set2.option1,
  bundle2set2.option2,
  bundle2set2.option3,
  bundle2set2.option4,
  bundle2set2.option5,
  bundle2set2.option6,
  bundle2set3.summary,
  bundle2set3.option1,
  bundle2set3.option2,
  bundle2set3.option3,
  bundle2set3.option4,
  bundle2set3.option5,
  bundle2set3.option6,
  bundle2set4.summary,
  bundle2set4.option1,
  bundle2set4.option2,
  bundle2set4.option3,
  bundle2set4.option4,
  bundle2set4.option5,
  bundle2set4.option6,
  bundle2set4.option7,
  bundle2set4.option8,
  bundle2set4.option9,
  bundle2set4.option10,
  bundle3set1.summary,
  bundle3set1.option1,
  bundle3set1.option2,
  bundle3set1.option3,
  bundle3set1.option4,
  bundle3set1.option5,
  bundle3set1.option6,
  bundle3set2.summary,
  bundle3set2.option1,
  bundle3set2.option2,
  bundle3set2.option3,
  bundle3set2.option4,
  bundle3set2.option5,
  bundle3set2.option6,
  bundle3set3.summary,
  bundle3set3.option1,
  bundle3set3.option2,
  bundle3set3.option3,
  bundle3set3.option4,
  bundle3set3.option5,
  bundle3set3.option6,
  bundle3set4.summary,
  bundle3set4.option1,
  bundle3set4.option2,
  bundle3set4.option3,
  bundle3set4.option4,
  bundle3set4.option5,
  bundle3set4.option6,
  bundle3set4.option7,
  bundle3set4.option8,
  bundle3set4.option9,
  bundle3set4.option10,
]

let bundlesummary= bundlesummary1.filter(i=>i!='')


console.log(`bundletotal:${bundletotal}`)
const changebundle1set1 = (ischange) => {
  setbundle1set1(ischange);
};
const changebundle1set2 = (ischange) => {
  setbundle1set2(ischange);
};
const changebundle1set3 = (ischange) => {
  setbundle1set3(ischange);
};
const changebundle1set4 = (ischange) => {
  setbundle1set4(ischange);
};
const changebundle2set1 = (ischange) => {
  setbundle2set1(ischange);
};
const changebundle2set2 = (ischange) => {
  setbundle2set2(ischange);
};
const changebundle2set3 = (ischange) => {
  setbundle2set3(ischange);
};
const changebundle2set4 = (ischange) => {
  setbundle2set4(ischange);
};
const changebundle3set1 = (ischange) => {
  setbundle3set1(ischange);
};
const changebundle3set2 = (ischange) => {
  setbundle3set2(ischange);
};
const changebundle3set3 = (ischange) => {
  setbundle3set3(ischange);
};
const changebundle3set4 = (ischange) => {
  setbundle3set4(ischange);
};

useEffect(()=>{
  console.log(bundle1set1)

},[bundle1set1])



const newArray4 = [];

useEffect(() => {
  let sub = 0
  for(let i=1; i<myRefs.current.length; i++){
    if(myRefs.current[i].innerText.split(',').slice(5,6)!='')
    
    sub = sub +Number(myRefs.current[i].innerText.split(',').slice(5,6))+Number(myRefs.current[i].innerText.split(',').slice(2,3))

  }
  setsubtotal(sub)
}, [sizeprice,summary1]);

let data=[]
let itemtotal=[]
let itemquant=[]
let itemquanttotal=bundle1set1.quant+bundle1set2.quant+bundle1set3.quant
+bundle1set4.quant+bundle2set1.quant+bundle2set2.quant+bundle2set3.quant
+bundle2set4.quant+bundle3set1.quant+bundle3set2.quant+bundle3set3.quant+bundle3set4.quant
let itemtotal2=0
for(let i=1; i<myRefs.current.length; i++){

if(myRefs.current[i].innerText.split(',').slice(0,1)!="" && myRefs.current[i].innerText.split(',').slice(12,13)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(0,1)+ ' = ' +myRefs.current[i].innerText.split(',').slice(12,13))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(24,25))
}
if(myRefs.current[i].innerText.split(',').slice(1,2)!= "" && myRefs.current[i].innerText.split(',').slice(13,14)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(1,2)+ ' = ' +myRefs.current[i].innerText.split(',').slice(13,14))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(25,26))

}
if(myRefs.current[i].innerText.split(',').slice(2,3)!= "" && myRefs.current[i].innerText.split(',').slice(14,15)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(2,3)+ ' = ' +myRefs.current[i].innerText.split(',').slice(14,15))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(26,27))

}
if(myRefs.current[i].innerText.split(',').slice(3,4)!= "" && myRefs.current[i].innerText.split(',').slice(15,16)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(3,4)+ ' = ' +myRefs.current[i].innerText.split(',').slice(15,16))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(27,28))

}
if(myRefs.current[i].innerText.split(',').slice(4,5)!= "" && myRefs.current[i].innerText.split(',').slice(16,17)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(4,5)+ ' = ' +myRefs.current[i].innerText.split(',').slice(16,17))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(28,29))

}
if(myRefs.current[i].innerText.split(',').slice(5,6)!= "" && myRefs.current[i].innerText.split(',').slice(17,18)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(5,6)+ ' = ' +myRefs.current[i].innerText.split(',').slice(17,18))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(29,30))

}
if(myRefs.current[i].innerText.split(',').slice(6,7)!= "" && myRefs.current[i].innerText.split(',').slice(18,19)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(6,7)+ ' = ' +myRefs.current[i].innerText.split(',').slice(18,19))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(30,31))

}
if(myRefs.current[i].innerText.split(',').slice(7,8)!= "" && myRefs.current[i].innerText.split(',').slice(19,20)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(7,8)+ ' = ' +myRefs.current[i].innerText.split(',').slice(19,20))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(31,32))

}
if(myRefs.current[i].innerText.split(',').slice(8,9)!="" && myRefs.current[i].innerText.split(',').slice(20,21)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(8,9)+ ' = ' +myRefs.current[i].innerText.split(',').slice(20,21))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(32,33))

}
else if(myRefs.current[i].innerText.split(',').slice(9,10)!= "" && myRefs.current[i].innerText.split(',').slice(21,22)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(9,10)+ ' = ' +myRefs.current[i].innerText.split(',').slice(21,22))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(33,34))

}
if(myRefs.current[i].innerText.split(',').slice(10,11)!="" && myRefs.current[i].innerText.split(',').slice(22,23)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(10,11)+ ' = ' +myRefs.current[i].innerText.split(',').slice(22,23))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(34,35))

}
if(myRefs.current[i].innerText.split(',').slice(11,12)!= "" && myRefs.current[i].innerText.split(',').slice(23,24)!= ''){
  data.push(myRefs.current[i].innerText.split(',').slice(11,12)+ ' = ' +myRefs.current[i].innerText.split(',').slice(23,24))
  itemtotal.push(myRefs.current[i].innerText.split(',').slice(35,36))

}
 itemquanttotal=itemquanttotal+parseFloat(myRefs.current[i].innerText.split(',').slice(48,49))

}


for(let i=0; i<itemtotal.length; i++){
itemtotal2= itemtotal2+ parseFloat(itemtotal[i])

}

console.log(`data:${data}`)
console.log(itemtotal2)
console.log(itemquanttotal)

console.log(bundletotal)



console.log(newArray4)
  return (
    <div className="bg-warning  ">
      {menu2? 
      <div className={styles.menu}>
       <div className={styles.x} onClick={()=>setmenu2(false)} >X</div>
        <Image
                src={menu}
                alt="bulk order menu"
                className="p-1 mx-auto"
        />

      </div>:<></>}

      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="version" content={version}/>
        <link rel="icon" type="image/x-icon" href="https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/favicon-16x16-1.png"></link>
      </Head>
      <div className="shadow-sm pt-3 pb-3  col-12 col-md-6 col-lg-5 bg-white d-flex flex-column justify-content-center mx-auto">
      <div className="row col-12 mx-auto border-bottom">
          <div className="col-11 mx-auto d-flex flex-row justify-content-left align-items-center  mb-2 pb-1 ">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className={styles.logo}
            />
            <h2 className={`p-2 ${styles.weight}`}>Bulk Order Form</h2>
          </div>
        </div>
        <div className="row col-11 mx-auto mt-3 mb-1">
          <div className="mb-3">
          Your favourite drinks and snacks delivered to you any day of the week &#9749; fill in your order request and we will take care of the rest!
          </div>
          <div className="mb-3 d-flex flex-row" >
          Click here to see our full &nbsp;<h5 onClick={() => setmenu2(true)} className={`${styles.menulink}`}><strong>MENU</strong></h5>
          </div>

          <div><strong>Note:</strong> Minimum order quantity is 30 items </div>

          <div className="d-flex flex-column col-11 align-items-start mt-3 row">
            <h4 className={`mt-5 ${styles.weight}`}>
            Choose Drink Size 
            </h4>
            <div className="mb-2">( All drinks must be of the same size )</div>
          <div className="mt-1 col-12 mx-auto">
            <div className="d-flex flex-row text-secondary ">
              <div style={{margin:"0px 20px 0px 0px"}}>
                <input
                  type="radio"
                  id="Regular"
                  name="entry.303982452"
                  value="Regular"
                  defaultChecked
                  onChange={(e) => setsizeprice(e.target.value)}
                />
                <label style={{margin:"0px 0px 0px 5px"}}>Regular</label>
                <br />
              </div>
              <div>
                <input
                  type="radio"
                  id="Small"
                  name="entry.303982452"
                  value="Small"
                  onChange={(e) => setsizeprice(e.target.value)}
                />
                <label style={{margin:"0px 0px 0px 5px"}}>Small</label>
                <br />
              </div>
            </div>
          </div>
        </div>
        </div>


      </div>
      <form
        className="shadow-sm  pb-5  col-12 col-md-6 col-lg-5 bg-white d-flex flex-column justify-content-center mx-auto"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeYalbHyZ9MT5ttnb1S83RqNGOJzds4Ue7OAnkAJ1yOrvNrIA/formResponse"
        method="POST"
      >





        <div className="d-flex flex-column ">
          {/* <div className='mt-5 mb-2 col-11 mx-auto row'><h4 className={styles.weight}>Menu</h4></div> */}
          <div className="mt-2 col-11 mx-auto row">
            <h4 className={styles.menutitle}>ESSENTIALS</h4>
          </div>
          {essential.map((men) => {return men.milk ?
            <Milk
              ref={(el) => (myRefs.current[men.id] = el)}
              key={men.id}
              num={men.id}
              product={men.name}
              discription={men.shortDescription}
              id={`item${men.id}`}
              accordion={`collapse${men.id}`}
              accordion2={`#collapse${men.id}`}
              accordion3={`heading${men.id}`}
              pic={men.image}
              icelevel={men.ice}
              price={men.regular}
              price2={men.small}
              size={sizeprice}
              extrashot={men.extra}
              availableIn={men.availableIn}
              placeholder={men.placeholder}
              milktitle={men.milktitle}
              milk={men.milk}
              altmilktitle={men.altmilktitle}
              altmilk={men.altmilk}
              summary1={summary1}
              changesummary={changesummary1}
              summary3={summary3}
              setgooglesheet={changesummary3}
            /> :
            <Item
            ref={(el) => (myRefs.current[men.id] = el)}
            key={men.id}
            num={men.id}
            product={men.name}
            discription={men.shortDescription}
            id={`item${men.id}`}
            accordion={`collapse${men.id}`}
            accordion2={`#collapse${men.id}`}
            accordion3={`heading${men.id}`}
            pic={men.image}
            icelevel={men.ice}
            price={men.regular}
            price2={men.small}
            size={sizeprice}
            extrashot={men.extra}
            availableIn={men.availableIn}
            placeholder={men.placeholder}
            milktitle={men.milktitle}
            milk={men.milk}
            altmilktitle={men.altmilktitle}
            altmilk={men.altmilk}
            summary1={summary1}
            changesummary={changesummary1}
            summary3={summary3}
            setgooglesheet={changesummary3}
            />
})}
        </div>
        <div className="d-flex flex-column ">
          <div className="mt-3 col-11 mx-auto row">
            <h4 className={styles.menutitle}>LATTE BAR</h4>
          </div>
          {lattebar1.map((men) => (
            <Milk
              ref={(el) => (myRefs.current[men.id] = el)}
              key={men.id}
              num={men.id}
              product={men.name}
              discription={men.shortDescription}
              id={`item${men.id}`}
              accordion={`collapse${men.id}`}
              accordion2={`#collapse${men.id}`}
              accordion3={`heading${men.id}`}
              pic={men.image}
              icelevel={men.ice}
              extrashot={men.extra}
              price={men.regular}
              price2={men.small}
              size={sizeprice}
              milktitle={men.milktitle}
              milk={men.milk}
              summary1={summary1}
              changesummary={changesummary1}
              summary3={summary3}
              setgooglesheet={changesummary3}
            />
          ))}
        </div>

        <div className="d-flex flex-column ">
          <div className="mt-3 col-11 mx-auto row">
            <h4 className={styles.menutitle}>TEAS</h4>
          </div>
          {teas1.map((men) => {return men.milk ?
            <Milk
              ref={(el) => (myRefs.current[men.id] = el)}
              key={men.id}
              num={men.id}
              product={men.name}
              discription={men.shortDescription}
              id={`item${men.id}`}
              accordion={`collapse${men.id}`}
              accordion2={`#collapse${men.id}`}
              accordion3={`heading${men.id}`}
              pic={men.image}
              icelevel={men.ice}
              price={men.regular}
              price2={men.small}
              size={sizeprice}
              extrashot={men.extra}
              availableIn={men.availableIn}
              placeholder={men.placeholder}
              milktitle={men.milktitle}
              milk={men.milk}
              altmilktitle={men.altmilktitle}
              altmilk={men.altmilk}
              summary1={summary1}
              changesummary={changesummary1}
              summary3={summary3}
              setgooglesheet={changesummary3}
            /> :
            <Item
            ref={(el) => (myRefs.current[men.id] = el)}
            key={men.id}
            num={men.id}
            product={men.name}
            discription={men.shortDescription}
            id={`item${men.id}`}
            accordion={`collapse${men.id}`}
            accordion2={`#collapse${men.id}`}
            accordion3={`heading${men.id}`}
            pic={men.image}
            icelevel={men.ice}
            price={men.regular}
            price2={men.small}
            size={sizeprice}
            extrashot={men.extra}
            availableIn={men.availableIn}
            placeholder={men.placeholder}
            milktitle={men.milktitle}
            milk={men.milk}
            altmilktitle={men.altmilktitle}
            altmilk={men.altmilk}
            summary1={summary1}
            changesummary={changesummary1}
            summary3={summary3}
            setgooglesheet={changesummary3}
            />
})}

        </div>


        <div className="d-flex flex-column ">
          <div className="mt-3 col-11 mx-auto row">
            <h4 className={styles.menutitle}>BOTTLED COLD BREWS</h4>
          </div>
          {coldbrew.map((men) => (
            <Snack
            ref={(el) => (myRefs.current[men.id] = el)}
              key={men.id}
              num={men.id}
              product={men.name}
              discription={men.shortDescription}
              id={`item${men.id}`}
              accordion={`collapse${men.id}`}
              accordion2={`#collapse${men.id}`}
              accordion3={`heading${men.id}`}
              pic={men.image}
              icelevel={men.ice}
              extrashot={men.extra}
              price2={men.size}
              googleformqant={men.googleformqant}
              googleformamount={men.googleformamount}
              summary={summary1}
              googlesheet={summary3}
              setgooglesheet={changesummary3}
              changesummary={changesummary1}
            />
          ))}

        </div>


        <div className="d-flex flex-column ">
          <div className="mt-3 col-11 mx-auto row">
            <h4 className={styles.menutitle}>FOOD</h4>
          </div>

          {food1.map((men) => (
            <Snack
            ref={(el) => (myRefs.current[men.id] = el)}
              key={men.id}
              num={men.id}
              product={men.name}
              discription={men.shortDescription}
              id={`item${men.id}`}
              accordion={`collapse${men.id}`}
              accordion2={`#collapse${men.id}`}
              accordion3={`heading${men.id}`}
              pic={men.image}
              icelevel={men.ice}
              extrashot={men.extra}
              price2={men.size}
              googleformqant={men.googleformqant}
              googleformamount={men.googleformamount}
              summary={summary1}
              googlesheet={summary3}
              setgooglesheet={changesummary3}
              changesummary={changesummary1}
            />
          ))}
        </div>
        <div className="d-flex flex-column ">
<div className="mt-3 col-11 mx-auto row">
  <h4 className={styles.menutitle}>BUNDLES</h4>
</div>

    <Bundle1
    id={`item100`}
    size={sizeprice}
    changebundle1set1={changebundle1set1}
    changebundle1set2={changebundle1set2}
    changebundle1set3={changebundle1set3}
    changebundle1set4={changebundle1set4}
    accordion={`collapse100`}
    accordion2={`#collapse100`}
    accordion3={`heading100`}
    pic='https://images.ctfassets.net/xqnmwkrakjp5/11MrADWQAU677YxEVEAjNx/9ebc85c0d47b60d0596079ce974aa189/new-flat-white.png'
      />
    <Bundle2
      id={`item40`}
      size={sizeprice}
      changebundle2set1={changebundle2set1}
      changebundle2set2={changebundle2set2}
      changebundle2set3={changebundle2set3}
      changebundle2set4={changebundle2set4}
      accordion={`collapse40`}
      accordion2={`#collapse40`}
      accordion3={`heading40`}
      pic='https://images.ctfassets.net/xqnmwkrakjp5/11MrADWQAU677YxEVEAjNx/9ebc85c0d47b60d0596079ce974aa189/new-flat-white.png'

    />   
    <Bundle3
        id={`item50`}
        size={sizeprice}
        changebundle3set1={changebundle3set1}
        changebundle3set2={changebundle3set2}
        changebundle3set3={changebundle3set3}
        changebundle3set4={changebundle3set4}
        accordion={`collapse50`}
        accordion2={`#collapse50`}
        accordion3={`heading50`}
        pic='https://images.ctfassets.net/xqnmwkrakjp5/11MrADWQAU677YxEVEAjNx/9ebc85c0d47b60d0596079ce974aa189/new-flat-white.png'

     />   

</div>


        <div className="row col-11 mx-auto mt-3 mb-3">
          <h5 className={`mb-2 mt-5 ${styles.weight}`}>T&CS:</h5>
          <div className="mb-2">1. Minimum Order Quantity is 30 items </div>

          <div className="mb-2">2. For bulk orders, all drink sizes must be the same </div>

          <div className="mb-2">3. Delivery & pick-up hours are between 9:00am to 5:00pm </div>
          <div className="mb-2">4. Delivery fee is $15 ; for orders $150 and above delivery is free of charge </div>

          <div className="mb-2">
            5. Once payment has been made, all bulk orders are final and cannot be changed
          </div>
          <div className="mb-2">
            6. Full payment must be made via bank transfer or Paynow upon order confirmation by an authorised representative of Flash Coffee via email or text
          </div>
          <div className="mb-2">
            7. Cancellation of confirmed orders within 10 days of delivery date is strictly not allowed
            </div>
          <div className="mb-2">
            8. We aim to complete every bulk order request when possible, kindly note we reserve the right to decline any order due to availability of resources
          </div>
          
        </div>

        <div className="form-group col-11 mx-auto  d-flex row justify-content-between">
          <div className="mx-auto row d-flex justify-content-end col-12 ">
            <h4 className={`mb-2 mt-5 mb-3 ${styles.weight}`}>Summary</h4>

            <div className="form-group col-12">
              <div>
                <div className="d-flex flex-row justify-content-between">
                  <div>Size</div>
                  <div>{sizeprice}</div>
                </div>
                {bundle1set1?
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between">
                      <div>{bundle1set1.bundle1set1}</div>
                      <div>{bundle1set1.total}</div>
                  </div>
                      <div>
                        <div>{bundle1set1.option1}</div>
                        <div>{bundle1set1.option2}</div>
                        <div>{bundle1set1.option3}</div>
                        <div>{bundle1set1.option4}</div>
                        <div>{bundle1set1.option5}</div>
                        <div>{bundle1set1.option6}</div>

                      </div>
                    </div>: <></>}

                    {bundle1set2?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle1set2.bundle1set2}</div>
                    <div>{bundle1set2.total}</div>
                </div>
                    <div>
                      <div>{bundle1set2.option1}</div>
                      <div>{bundle1set2.option2}</div>
                      <div>{bundle1set2.option3}</div>
                      <div>{bundle1set2.option4}</div>
                      <div>{bundle1set2.option5}</div>
                      <div>{bundle1set2.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle1set3?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle1set3.bundle1set3}</div>
                    <div>{bundle1set3.total}</div>
                </div>
                    <div>
                      <div>{bundle1set3.option1}</div>
                      <div>{bundle1set3.option2}</div>
                      <div>{bundle1set3.option3}</div>
                      <div>{bundle1set3.option4}</div>
                      <div>{bundle1set3.option5}</div>
                      <div>{bundle1set3.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle1set4?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle1set4.bundle1set4}</div>
                    <div>{bundle1set4.total}</div>
                </div>
                    <div>
                      <div>{bundle1set4.option1}</div>
                      <div>{bundle1set4.option2}</div>
                      <div>{bundle1set4.option3}</div>
                      <div>{bundle1set4.option4}</div>
                      <div>{bundle1set4.option5}</div>
                      <div>{bundle1set4.option6}</div>
                      <div>{bundle1set4.option7}</div>
                      <div>{bundle1set4.option8}</div>
                      <div>{bundle1set4.option9}</div>
                      <div>{bundle1set4.option10}</div>
                    </div>
                  </div>: <></>}
                    {bundle2set1?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle2set1.bundle2set1}</div>
                    <div>{bundle2set1.total}</div>
                </div>
                    <div>
                      <div>{bundle2set1.option1}</div>
                      <div>{bundle2set1.option2}</div>
                      <div>{bundle2set1.option3}</div>
                      <div>{bundle2set1.option4}</div>
                      <div>{bundle2set1.option5}</div>
                      <div>{bundle2set1.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle2set2?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle2set2.bundle2set2}</div>
                    <div>{bundle2set2.total}</div>
                </div>
                    <div>
                      <div>{bundle2set2.option1}</div>
                      <div>{bundle2set2.option2}</div>
                      <div>{bundle2set2.option3}</div>
                      <div>{bundle2set2.option4}</div>
                      <div>{bundle2set2.option5}</div>
                      <div>{bundle2set2.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle2set3?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle2set3.bundle2set3}</div>
                    <div>{bundle2set3.total}</div>
                </div>
                    <div>
                      <div>{bundle2set3.option1}</div>
                      <div>{bundle2set3.option2}</div>
                      <div>{bundle2set3.option3}</div>
                      <div>{bundle2set3.option4}</div>
                      <div>{bundle2set3.option5}</div>
                      <div>{bundle2set3.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle2set4?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle2set4.bundle2set4}</div>
                    <div>{bundle2set4.total}</div>
                </div>
                    <div>
                      <div>{bundle2set4.option1}</div>
                      <div>{bundle2set4.option2}</div>
                      <div>{bundle2set4.option3}</div>
                      <div>{bundle2set4.option4}</div>
                      <div>{bundle2set4.option5}</div>
                      <div>{bundle2set4.option6}</div>
                      <div>{bundle2set4.option7}</div>
                      <div>{bundle2set4.option8}</div>
                      <div>{bundle2set4.option9}</div>
                      <div>{bundle2set4.option10}</div>
                    </div>
                  </div>: <></>}
                    {bundle3set1?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle3set1.bundle3set1}</div>
                    <div>{bundle3set1.total}</div>
                </div>
                    <div>
                      <div>{bundle3set1.option1}</div>
                      <div>{bundle3set1.option2}</div>
                      <div>{bundle3set1.option3}</div>
                      <div>{bundle3set1.option4}</div>
                      <div>{bundle3set1.option5}</div>
                      <div>{bundle3set1.option6}</div>

                    </div>
                  </div>: <></>}

                    {bundle3set2?
                  <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between">
                      <div>{bundle3set2.bundle3set2}</div>
                      <div>{bundle3set2.total}</div>
                  </div>
                      <div>
                        <div>{bundle3set2.option1}</div>
                        <div>{bundle3set2.option2}</div>
                        <div>{bundle3set2.option3}</div>
                        <div>{bundle3set2.option4}</div>
                        <div>{bundle3set2.option5}</div>
                        <div>{bundle3set2.option6}</div>
  
                      </div>
                    </div>: <></>}

                    {bundle3set3?
                  <div className="d-flex flex-column">
                  <div className="d-flex flex-row justify-content-between">
                      <div>{bundle3set3.bundle3set3}</div>
                      <div>{bundle3set3.total}</div>
                  </div>
                      <div>
                        <div>{bundle3set3.option1}</div>
                        <div>{bundle3set3.option2}</div>
                        <div>{bundle3set3.option3}</div>
                        <div>{bundle3set3.option4}</div>
                        <div>{bundle3set3.option5}</div>
                        <div>{bundle3set3.option6}</div>
  
                      </div>
                    </div>: <></>}

                    {bundle3set4?
                <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                    <div>{bundle3set4.bundle3set4}</div>
                    <div>{bundle3set4.total}</div>
                </div>
                    <div>
                      <div>{bundle3set4.option1}</div>
                      <div>{bundle3set4.option2}</div>
                      <div>{bundle3set4.option3}</div>
                      <div>{bundle3set4.option4}</div>
                      <div>{bundle3set4.option5}</div>
                      <div>{bundle3set4.option6}</div>
                      <div>{bundle3set4.option7}</div>
                      <div>{bundle3set4.option8}</div>
                      <div>{bundle3set4.option9}</div>
                      <div>{bundle3set4.option10}</div>
                    </div>
                  </div>: <></>}
                {myRefs.current.map((men, i) => (
                  <div key={i}>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(0, 1)}</div>
                      <div>{men.innerText.split(",").slice(12, 13)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(1, 2)}</div>
                      <div>{men.innerText.split(",").slice(13, 14)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(2, 3)}</div>
                      <div>{men.innerText.split(",").slice(14, 15)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(3, 4)}</div>
                      <div>{men.innerText.split(",").slice(15, 16)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(4, 5)}</div>
                      <div>{men.innerText.split(",").slice(16, 17)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(5, 6)}</div>
                      <div>{men.innerText.split(",").slice(17, 18)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(6, 7)}</div>
                      <div>{men.innerText.split(",").slice(18, 19)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(7, 8)}</div>
                      <div>{men.innerText.split(",").slice(19, 20)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(8, 9)}</div>
                      <div>{men.innerText.split(",").slice(20, 21)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(9, 10)}</div>
                      <div>{men.innerText.split(",").slice(21, 22)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(10, 11)}</div>
                      <div>{men.innerText.split(",").slice(22, 23)}</div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div>{men.innerText.split(",").slice(11, 12)}</div>
                      <div>{men.innerText.split(",").slice(23, 24)}</div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="mt-3" />

              <div>
              <div className="d-flex flex-row justify-content-between">

                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>Subtotal</div>
                  <div>$ {(parseFloat(itemtotal2+bundletotal)).toFixed(2)}</div>
                </div>


                <div className="d-flex flex-row justify-content-between">
                  <div>Tax</div>
                  <div>$ {((parseFloat(itemtotal2+bundletotal)) * 0.07).toFixed(2)}</div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div>Delivery Fee</div>
                  {(parseFloat(itemtotal2+bundletotal)).toFixed(2)<= 150 ? <div>$ 15.00</div> : <div>$ 0.00</div>}
                </div>
                {(parseFloat(itemtotal2+bundletotal)).toFixed(2)<= 150 ?
                <div className="d-flex flex-row justify-content-between">

                  <div>Total Amount</div>
                  <div>
                    $ {parseFloat((parseFloat(itemtotal2+bundletotal)) + ((parseFloat(itemtotal2+bundletotal)) * 0.07)+ 15.00).toFixed(2)}
                  </div>
                </div> :
                                <div className="d-flex flex-row justify-content-between">

                                <div>Total Amount</div>
                                <div>
                                  $ {parseFloat((parseFloat(itemtotal2+bundletotal)) + ((parseFloat(itemtotal2+bundletotal)) * 0.07)).toFixed(2)}
                                </div>
                              </div> 
                
                }
              </div>

              <textarea
                name="entry.397107625"
                rows="8"
                style={{ display: "none" }}
                value={`${data.join("\n")}\n${bundlesummary.join('\n')}`}
                className="form-control"
              ></textarea>
            </div>
            <input
              type="text"
              style={{ display: "none" }}
              name="entry.303982452"
              value={sizeprice}
            />

            <input
              type="text"
              style={{ display: "none" }}
              name="entry.250401721"
              value={(parseFloat(itemtotal2+bundletotal)).toFixed(2)}
            />
            <input
              type="text"
              style={{ display: "none" }}
              name="entry.175042351"
              value={((parseFloat(itemtotal2+bundletotal)) * 0.07).toFixed(2)}
            />
              {(parseFloat(itemtotal2+bundletotal)).toFixed(2)<= 150 ?

              <input
              type="text"
              style={{ display: "none" }}
              name="entry.1763878664"
              value="15.00"
            />:
            <input
            type="text"
            style={{ display: "none" }}
            name="entry.1763878664"
            value="0.00"
          />}
            {(parseFloat(itemtotal2+bundletotal)).toFixed(2)<= 150 ?
            <input
              type="text"
              style={{ display: "none" }}
              name="entry.36309290"
              value={
                parseFloat((parseFloat(itemtotal2+bundletotal)) + ((parseFloat(itemtotal2+bundletotal)) * 0.07)+15.00).toFixed(2)
              }
            /> :
            <input
            type="text"
            style={{ display: "none" }}
            name="entry.36309290"
            value={
              parseFloat((parseFloat(itemtotal2+bundletotal)) + ((parseFloat(itemtotal2+bundletotal)) * 0.07)).toFixed(2)
            }
          />}
          </div>
          <h4 className={`mt-5 mb-2 ${styles.weight}`}>Contact Information</h4>

          <div className="form-group col-12  mt-4">
            <input
              type="text"
              name="entry.1342818684"
              className={` ${styles.inputbox} form-control`}
              id="name"
              placeholder="* Name or Company Name"
              required
            />
          </div>
          <div className="form-group col-12 mt-4">
            <input
              type="text"
              name="entry.2045252734"
              className={` ${styles.inputbox} form-control`}
              id="phone"
              placeholder="* Phone Number"
              required
            />
          </div>

          <div className="form-group col-12 mx-auto mt-4">
            <input
              type="email"
              name="entry.1328942338"
              className={` ${styles.inputbox} form-control`}
              id="email"
              placeholder="* Email Address"
              required
            />
          </div>
          <div className="form-group col-12 mx-auto mt-4">
            <input
              type="text"
              name="entry.885610465"
              className={` ${styles.inputbox} form-control`}
              id="phone"
              placeholder="Whatsapp"
            />
          </div>
          <div className="form-group  col-12 mt-4">
            <select
              name="entry.1999554940"
              className={` ${styles.inputbox} form-control`}
              id="contact"
              required
            >
              <option value="" disabled selected hidden>
                * Preferred Mode of Contact{" "}
              </option>
              <option value="Phone">Phone</option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Email">Email</option>

            </select>

            <h4 className={`mb-2 mt-5 ${styles.weight}`}>
              Pick Up / Delivery Information
            </h4>
            <div className="form-group  col-12 mt-4">
              <select
                name="entry.1713474195"
                className={`${styles.inputbox} form-control `}
                required
                onChange={(e) => {
                  setDvalue(e.target.value);
                }}
              >
                <option className={styles.options} value="" disabled selected>
                  * Pickup or Delivery
                </option>
                <option value="Pickup">Pick up</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className=" col-11 mx-auto d-flex flex-row justify-content-between row">
            <div className="form-group col-12 col-md-6 mt-4">
              <input
                type="text"
                name="entry.1869244443"
                className={` ${styles.inputbox} form-control`}
                id="name"
                placeholder="* Person in Charge"
                required
              />
            </div>
            <div className="form-group col-12 col-md-6 mt-4">
              <input
                type="text"
                name="entry.1469476807"
                className={` ${styles.inputbox} form-control`}
                id="phone"
                placeholder="* Phone Number"
                required
              />
            </div>

            {dvalue === "Delivery" ? (
              <div className="form-group col-12 mx-auto mt-4">
                <input
                  type="text"
                  name="entry.518934833"
                  className={` ${styles.inputbox} form-control`}
                  id="address"
                  placeholder={`* ${dvalue} Address`}
                  required
                />
              </div>
            ) : (
              <></>
            )}

            {dvalue === "Pickup" ? (
              <div className="form-group col-12 mt-4">
                <select
                  name="entry.1986033649"
                  className={` ${styles.inputbox} form-control`}
                >
                  <option value="" disabled selected hidden>
                    * Store
                  </option>
                  <option value="166 Bukit Merah Central">166 Bukit Merah Central</option>
                  <option value="Alexandra Techno Park">Alexandra Techno Park</option>
                  <option value="AMK Hub">AMK Hub</option>
                  <option value="Changi Airport Terminal 3">Changi Airport Terminal 3</option>
                  <option value="Changi City Point">Changi City Point</option>
                  <option value="CityLink">CityLink</option>
                  <option value="Cross Street (China Square)">Cross Street (China Square)</option>
                  <option value="Guoco Tower">Guoco Tower</option>
                  <option value="I12 Katong">I12 Katong</option>
                  <option value="International Plaza">International Plaza</option>
                  <option value="JEM">JEM</option>
                  <option value="Jurong Point">Jurong Point</option>
                  <option value="Keppel Bay Tower">Keppel Bay Tower</option>
                  <option value="Lot One">Lot One</option>
                  <option value="Lucky Plaza">Lucky Plaza</option>
                  <option value="Marina Bay Link Mall">Marina Bay Link Mall</option>
                  <option value="Millenia Walk">Millenia Walk</option>
                  <option value="Munch @ Lau Pa Sat">Munch @ Lau Pa Sat</option>
                  <option value="NUS">NUS</option>
                  <option value="One George Street">One George Street</option>
                  <option value="One Raffles Place">One Raffles Place</option>
                  <option value="Orchardgateway">Orchardgateway</option>
                  <option value="Oxley Tower">Oxley Tower</option>
                  <option value="Plaza Singapura">Plaza Singapura</option>
                  <option value="PLUS">PLUS</option>
                  <option value="Royal Group Building">Royal Group Building</option>
                  <option value="SPACE @ Kovan">SPACE @ Kovan</option>
                  <option value="Tampines One">Tampines One</option>
                  <option value="Toa Payoh">Toa Payoh</option>
                  <option value="VivoCity">VivoCity</option>
                </select>
              </div>
            ) : (
              <></>
            )}

            <div className="form-group col-12 mt-4 d-flex flex-column ">
              {/* <label>{dvalue} date</label> */}
              <DatePicker
                dateFormat="yyyy-MM-dd"
                onChange={(date) => setStartDate(date)}
                selected={startDate}
                placeholderText="* Date"
                id="datefield2"
                maxDate={
                  max ? addDays(new Date(), 61) : addDays(new Date(), 60)
                }
                minDate={max ? addDays(new Date(), 2) : addDays(new Date(), 1)}
                name="entry.1866122826"
                className={` ${styles.inputbox} form-control`}
                required
              />
            </div>

            <div className="form-group col-md-6 col-sm-12 mt-4">
              <select
                name="entry.1415019100"
                className={` ${styles.inputbox} form-control`}
                required
              >
                <option value="" disabled selected hidden>
                  * Time
                </option>
                <option value="9:00~9:30">9:00~9:30</option>
                <option value="9:30~10:00">9:30~10:00</option>
                <option value="10:00~10:30">10:00~10:30</option>
                <option value="10:30~11:00">10:30~11:00</option>
                <option value="11:00~11:30">11:00~11:30</option>
                <option value="11:30~12:00">11:30~12:00</option>
                <option value="12:00~12:30">12:00~12:30</option>
                <option value="12:30~13:00">12:30~13:00</option>
                <option value="13:00~13:30">13:00~13:30</option>
                <option value="13:30~14:00">13:30~14:00</option>
                <option value="14:00~14:30">14:00~14:30</option>
                <option value="14:30~15:00">14:30~15:00</option>
                <option value="15:00~15:30">15:00~15:30</option>
                <option value="15:30~16:00">15:30~16:00</option>
                <option value="16:00~16:30">16:00~16:30</option>
                <option value="16:30~17:00">16:30~17:00</option>
              </select>
            </div>

            <div className="form-group col-md-6 col-sml-12 mt-4">
              <select
                name="entry.1404110363"
                className={` ${styles.inputbox} form-control`}
                required
              >
                <option value="" disabled selected hidden>
                  * Payment Type
                </option>
                <option value="BankTransfer">Bank Transfer</option>
                <option value="Paynow">Paynow</option>
              </select>
            </div>

            <div className="mx-auto row d-flex justify-content-end">
              <h5 className={`mb-2 mt-5 ${styles.weight}`}>Reminders</h5>
              <div>
                Minimum order quantity is 30 items.{" "}
              </div>
              <div>
                We will contact you with your payment instruction within 24-48
                hours.{" "}
              </div>
              <div>
                We will only confirm your order after we have received your
                payment.{" "}
              </div>
              <div className="mb-5">
                For urgent matters please contact us via WhatsApp (+852 9778 6691){" "}
              </div>
            </div>

            <div className="mx-auto row d-flex justify-content-end">
              {itemquanttotal>=30 ?
                     <button
                    type="submit"
                    className={`${styles.send} btn col-12  mt-5`}
                    >
                    SEND ORDER REQUEST
                   </button>
:
                          <div className={`${styles.send1} btn col-12  mt-5`}>
                             SEND ORDER REQUEST
                          </div>}


            </div>
          </div>
        </div>
      </form>
    </div>
  );
}





