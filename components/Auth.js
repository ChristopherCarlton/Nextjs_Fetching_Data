import styled from 'styled-components'

export default function Auth({ title, author}) {
    return <BookWrapper>
        <h1>Author: {author}</h1>
        <h2>book: {title}</h2>
    </BookWrapper>
}

const BookWrapper = styled.article`
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px
`