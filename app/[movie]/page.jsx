import Image from 'next/image'

export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetail({ params }) {
  const { movie } = params
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  const { title, release_date, runtime, status, overview } = res

  return (
    <>
      <h2 className='text-4x1'>{title}</h2>
      <h2 className='text-lg'>{release_date}</h2>
      <h2>Runtime: {runtime} minutes</h2>
      <h2 className='text-white text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md'>{status}</h2>
      <Image className='my-12 w-full' src={imagePath + backdrop_path} width={1000} height={1000} priority />
      <p>{overview}</p>
    </>
  )
}
