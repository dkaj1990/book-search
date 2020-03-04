import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await API.getBooks();
      setBooks(response.data);
    } catch(error) {
      console.group("LOAD BOOKS");
     // console.log(err);
      console.groupEnd();
    }
  };

  return (
    <Container fluid>
      <Row>
        
        <Col size="md-12">
        <form>
            <Input name="title" placeholder="Title (required)" />
            
            <FormBtn>Submit Book</FormBtn>
          </form>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <a href={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </a>
                  <DeleteBtn />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
