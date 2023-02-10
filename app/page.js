import Movie from './about/Movie'

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return (
    <main>
      <div className='grid gap-16 grid-cols-fluid'>
        {res.results.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  )
}
