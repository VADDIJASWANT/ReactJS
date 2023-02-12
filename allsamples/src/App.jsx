import { useState,useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, useHistory } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  )
}

export default App
