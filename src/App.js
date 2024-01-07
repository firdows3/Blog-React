import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogInSignUp/LogIn";
import SignUp from "./Components/LogInSignUp/SignUp";
import Blog from "./Components/Blog/Blog";
import AddBlog from "./Components/AddBlog";
import EachBlog from "./Components/Blog/EachBlog";
import reactImage from "./Components/Images/react.png"
import JS from "./Components/Images/js.png"
import cSharp from "./Components/Images/c#.png"
import node from "./Components/Images/node.png"
import About from "./Components/About";
import Footer from "./Components/Footer";


function App() {

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underlined, setUnderlined] = useState(false);
  const [center, setCenter] = useState(false);

  const [blogPostArray, setBlogPostArray] = useState([
    {
        id: 1,
        postTitle: "C# concepts",
        postImage: cSharp,
        postDescription: "The concept of time travel has long been a fascinating and popular topic in science fiction. The idea of being able to travel backward or forward in time, to witness historical events or explore the future, has captured the imagination of people for centuries.",
        isBold: bold,
        isItalic: italic,
        isUnderlined: underlined,
        isCenter: center
      },
    {
        id: 2,
        postTitle: "JavaScript details",
        postImage: JS,
        postDescription: "While time travel remains purely theoretical and has not been proven to be possible, it continues to be a source of endless speculation and creative exploration.",
        isBold: bold,
        isItalic: italic,
        isUnderlined: underlined,
        isCenter: center
      },
    {
        id: 3,
        postTitle: "ReactJs",
        postImage: reactImage,
        postDescription: "One of the most famous theories related to time travel is Albert Einstein's theory of general relativity, which suggests that time is relative and can be affected by gravity and speed. ",
        isBold: bold,
        isItalic: italic,
        isUnderlined: underlined,
        isCenter: center
      },
    {
        id: 4,
        postTitle: "Some about NodeJs",
        postImage: node,
        postDescription: "According to this theory, time dilation occurs when an object is moving at a very high speed or in a strong gravitational field, causing time to pass differently for the moving object compared to a stationary observer. ",
        isBold: bold,
        isItalic: italic,
        isUnderlined: underlined,
        isCenter: center
      },
    {
        id: 5,
        postTitle: "JavaScript overview",
        postImage: JS,
        postDescription: "While this concept has been observed in experiments with high-speed particles and atomic clocks, it has not yet led to the development of a practical time machine.",
        isBold: bold,
        isItalic: italic,
        isUnderlined: underlined,
        isCenter: center
      },
  ]);
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="blog">
              <Route index element={<Blog blogPostArray={blogPostArray} setBlogPostArray={setBlogPostArray} />}/>
              <Route path="addblog" element={<AddBlog blogPostArray={blogPostArray} setBlogPostArray={setBlogPostArray} bold={bold} setBold={setBold} italic={italic} setItalic={setItalic} center={center} setCenter={setCenter} underline={underlined} setUnderline={setUnderlined} />} />
              {
                blogPostArray.map(item => {
                  return <Route path=":id" element={<EachBlog blogPostArray={blogPostArray} setBlogPostarray={setBlogPostArray} />} />
                })
              }
            </Route>
            <Route path="about" element={<About />} />
            <Route path="login" element={<LogIn />}/>
            <Route path="signup" element={<SignUp />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
