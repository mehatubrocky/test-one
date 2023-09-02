import dynamic from 'next/dynamic'
import React from 'react'


const HomeComponents = dynamic(() => import("../../components/Home/homeComponents"));

const HomePage = () => {
  return (
    <div>
        <HomeComponents/>
    </div>
  )
}

export default HomePage