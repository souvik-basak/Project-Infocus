import React,{useEffect, useState,useContext} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Data } from '@/pages/_app';

const Campaign = ({image,description,name,id}) => {
  const {wallet,setWallet,chain,setChain,account,setAccount,provider,setProvider,contract,setContract}=useContext(Data);

  const [state,setState]=useState(false);
  useEffect(()=>{
     const loadContents=async()=>{
        const get=await contract.campaignDetail(id+1);
        console.log(get.isAchieved);
        if(get.isAchieved){
          
          setState(true);
        }
     }
     loadContents();

  },[]);

  
  return (
    <div>
        <div className='rounded-lg shadow-md  bg-slate-800 w-96 text-slate-400  h-32 px-2 py-10  my-5 mx-5 flex   flex-row items-center' >
            <div className=' justify-center  px-2 py-2   flex object-contain'> <img src={image} className='object-contain w-40 h-40 rounded-md' alt='Image Here'/></div>
            <div className='flex flex-col mx-3 w-3/5'>
            <h1 className='text-sm ' style={{fontFamily:'Montserrat, sans-serif'}}><b>{name}</b></h1>
            <p className='font-mono text-xs '>{description}</p>
            </div>
            <button className='rounded-md px-3 text-xs py-2 w-2/5 bg-cyan-600 text-white mx-5 my-2 ' ><Link style={{fontFamily:'Montserrat, sans-serif'}}
            href={{
                pathname: "/campaign/"+name,
                query: { id: id }
              }}>{state?"Completed":"Contribute"}</Link></button>
        </div>
    </div>
  )
}

export default Campaign