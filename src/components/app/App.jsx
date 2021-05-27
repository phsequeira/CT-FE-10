import React from 'react';
import { useRecord } from '../../controls/controls';



export default function App() {
  const { undo, redo, record, current } = useRecord('#FF0000');

  return (
    <>
      <h1>Welcome to colour picker</h1>
      <p>Note: If you drag the colour picker when hitting the undo, it will show the previous colour you dragged over</p>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input data-testid='color-picker' type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div data-testid='display' style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}
