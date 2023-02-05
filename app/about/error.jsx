'use client'

export default function error({ error, reset }) {
  return (
    <div>
      This ain't loading up: {error.message}
      <button onClick={() => reset()}></button>
    </div>
  )
}
