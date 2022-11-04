import React from 'react'
import { useRouter } from 'next/router'

function RandomContact() {
  const router = useRouter()
  const { name } = router.query

  return <div>{name}</div>
}

export default RandomContact
