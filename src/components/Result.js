import React from 'react';

export default function Result({ whoIs }) { 
  return (  
    <div>
      <ul>
        {whoIs.map(info => (
          <li key={info.value}><strong>{info.name}</strong>: {info.value}</li>
        ))}
      </ul>            
    </div>
  );
}