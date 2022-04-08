import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';

type Props = {}

const Search = (props: Props) => {
  return (
    <div>
      <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </div>
  )
}

export default Search