import React from 'react'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('../components/button'), {
  ssr: false
})

const Index = () => {
  return (
    <div>
      <Button />
      <h1>Hello!</h1>
    </div>
  )
}

export default Index
