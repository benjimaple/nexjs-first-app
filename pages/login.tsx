import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import createUser from '../config/firebase'

export function signIn(username: string, password: string): void {
  console.log(username, password)
}

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()

    createUser(username, password)
      .then((userCredital) => {})
      .catch((error) => {
        console.log(error)
      })
  }
  return <Button>Click me</Button>
}
