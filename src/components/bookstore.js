import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';

export default function Bookstore() {
    const[title, setTitle] = useState('');
    const[desc, setDesc] = useState('');
    const[price, setPrice] = useState('');
    const[author, setAuthor] = useState('');
    const[pages, setPages] = useState('');
    const[books,setBooks]=useState([])
    const handleClick = (e) => {
        e.preventDefault()
        const bookstore = {title, desc, price, author, pages}
        console.log(bookstore)
        fetch("http://localhost:8009/books/create", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bookstore)
        }).then(() => {
            console.log("New Book Added")
        })
    }

    useEffect( () => {
      fetch("http://localhost:8009/books/allBooks")
      .then(res=>res.json())
      .then((result)=>{
        setBooks(result);
      }
    )
    },[])
  return (
    <Container>
        <Paper>
            <h1 style={{color:"blue"}}>Add Book</h1>
        <form noValidate autoComplete='Off'>
            <TextField id="outlined-basic" label="Title" variant="outlined" fullWidth
            value={title} onChange={(e) => setTitle(e.target.value)}/>
            <TextField id="outlined-basic" label="Desc" variant="outlined" fullWidth
             value={desc} onChange={(e) => setDesc(e.target.value)}/>
            <TextField id="outlined-basic" label="Price" variant="outlined" fullWidth
             value={price} onChange={(e) => setPrice(e.target.value)}/>
            <TextField id="outlined-basic" label="Author" variant="outlined" fullWidth
             value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <TextField id="outlined-basic" label="Pages" variant="outlined" fullWidth
             value={pages} onChange={(e) => setPages(e.target.value)}/>
            
      <Button variant="contained" onClick={handleClick}>Submit</Button>

      </form>
      </Paper>
      <h1>Books</h1>

  <Paper>

  {books.map(book=>(
    <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={book.id}>
     Id:{book.id}<br/>
     Title:{book.title}<br/>
     Desc:{book.desc}<br/>
     AUthor:{book.author}<br/>
     Price:{book.price}<br/>
     Pages:{book.pages}<br/>
     </Paper>
      ))
}

    </Paper>
    </Container>
  
  );
}