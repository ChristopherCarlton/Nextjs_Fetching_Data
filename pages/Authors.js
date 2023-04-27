import {
    Main
  } from '../components/sharedstyles'
  
  import Link from 'next/link';
  
  import useSWR from 'swr'
  import AuthList from '../components/AuthList'
  import styled from "styled-components"
  
  
  // function to fetch a particular url and return the data as json
  const fetcher = url => fetch(url).then(r => r.json())

export default function Authors() {
    const { data, error } = useSWR('api/authors', fetcher)

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
            <h1> All authors</h1>
            <AuthList books={data} />
            
        </Main>
        // </Container>
    )
  }