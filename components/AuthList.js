import styled from "styled-components"
import Book from "./Auth"

export default function BookList({books}) {
    return <BookWrapper>
        { books.map(b => <Book title={b.title} author={b.author}/>)}
    </BookWrapper>
}

const BookWrapper = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px
`