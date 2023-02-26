import Web3Modal from "web3modal";
import React,{useEffect,useContext,useState} from 'react';

import { ethers } from 'ethers';

import { Data } from "@/pages/_app";


const connectingWithWallet = async () => {

    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      return provider;
    } catch (error) {
      console.log("error",error);
    }
  };

const getNewArray=async(getArray,state)=>{
  let array=[];
  console.log("00000000000",getArray)
  if(state.sort=="Fund Need"){
     
  }
  else if(state.sort=="Ending Soon"){

  }
  else{
     array=getArray;
  }

  if(state.display=="Completed"){
     
  }
  else if(state.display=="Not Completed"){
    
  }
  else{
      return(array);
  }
}

export {connectingWithWallet,getNewArray};
