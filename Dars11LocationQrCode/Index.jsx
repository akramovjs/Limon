import React, { useEffect, useState } from 'react'
// import "./Style.css"
const Index = () => {
    const [first, setfirst] = useState("")
    const [second, setsecond] = useState("")
    const [qr, setqr] = useState("")
    const [rang, setrang] = useState("")
useEffect(() => {
setqr(`http://api.qrserver.com/v1/create-qr-code/?data=${second}&size=${""}x${""}&bgcolor=${rang}`)
}, [second,rang])
const hand =()=>{
    setsecond(first)
}
  return (
    <div>
          <input type="search" className='input1 m-2' onChange={(w)=> setfirst(w.target.value)}/>
          <button onClick={hand} className="btn btn-dark m-2">Show</button>  
          <div className='qr'>
          <img src={qr} alt="" className='m-2' />
          <div>
          <a href={qr} download="QrCode">
            <button className='btn btn-primary m-2'>Download</button>
          </a>
          <input type="color"  className='inpc' onChange={(e)=> setrang(e.target.value.substring(1))} />
          </div>
          </div>
        <iframe src='https://maps.google.com/maps?q=kokand&t=&z=13&ie=UTF8&iwloc=&output=embed' frameborder="0" marginHeight="0" marginWidth="0" scrolling='no' width="100%" height="500" id='gmap_canvas'></iframe>
    </div>
  )
}
export default Index