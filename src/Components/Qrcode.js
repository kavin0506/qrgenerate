import { useState } from 'react';
import './qrcode.css';

const Qrcode=()=>{
    const[img,setImg]=useState("")
    const[loading,setLoading]=useState(false);
    const[qrgenerate,setQrgenerate]=useState("https://browser.in/");
    

   async function generate(){
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${encodeURIComponent(qrgenerate)}`;
            setImg(url)
        }catch(error){
            console.error("error getting QRcode",error)
        }finally{
            setLoading(false)
        }
    }

   
    return(
        <>
            <div className='container'>
               { loading&&<p>please wait...</p>}
                    { img&&<img src={img}/>}
                <div className='inputvalue'>
                    <label htmlFor='code' className='codeLabel' >Data For QR Code</label>
                    <input type='text' id='code' placeholder='Enter Data for QR Code' value={qrgenerate}
                    onChange={(val)=>setQrgenerate(val.target.value)}/>

                        <button className='generatebtn'disabled={loading} onClick={generate}>Generate QR Code</button>
                      

                   
                </div>

            </div>
        </>
    )
}
export default Qrcode;