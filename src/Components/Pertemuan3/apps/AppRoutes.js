import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layouts from '../layouts/Layouts'
import Home from '../modules/components/Homes/Home'
import Explore from '../modules/components/Explore/Explore'
import Messages from '../modules/components/Messages/Messages'
import Feeds from '../modules/components/Explore/widgets/Feeds'
import Reels from '../modules/components/Explore/widgets/Reels'
import FYP from '../modules/components/Explore/widgets/FYP'
import Profiles from '../modules/components/Profiles/Profiles'
import Login from '../login/Login'
import Error404 from '../modules/components/PesanError/Error404'

export default function AppRoute() {

    const domain = [
        {
            path: 'login',
            element: <Login />
        },
        {
            path: 'home',
            element: <Home />,
        },
        {
            path: 'explore',
            element: <Explore />,
            subDomain: [
                {
                    path: 'feeds',
                    element: <Feeds />,
                },
                {
                    path: 'reels',
                    element: <Reels />,
                },
                {
                    path: 'fyp',
                    element: <FYP />,
                },
            ],
        },
        {
            path: 'messages',
            element: <Messages />,
        },
        {
            path: 'profile',
            element: <Profiles />,
        }
    ]


    return (
        <Routes>
            <Route index element={<Login />} />
            {domain.map(route => (
                <Route
                    path={route.path}
                    element={<Layouts>{route.element}</Layouts>}
                    >
                    {route.subDomain && route.subDomain.map(subRoute => (
                        <Route
                            path={subRoute.path}
                            element={subRoute.element}
                        />
                    ))}
                </Route>
            ))}
            <Route path='*' element={<Layouts><Error404 /></Layouts>} />
        </Routes >
    )
}

export { AppRoute };