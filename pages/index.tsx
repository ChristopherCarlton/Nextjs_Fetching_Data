import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'

import useSWR from 'swr'
import BookList from '../components/BookList'


// function to fetch a particular url and return the data as json
const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  // first param is the path of the api endpoint (waht will be fetched)
  // second param is the fetcher function that should execute to get the data
  const { data, error } = useSWR('api/books', fetcher)

  // api encounters an error
  if(error){
    return <Main>
      Error!
    </Main>
  }

  // if data has not been resolved this renders
  if(!data) {
    return <Main>
      Loading...
    </Main>
  }

  // if the data comes back as expected

  return (
    // <Container>
      <Main>
        <h1> Betterreads</h1>
        <BookList books={data} />
        
      </Main>
    // </Container>
  )
}
