import { useState } from 'react'
import './App.css'
import Nav from './nav'
import Button from './Button'
import Body from './body'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ola'>

      <Body />



      <h1 className='p'>
      Wy choose smile
      </h1>
      <div className='forbut'>
        <div className='first'>
          <h2>Best 4G Network</h2>
          <p>
              Enjoy superfast internet across Nigeria with 4G <br /> LTE
              data and superClear voice services
            </p>
              <Button />
        </div>
        <div className='first'>
          <h2>24x7 Help & Support</h2>
          <p>
              Our virtual chat assistant & Customer care services is  <br />
              available to help you 27/7
            </p>
              <Button />
        </div>
        <div className='first'>
          <h2>BestValue</h2>
          <p>
              Get the BestValue for your money our Data and <br />
              Voice services
            </p>
              <Button />
        </div>
      </div>
    </div>
  )
}

export default App
