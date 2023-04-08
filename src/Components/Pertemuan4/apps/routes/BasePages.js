import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../../layouts/Layouts'
import Home from '../../modules/components/Homes/Home'
import Explore from '../../modules/components/Explore/Explore'
import Messages from '../../modules/components/Messages/Messages'
import Feeds from '../../modules/components/Explore/widgets/Feeds'
import Reels from '../../modules/components/Explore/widgets/Reels'
import FYP from '../../modules/components/Explore/widgets/FYP'
import Profiles from '../../modules/components/Profiles/Profiles'
import Error404 from '../../layouts/components/error-404/Error404'
import MasterData from '../../modules/components/Master-Data/MasterData'
import { Products } from '../../modules/components/Master-Data/modules/products/Products'
import { UsersAcc }   from '../../modules/components/Master-Data/modules/users/UsersAcc'


export default function BasePages() {
  return (
    <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='explore' element={<Explore />} >
                <Route path="feeds" element={<Feeds />} />
                <Route path="reels" element={<Reels />} />
                <Route path="fyp" element={<FYP />} />
            </Route>
            <Route path='master-data' element={<MasterData />} >
                <Route path="products" element={<Products />} />
                <Route path="usersacc" element={<UsersAcc />} />
            </Route>
            <Route path='messages' element={<Messages />} />
            <Route path='profile' element={<Profiles />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
  )
}