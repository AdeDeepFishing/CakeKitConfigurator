import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
      {/* New Input Box for Team Name */}
      <input
        type="text"
        value={snap.frontText}
        onChange={(e) => (state.frontText = e.target.value)}
        placeholder="Enter your Team Name"
        style={{
          marginTop: '1rem',
          padding: '0.5rem',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '1rem',
          width: '80%',
        }}
      />
    </div>
  )
}

export default ColorPicker