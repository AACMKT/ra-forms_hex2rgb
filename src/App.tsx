import { useState } from 'react'
import './App.css'

function App() {
  const [rgb, setRGB] = useState('rgb(52, 73, 94)')
  const [hex, setHex] = useState('#34495e')
  const [bgColor, setBgColor] = useState('rgb(52, 73, 94)')

  const hexToRgb = (hex: string) => {
    setHex(() => {
      const res = hex.slice(0,1) === '#'? hex : '#' + hex;
      return res.length > 7? res.slice(0,7) : res
    }
    )
    const pattern_color = "^#([A-Fa-f0-9]{6})$";
    let r: number|null = null;
    let g: number|null = null;
    let b: number|null = null;
    if (hex.match(pattern_color)) {
        const hex_color: string = hex.replace("#", "");
        r = parseInt(hex_color.substring(0, 2), 16)
        g = parseInt(hex_color.substring(2, 4), 16)
        b = parseInt(hex_color.substring(4, 6), 16);
    }
    
    setBgColor(() =>{
      if((typeof r === 'number')&&(typeof g === 'number')&&(typeof b === 'number')) {
        return `rgb(${r}, ${g}, ${b})`
      }
      return hex.length === 7 ? 'rgb(231, 76, 60)' : rgb
      }
    )

    setRGB(() => {
      if (hex.length >= 7){
        if((typeof r === 'number')&&(typeof g === 'number')&&(typeof b === 'number')) {
          return `rgb(${r}, ${g}, ${b})`
        }
        return 'Ошибка!'
      }
      return ''
    })
  };

  const onFocusOut = () => {
    if ((rgb === "Ошибка!") || (hex.length < 7)) {
      setHex('#34495e')
      setRGB('rgb(52, 73, 94)')
      setBgColor('rgb(52, 73, 94)')
    }

  }
  
  return (
    <>
    <div className='figure' style={{backgroundColor: bgColor}}> 
      <div >
        <input className='hex-field' value={hex} onChange={(e) => {hexToRgb(e.target.value)}} onBlur = {onFocusOut}></input>
        <div className='message'>{rgb}</div>
      </div>
    </div>
    </>
  )
}

export default App
