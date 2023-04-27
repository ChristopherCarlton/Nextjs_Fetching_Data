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
import { useRouter } from 'next/router'


// function to fetch a particular url and return the data as json
const fetcher = url => fetch(url).then(r => r.json())

export default function BookDetail() {
    const router = useRouter() //gets our router object
    const {title} = router.query //gives access to end of url
    // localhost:2000/lolita -> title: = lolita

  // first param is the path of the api endpoint (waht will be fetched)
  // second param is the fetcher function that should execute to get the data
  const { data, error } = useSWR(`api/books/${title}`, fetcher)

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
  console.log(data);

  return (
    // <Container>
      <Main>
        {/* {JSON.stringify(data)} */}
        <article>
            <h1>{data[0].title}</h1>
            <h2>by {data[0].author}</h2>
            <p>Number of Pages: {data[0].pages}</p>
            <a href={data[0].link}>Learn More</a>
        </article>
        
      </Main>
    // </Container>
  )
}
