"use client"
import React from 'react'
import { getAllTeams } from '../../redux/features/auth-slice'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useEffect } from 'react'
import Link from 'next/link'

const HomePage = () => {
  const dispatch = useDispatch();
  const { allTeams } = useSelector((state: any) => state.auth)
  console.log(allTeams);
  useEffect(() => {
    dispatch(getAllTeams())
  }, [])
  const TeamColor: any = {
    RCB: "hover:bg-[#a4261d]",
    KKR: "hover:bg-[#3A225D]",
    SH: "hover:bg-[#f26d22]",
    CSK: "hover:bg-[#f7db00]",
    RR: "hover:bg-[#da237b]",
    KXP: "hover:bg-[#d91c1f]",
    MI: "hover:bg-[#004B8D]",
    DC: "hover:bg-[#4f5db0]",
  }
  return (
    <div className='bg-image'>
      <div className='flex justify-center items-center pt-[100px]'>
        <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png" height="80px" width="50px" alt='image logo' className='mr-4 pb-3' />
        <h1 className='text-4xl text-white font-bold'>IPL DASHBOARD</h1>
      </div>
      <div className='flex justify-center pb-6'>
        <div className="grid grid-cols-2 gap-6 mx-8 ">
          {allTeams?.teams?.map((each: any) => (
            <div className={`${TeamColor[each.id]} transition-all delay-75 duration-150 ease-in flex items-center justify-center  w-[290px]  border-2 border-white-500 bg-gradient-to-r from-transparent-300 to-blue-200 text-white rounded-lg p-4 shadow-md `}>
              <Link href={`${each.id}`} className="flex items-center justify-center cursor-pointer ">
                <img src={each.team_image_url} alt={each.name} className="w-16 h-16 rounded-full mr-4" />
                <h3 className="text-xl font-semibold">{each.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomePage;
