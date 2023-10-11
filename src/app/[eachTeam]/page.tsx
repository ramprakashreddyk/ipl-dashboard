"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
const EachTeamData = () => {
    const { eachTeam } = useParams();
    const [teamData, setTeamData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://apis.ccbp.in/ipl/${eachTeam}`)
                console.log(response.data);
                setTeamData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [eachTeam]);
    return (
        <div>
            {teamData && (
                <div className={`${eachTeam} h-full`}>
                    <div className='flex flex-col pt-12 items-center'>
                        <img src={teamData.team_banner_url} alt="Team Banner" className='px-6 h-[350px] w-[1000px]' />
                    </div>
                    <h1 className='text-white font-bold font-serif ml-52 mt-5'>Latest Matches</h1>
                    <div className='bg-[#1e293b] ml-52 p-10 rounded-lg w-[950px]  '>
                        <div className='flex justify-between gap-10 items-center'>
                            <div>
                                <h1 className='text-white font-bold text-[20px] mt-3 font-serif'>{teamData.latest_match_details.competing_team}</h1>
                                <h1 className='text-white font-bold text-[18px] mt-3 font-serif'>{teamData.latest_match_details.date}</h1>
                                <p className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.venue}</p>
                                <p className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.result}</p>
                            </div>
                            <div>
                                <img src={teamData.latest_match_details.competing_team_logo} className='h-[100px] w-[150px]' />
                            </div>
                        </div>
                        <hr className='border border-3 mt-5 w-full' />
                        <h1 className='text-white font-bold text-[16px] mt-3 font-serif'>First Innings</h1>
                        <h3 className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.first_innings}</h3>
                        <h1 className='text-white font-bold text-[16px] mt-3 font-serif'>Second Innings</h1>
                        <h3 className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.second_innings}</h3>
                        <h1 className='text-white font-bold text-[16px] mt-3 font-serif'>Man Of The Match</h1>
                        <h3 className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.man_of_the_match}</h3>
                        <h1 className='text-white font-bold text-[16px] mt-3 font-serif'>Umpires</h1>
                        <h3 className='text-white font-bold text-[12px] mt-3 font-serif'>{teamData.latest_match_details.umpires}</h3>

                    </div>
                    <div className='flex justify-center'>
                        <div className=' grid grid-cols-2 gap-20 mt-10 justify-center items-center text-center'>
                            {teamData.recent_matches.map((each: any) => {
                                return (
                                    <div className='bg-[#1e293b] h-[350px] w-[290px] cursor-pointer p-10 mt-5 rounded-lg flex flex-col items-center justify-center gap-3'>
                                        <img src={each.competing_team_logo} className='h-[100px] w-[120px]' />
                                        <h1 className='text-white font-bold text-[24px] mt-3 font-serif'>{each.competing_team}</h1>
                                        <p className='text-white font-bold text-[12px] mt-3 font-serif'>{each.result}</p>
                                        <h3 className={`font-bold text-[16px] mt-5 font-serif ${each.match_status === 'Won' ? 'text-green-600' : 'text-red-600'}`}>
                                            {each.match_status}
                                        </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EachTeamData;