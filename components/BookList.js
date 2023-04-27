import styled from "styled-components"
import Book from "./Book"

export default function BookList({books}) {
    return <BookWrapper>
        { books.map(b => <Book title={b.title} author={b.author} link= {b.link} pages = {b.pages}/>)}
    </BookWrapper>
}

const BookWrapper = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px
`