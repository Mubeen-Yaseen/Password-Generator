import { useState,useEffect,useRef } from 'react'
import './App.css'

// *************//////////************ */

function Passwordgenerator() {
  const [slidervalue, setslidervalue] = useState(18)
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState('');
  const inputRef =useRef(null)

  const generatePassword=()=>{
const upperlower='AaBbCcDdEeFfGgHhiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'
const symbols='`~!@#$%^&*()_-+=[]{}\\|;:"",.<>/?'
const numeric='0123456789'

let character=''
character+=upperlower
if (char) character+=symbols
if (number) character+=numeric

let Addpassword=''
  for(let i=0;i<slidervalue;i++){
    const randomindex=Math.floor(Math.random() * character.length)
    Addpassword+=character[randomindex]
  }
  setpassword(Addpassword)
  }
  
  const copytoclipboard=()=>{
    if(inputRef.current){
inputRef.current.select();
navigator.clipboard.writeText(password)

}
  }
  useEffect(() => {
    generatePassword();
  }, [slidervalue,char,number]);

  return (
    <>
      <div className='flex flex-col p-5 rounded-lg bg-slate-700 fixed top-12 w-1/3 leading-10' >
        <h1 className='font-bold text-center text-white text-xl mb-2' >Password Generator</h1>
        <span className='flex'>
          <input type="text" className='rounded-l-lg w-96 h-10 outline-none'ref={inputRef} value={password} readOnly />
          <button className='bg-blue-700 rounded-r-lg w-20 font-bold text-white' onClick={copytoclipboard}>Copy</button>
        </span><br />
        <span className='flex space-x-2 text-lime-500 font-bold'>
          <div className="slidecontainer">
            <input type="range" min="1" max="100" value={slidervalue} onChange={(e) => setslidervalue(Number(e.target.value))} className="slider" id="myRange" />
          </div>

          <label htmlFor="range" className='font-bold w-24'>Length({slidervalue})</label>

          <input type="checkbox" className='font-bold' id='number' checked={number} onChange={(e)=>setnumber(e.target.checked)}/>
          <label htmlFor="number">Number</label>

          <input type="checkbox" className='font-bold' id='char' checked={char} onChange={(e)=>setchar(e.target.checked)}/>
          <label htmlFor="char">Character</label>
        </span>
      </div>
    </>
  );
}





export {Passwordgenerator};
