import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Data } from '@/pages/_app';
import { AiFillEye } from 'react-icons/ai';


const Campaign = ({ image, description, name, id }) => {

    const { wallet, setWallet, chain, setChain, account, setAccount, provider, setProvider, contract, setContract } = useContext(Data);




    return (
        



            <div className="innovation ">
                <div
                    className="innovation_block flex flex-col "   style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${image})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}>
                    <div className="innovation-block-content font-mono px-5 py-5">
                        <h3 className='text-3xl'>{name}</h3>
                        <p className='text-sm'>{description}</p>
                        <Link href={{
                pathname: "/innovation/"+name,
                query: { id: id }
              }}  className='my-2' ><AiFillEye style={{fontSize:"35px"}}/></Link>
                        

                    </div>

                </div>





        </div>

    )
}

export default Campaign