import { useState } from 'react'
import './App.css'
import Nav from './nav'
import Button from './Button'
import Body from './body'
import Input from './Input'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='ola'>
      <Body />
      <Input para={"Best 4G Network"} ola={"Enjoy SuperFast internet across Nigeria with 4G LTE data and SuperClear voice services"}/>
      <Input para={"24x7 Help & support"} ola={"Our virtual chat assistant & Customer care services available to help you 24x7"}/>
      <Input para={"Bestvalue"} ola={"Get the BestValue for your money our data and voice services"}/>
    </div>
  )
}

export default App
