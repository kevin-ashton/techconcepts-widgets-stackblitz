import React, { useState } from 'react';

export function AsciiWidget() {
  const [textValue, setTextValue] = useState('Hello');

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

      <table className="mt-3 table-auto">
        <tbody>
          <tr>
            <td className="uppercase">Letters</td>
            {textChars.map((v, index) => {
              return <td key={index}>{v}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
