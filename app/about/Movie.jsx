import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Movie({ id, title, release_date, poster_path }) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image src={imagePath + poster_path} width={800} height={800} alt={title} />
      </Link>
    </div>
  )
}
