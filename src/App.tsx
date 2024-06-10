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
    const [r, g, b] = (hex.match(/\w\w/g)!=null? hex.match(/\w\w/g)!.map((x: string): number|null  => parseInt(x, 16)?parseInt(x, 16):null):[null, null, null]);
    
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
