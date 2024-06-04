import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App1.css'
import yellow from './assets/flower-yellow.png'

function App1() {

  return (
    <div className="yellow scrollsnap">
      <h2><strong className='coloredy'>Flowers</strong>, are also known as <em>blossoms</em> or blooms</h2>
      <img className='imagey' src={yellow}></img>
      <p>They might typically be considered as a <strong className='sym'>symbol</strong> of love and care, but they can also convey many other emotions too: from joy, happiness, appreciation, and affection to sympathy, gratitude, or apology.</p>
    </div>
  )
}

export default App1
