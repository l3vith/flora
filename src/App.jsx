import { useState } from 'react'
import React, { useEffect } from 'react'
import './App.css'
import blue from './assets/flower-white.png'

function App() {
  useEffect(() => {
    document.title = 'Flora'
})

  return (
    <div className="blue scrollsnap">
      <h2><strong className='coloredr'>Flowers</strong>, the most beautiful <em>boons</em> of earth</h2>
      <img src={blue}></img>
      <p>A flower, the <strong className='rep'>reproductive structure</strong> of flowering plants, consists of sepals, petals, stamens, and carpels, enabling pollination and fertilization for seed and fruit production, vital for plant propagation.</p>
    </div>
  )
}

export default App
