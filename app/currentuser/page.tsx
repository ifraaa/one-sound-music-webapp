import React from 'react'
import { currentUser } from '@clerk/nextjs'
import { useState } from 'react'
const page = async () => {
    const user = await currentUser()


  return (
    <div></div>
  )
}

export default page