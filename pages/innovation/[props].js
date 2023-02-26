import React,{useContext,useEffect,useState} from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Polygon from '../../images/polygon.png';
import Link from 'next/link';
import Wallet from '@/components/Wallet';
import Chain from '@/components/Chain';
import { ethers } from 'ethers';
import { Data } from '../_app';
import axios from 'axios';
import NFT from '../../images/NFT.jpg'


const innovation = () => {

  const router =useRouter();

  const {wallet,setWallet,chain,setChain,account,setAccount,provider,setProvider,contract,setContract}=useContext(Data);

  const [image,setImage]=useState();
  const [description,setDescription]=useState();
  const [name,setName]=useState();
  const [comments,setComments]=useState([]);
  const [comment,setComment]=useState('');
  const [id,setId]=useState(0);

  function toWei(amt){
    return(ethers.utils.parseUnits(amt.toString(),'ether'));
  }
  
  useEffect(()=>{
    const loadContents=async()=>{

  try{
     if(wallet && chain){

     const num=router.query.id;
     //console.log(num);

     const getI=await contract.showPost(parseInt(num)+1);
     const InnovationDetail=await axios(getI.url);
     console.log("Detail of Campaign",InnovationDetail);
     const comments=await contract.showComments(parseInt(num)+1);
     console.log("000000",comments);
     setId(parseInt(num)+1);
     setComments(comments);
     setName(InnovationDetail.data.name);
     setImage(InnovationDetail.data.image);
     setDescription(InnovationDetail.data.description);

     
   }}
   catch(err){
    console.log(err);
   }

    }
    loadContents();
 },[contract])

  function checkDate(val){
    const date=new Date();
    const dateP=new Date(date).getTime();
    return(((val-dateP)/(1000*3600*24)));
  }

 

  return (
    <>{!wallet?<Wallet/>:!chain?<Chain/>:<>
    <div className='mx-10  py-40 px-40 flex  flex-row justify-between'>
        <div className='w-96 flex flex-col mx-5'>
            <div className='w-full rounded-md object-contain'>
                <img src={image} className='w-96 h-full  rounded-md'/>
            </div>
            <div className='w-full rounded-md bg-slate-500 object-contain shadow-md py-3 px-5 my-5'>
                 <h1 className='text-xl my-1  text-slate-900 font-mono'>{name}</h1>
                 <p className='text-md text-gray-100 font-serif'>{description}</p>
            </div>
            <div className=''>
              <b className='text-xl text-slate-500'>Upload Comment</b>
              <input type="text" placeholder="Write your comment"  className='my-2 w-full px-5 py-2 border-solid border-2 outline-none rounded-md' onChange={(event)=>{setComment(event.target.value)}} />
              <button className='bg-sky-600 text-xl text-slate-300 font-mono w-full px-5 py-2 rounded-md' onClick={async()=>{
                    const upload=await contract.postComment(id,comment);
              }}>Comment</button>
            </div>
        </div>
        <div className='flex flex-col' >
          
            
            {comments.map((object,id)=>(
              <div className='flex flex-row bg-slate-400 w-96 items-center mb-5 rounded-md px-5 h-16 py-2' key={id} >
              <img src={"https://avatars.dicebear.com/api/identicon/"+object.sender+".svg" } className='rounded-full w-10'/>
              <p className='mx-5'>{object.comment}</p>
              </div>
            ))}
        </div>
    </div>

    </>}</>   
  )
}

export default innovation;