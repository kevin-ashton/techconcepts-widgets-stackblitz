import React, { useState, useEffect } from 'react';

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

export function AsciiWidget() {
  const [textValue, setTextValue] = useState('Hello');
  const [hasInputedValue, setHasInputedValue] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      
    })
    
  }, [])
  

  const textChars = textValue.split('');

  return (
    <div className="container">
      <p className="mb-3">Type any normal letters or numbers:</p>
      <input
        className="p-2 border w-full"
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <table className="mt-3 table-auto text-center">
        <tbody>
          <tr>
            <td className="uppercase">Letters</td>
            {textChars.map((v, index) => {
              return <td key={index}>{v}</td>;
            })}
          </tr>
          <tr>
            <td className="uppercase">Asii #</td>
            {textChars.map((v, index) => {
              return <td key={index}>{v.charCodeAt(0)}</td>;
            })}
          </tr>
          <tr>
            <td className="uppercase">Binary</td>
            {textChars.map((v, index) => {
              return (
                <td key={index}>
                  {`${dec2bin(v.charCodeAt(0))}`.padStart(8, '0')}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
