import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function App() {

  const colors = [
    '#9b5de5',
    '#f15bb5',
    '#fee440',
    '#00bbf9',
    '#00f5d4',
    '#023047',
    '#84a98c',
    '#e63946',
    '#f08080',
    '#c8b6ff'
  ];


  const [backgroundColor, setBackgroundColor] = useState('#00afb9');
  const [currentColor, setCurrentColor] = useState(null);

    useEffect(()=> {
      const timeoutId = setTimeout(()=> {
        setCurrentColor(null);
    }, 1000);
      return () => clearTimeout(timeoutId);
  }, [currentColor]);

  return (
    <div className="app" style={{background: backgroundColor}}>
      <div className='container'>
      <h2>Like color? click on hex code for copied</h2>
        {currentColor !== null && <h1>Copied Color: {currentColor}</h1>}
        <div className='block'>
        {colors.map((color) => {
              return (
                <div className='card'>
                        <div className='box'
                        style={{background: color,
                        filter: 'brightness(85%)',
                        boxShadow: color === backgroundColor ? '0 0 5px #000' : ''
                        }}
                        onClick={() => setBackgroundColor(color)}></div>
                    <CopyToClipboard text={color}>
                      <p style={
                            {color: color === backgroundColor ? '#fff' : '#000'}
                          }
                          onClick={() => setCurrentColor(color)}>{color}</p>
                    </CopyToClipboard>
                    </div>
              )
        })}
          </div>
        </div>
    </div>
  )};