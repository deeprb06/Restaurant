// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello react';
// const root = document.getElementById('root');
// root.appendChild(heading);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './src/components/About';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import RestaruntMenu from './src/components/RestaruntMenu';
import Profile from './src/components/Profile';
import Shimmer from './src/components/Shimmer';
import store from './src/utils/store';
import { Provider } from 'react-redux';
import Cart from './src/components/Cart';


// Lazy loading
// chunking
// code spliting
// dynamic import
const Instamart = React.lazy(() => import('./src/components/Instamart'));

const AppLayout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                ],
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restarunt/:id',
                element: <RestaruntMenu />,
            },
            {
                path: '/instamart',
                element: (
                    <React.Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </React.Suspense>
                ),
            },
            {
                path: '/cart',
                element: <Cart/>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
