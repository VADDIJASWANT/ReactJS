import { useState,useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { createBrowserRouter,
   Routes,
    Route,
    Link,
    NavLink,
    RouterProvider,
    Outlet,
    createRoutesFromElements } from 'react-router-dom'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />} >
        <Route index element={<Home />} />
        <Route path="/NewPost" element={<NewPost />} />
        <Route path="/about" element={<About />} >
          <Route path="PostPage" element={<PostPage />} />
          <Route path="Missing" element={<Missing />} />
        </Route>
    </Route>
  )
)

function App() {

  return (
    <div className="App">  

      <Nav />
      <RouterProvider router={router} />
      <Outlet />
      <Footer />  

      
    </div>
  )
}

export default App
