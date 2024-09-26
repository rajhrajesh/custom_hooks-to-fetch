import React from 'react'
import { useFetch } from './useFectch'

const App = () => {
  const {data, loading, error} = useFetch()

  if (loading) return <h1>Loading...</h1>;
  if (error) 
    return (
      <pre>{JSON.stringify(error, null, 2)}</pre>
  );
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <img src={data.avatar_url} alt={data.avatar_url}/>
      {data.login && <h3>{data.login}</h3> }
      {data.bio && <p>{data.bio}</p>}
      {data.url && <a href={data.url}>Github</a>}
    </div>
  )
}

export default App