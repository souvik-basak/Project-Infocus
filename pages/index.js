import Image from "next/image";

import Gif from "../images/assest.gif";
import I1 from '../images/I1.jpg';
import I2 from '../images/I2.jpg';
import I3 from '../images/I3.png';



export default function Home() {
  return (
    <>
      <div className="pt-32 bg-slate-900 " style={{height:"100vh"}}>

          <div className=" mx-20 text-slate-400 rounded-lg shadow-md overflow-y-scroll px-10 py-10  items-center bg-slate-800 " style={{height:"77vh"}}>
            <div className='container mx-auto px-20  flex justify-between   items-center place-content-center'>
              <div className=' lg:w-2/5 md:w-1/2  '>
                <h1 className='lg:text-5xl md:text-2xl font-serif'><b>Necessity is the mother of invention...</b></h1>
                <p className='font-mono text-2xl relative top-5'>Our mission is to provide you with the best possible experience and exceed your expectations. 🤝</p>

              </div>
              <div className=''>
                  <Image src={Gif} className='lg:max-w-sm w-96 h-72 '/>
              </div>
           </div>
           <br/>
           <br/>
           <div className="text-center flex flex-row justify-around my-10 ">
                <iframe width="560" height="315" className="rounded-2xl" src="https://www.youtube.com/embed/Oa9aWdcCC4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </div>
           <br/>
           <div className="my-10 text-center ">
              <p><b className="lg:text-5xl md:text-2xl font-serif ">Why to choose Us??</b></p>
              <br/>
              <div className="flex flex-row justify-around ">
                <div className="rounded-md hover:shadow-lg w-80 px-10 py-5">
                     <img src={I1.src} className="rounded-md object-contain w-64 h-56  relative "/>
                     <h1><b className="text-xl">Help Growth!!</b></h1>
                     <p>Help in the growth of the innovative sprit</p>
                </div>
                <div className="rounded-md hover:shadow-lg w-80 px-10 py-5">
                     <img src={I2.src} className="rounded-md object-contain w-64 h-56  relative "/>
                     <h1><b className="text-xl">Help Growth!!</b></h1>
                     <p>Help in the growth of the innovative sprit</p>
                </div>
                <div className="rounded-md hover:shadow-lg w-80 px-10 py-5">
                     <img src={I3.src} className="rounded-md object-contain w-64 h-56  relative "/>
                     <h1><b className="text-xl">Help Growth!!</b></h1>
                     <p>Help in the growth of the innovative sprit</p>
                </div>
              </div>
           </div>
           <br/>
           
    
          
          </div>
          

          
      </div>
    </>
  );
}
