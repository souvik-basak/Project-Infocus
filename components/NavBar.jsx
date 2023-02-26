import React,{useEffect,useContext,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHandsHelping} from 'react-icons/fa';
import { Data } from '@/pages/_app';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';
//import { connectingWithWallet } from './function';
import Contract from '../artifacts/contracts/InFocus.sol/InFocus.json';



const NavBar = () => {
  
  const {wallet,setWallet,chain,setChain,account,setAccount,provider,setProvider,contract,setContract}=useContext(Data);
  
  useEffect(()=>{
    const loadContents=async()=>{
      
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });



      if(accounts.length>0){

        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract=new ethers.Contract('0x11d80Ca46DF8755aaAB36Be5E2AC9a263FC0B1e8',Contract.abi,signer);

      
        setAccount(accounts[0]);
        setWallet(true);
        setProvider(provider);
        setContract(contract);
        
      }
    }
    loadContents();
  },[]);
 
  async function connectWallet(){
      
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      
    } catch (error) {
      console.log("error",error);
    }

  }
  

  return (
    <div className='w-screen  z-20 py-5  fixed  bg-slate-900'  >
    <div className=' flex justify-between items-center mx-10  bg-slate-800 text-gray-100 shadow-lg px-10 py-5 bord rounded-lg'>
       <div className=''>
         <Link href="/" ><div className='text-3xl hover:text-cyan-600 font-mono'>InFocus</div></Link>
       </div>
       <div className='w-3/6 justify-around flex '>
          <Link href="/" className='tracking-widest hover:bg-cyan-600 px-5 py-2 rounded-md '>HOME</Link>
          <Link href="/create" className='tracking-widest hover:bg-cyan-600 px-5 py-2 rounded-md '>CREATE CAMP</Link>
          <Link href="/campaigns" className='tracking-widest hover:bg-cyan-600 px-5 py-2 rounded-md '>CAMPS</Link>
          <Link href="/createProject" className='tracking-widest hover:bg-cyan-600 px-5 py-2 rounded-md '>INNOVATE</Link>

          <Link href="/innovation" className='tracking-widest hover:bg-cyan-600 px-5 py-2 rounded-md '>PROJECT</Link>

       </div>
       <div className=''>
           <button className='py-2 px-5 rounded-md shadow-md bg-cyan-600 'onClick={connectWallet} >
            {account=='Connect Wallet'?account:account.slice(0,5)+"..."+account.slice(-5,)}
           </button>
       </div>
    </div>
  </div>
  )
}

export default NavBar