import React, { useState, useEffect } from 'react';
import './styles/Header.css';

const Header = () => {
  const [headerText, setHeaderText] = useState('Hi there!');
  const [next, setNextIndex] = useState(1);

  useEffect(() => {
    const texts = ['Discover', 'Organize', 'Explore'];
    let count = 0;
    let index = 0;
  
    const intervalId = setInterval(() => {
      if (count >= texts[index].length) {
        count = 0;
        index = (index + 1) % texts.length;
        setNextIndex((n) => (n + 1) % texts.length);
      } else {
        setHeaderText(texts[index].slice(0, count + 1));
        count++;
      }
    }, 250);
  
    return () => clearInterval(intervalId);
  }, []);  

  return (
    <div className="header">
      <div>
        <p>
          Are you an avid reader with a growing collection of books? Or perhaps you're just starting your reading adventure? Look no further <strong>BookStore</strong> is here to revolutionize the way you manage your reading list. Dive into you literal journey with ease.
        </p>
        <p className="blinking-text">
          {headerText}
          <span className="blinking-cursor">{next === 0 ? '|' : '|'}</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
