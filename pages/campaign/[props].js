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


const campaign = () => {

  const router =useRouter();

  const {wallet,setWallet,chain,setChain,account,setAccount,provider,setProvider,contract,setContract}=useContext(Data);

  const [image,setImage]=useState();
  const [target,setTarget]=useState();
  const [raise,setRaise]=useState();
  const [contributor,setContributor]=useState();
  const [amt,setAmt]=useState(0);
  const [nft,nftAmt]=useState();
  const [id,setId]=useState();
  const [transaction,setTransaction]=useState([]);
  const [leftDays,setLeftDays]=useState();

  function toWei(amt){
    return(ethers.utils.parseUnits(amt.toString(),'ether'));
  }
  
  useEffect(()=>{
    const loadContents=async()=>{

  try{
     if(wallet && chain){

     const noCampaigns=await contract.noCampaigns();
     const num=router.query.id;

     const getCampaign=await contract.campaignDetail(parseInt(num)+1);
     const campaignDetail=await axios(getCampaign.url);
     console.log("Detail of Campaign",getCampaign);

     const getTransactions=await getCampaign.transactions;

     setTransaction(getTransactions);
     setId(parseInt(num)+1);
     setImage(campaignDetail.data.image);
     nftAmt(ethers.utils.formatUnits(getCampaign.amtNFT));
     setTarget(ethers.utils.formatUnits( getCampaign.target));
     setRaise(ethers.utils.formatUnits( getCampaign.amtRaised));
     setContributor(ethers.utils.formatUnits( getCampaign.noContribution)*(Math.pow(10,18)));
     setLeftDays(()=>checkDate(getCampaign.deadline));
     
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

 const sentAmount=async()=>{
    if(leftDays>0){
    const sendAmount=await contract.contribute(id,{value:toWei(amt),gasLimit: 5000000});
    await sendAmount.wait();
    const setHash=await contract.txHash(id,sendAmount.hash,toWei(amt));
    console.log("The transaction hash",setHash);}
    else{
      window.alert("Time period over");
    }
 }

 const withdraw=async()=>{
  const getCampaign=await contract.campaignDetail(id);
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  try{
    
    const withdraw=await contract.withdraw(id);
    
    window.alert("Amount Withdrawn");
  } 
  
  catch(err){

    window.alert("Some error in withdraw");

  }

 }

  return (
    <>{!wallet?<Wallet/>:!chain?<Chain/>:<>
    <div className='mx-10  py-40 flex flex-wrap flex-row justify-between'>

        <div className='w-96'>

            <div className='rounded-md shadow-md px-5 py-5 bg-slate-800 text-slate-400 w-full '>
                <p className='my-2'>Fund the campaign</p>
                <input type="text" placeholder="Enter the value in ETH" onChange={(event)=>{setAmt(event.target.value)}} className='px-5 my-2 py-2 w-full rounded-md border-solid border-2 outline-none border-yellow-500  bg-slate-800 text-slate-400'/>
                <div className='w-full rounded-md px-2 py-2 bg-slate-300 text-xs my-2 ' >
                    <p><b className='text-slate-900'>Support for the campaign, as you believe it</b></p>
                    <p className='text-slate-900'>Donating {">" +nft}ETH will be reward with the above NFT</p>
                </div>
                <button className='w-full my-2 bg-orange-400 text-center py-2 rounded-md text-slate-900' onClick={sentAmount}>DONATE</button>
            </div>

            <div className='rounded-md shadow-md px-5 py-5 bg-slate-800 text-slate-400 w-full  flex flex-row flex-wrap my-5 justify-center'>
                <div className='w-24 h-24 rounded-md bg-yellow-100 mx-2 '>
                    <div className='h-1/2 text-center px-5 py-5 text-slate-900'>{target}</div>
                    <div className='text-sm text-center bg-slate-300 py-1 px-2 h-1/2 rounded-b-md text-slate-900'>Target in ETH </div>
                </div>
                <div className='w-24 rounded-md bg-yellow-100 h-24 mx-2'>
                    <div className='h-1/2 text-center px-5 py-5 text-slate-900'>{raise}</div>
                    <div className='text-sm text-center bg-slate-300 py-1 px-2 h-1/2 rounded-b-md text-slate-900'>Raised in ETH </div>
                </div>
                <div className='w-24 rounded-md bg-yellow-100 h-24 mx-2 '>
                    <div className='h-1/2 text-center px-5 py-5 text-slate-900'>{contributor}</div>
                    <div className='text-sm text-center bg-slate-300 py-1 px-2 h-1/2 rounded-b-md text-slate-900'>Contributors </div>
                </div>
                <div className='w-24 rounded-md bg-yellow-100 h-24 mx-2 my-2'>
                    <div className='h-1/2 text-center px-5 py-5 text-slate-900'>{Math.floor(leftDays)}</div>
                    <div className='text-sm text-center bg-slate-300 py-1 px-2 h-1/2 rounded-b-md text-slate-900'>Left Days </div>
                </div>
            </div>

            <div className='w-96 my-5'>
              <button className='rounded-md bg-cyan-500 px-5 py-2 font-mono w-full text-xl text-cyan-900' onClick={withdraw}>Withdraw Amount</button>
            </div>
        </div> 

       <div className='w-8/12 '>

            <div className='px-5 flex justify-around  bg-slate-800 text-slate-400 rounded-md shadow-md  items-center  py-5'>
               
               <div className=' w-96 h-60   px-5 py-5  rounded-md' style={{backgroundSize:"cover",backgroundImage:`url(${image})`,backgroundPosition:"center",backgroundRepeat:"no-repeat" }}>
                 
                
            
               </div>
               
            </div>
            
            <div className='px-5  bg-slate-800 text-slate-400 rounded-md shadow-md  items-center  py-5 my-5'>
               <div className='flex justify-between flex-row my-2 px-10' style={{fontFamily:'Montserrat, sans-serif'}}>
                <span><b>Contributor</b></span>
                <span className='relative right-8'><b>Transaction{" "}Hash</b></span>
                <span className='relative right-8'><b>Amount</b></span>
               </div>
               <hr/>
               <div className='my-5 h-96 overflow-y-scroll px-4'>

                {transaction.map((object,id)=>(
                  <div key={id} className='flex justify-between flex-row items-center px-5 shadow-md py-3'><span>
                    <img src={"https://avatars.dicebear.com/api/identicon/"+object.sender+".svg" } className='w-10 rounded-full'/></span><span><Link href={"https://mumbai.polygonscan.com/tx/"+object.txHash}>{(object.txHash).slice(0,5)+"..."+(object.txHash).slice(-5,)}</Link></span><span>{ethers.utils.formatUnits(object.amount)} ETH</span>
                  </div>

                ))}
                  

               </div>
            </div>
       </div>
    </div></>}</>
  )
}

export default campaign;