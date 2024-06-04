import React from 'react'
import './App2.css'
import valley from './assets/valley.jpg'

export default function App2() {
  return (
    <div className='container'>
      <div className="scrolling">
        <div className="upper">
        </div>
        <p className='scroll'>projects ✦  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects .  projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects . projects</p>
        <div className="lower">
        </div>
      </div>
      <div className="subdiv">
        <div className="text">
            <p>
            <em className='mainer'>Valley of Flowers</em> National Park was <strong className='coloredp'>established in 1982</strong> to protect the floral wealth of the region and contribute to conservation of flowering plants in India. The credit for the discovery of this beautiful valley goes to British Mountaineer, <strong className='coloredg'>Frank Smythe</strong>.
            </p>

            <p>
              The valley is situated at an altitude of <strong className='coloredy'>3,658 meters</strong> above the sea level and is spread over an area of <strong className='coloredb'>87.50 sq km</strong>. The valley is surrounded by snow-capped mountains and is home to a variety of flora and fauna.
            </p>

            <p>
              The valley is home to over 500 species of flowering plants, including the rare <strong className='coloredp'>Brahma Kamal</strong>, the <strong className='coloredb'>Blue Poppy</strong> and the <strong className='coloredy'>Cobra Lily</strong>. The valley is also home to a variety of animals, including the <strong className='coloredc'>Snow Leopard</strong>, the <strong className='coloredp'>Himalayan Black Bear</strong>, the <strong className='coloredg'>Musk Deer</strong> and the <strong className='coloredr'>Red Fox</strong>.
            </p>
        </div>
        <div className="seperator"></div>
        <div className="cards">
          <img src={valley}></img>

          <h2>Valley Of Flowers</h2>
        </div>
      </div>
    </div>
  )
}

