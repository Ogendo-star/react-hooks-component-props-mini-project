// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { blogData } from '../data/blog';

function App() {
  const defaultData = {
    name: "My Blog",
    image: "https://via.placeholder.com/215",
    about: "Welcome to my blog!",
    posts: []
  };

  
  const data = blogData || defaultData;

  return (
    <div className="App">
      <Header name={data.name} />
      <About image={data.image} about={data.about} />
      <ArticleList posts={data.posts} />
    </div>
  );
}

export default App;