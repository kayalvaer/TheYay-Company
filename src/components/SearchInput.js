import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchInput() {
    return (
        <Form inline>
        <InputGroup>
        
          <input placeholder="Search" aria-describedby="basic-addon1" className="searchInput text-info pl-3 text-light"></input>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1" className="bg-primary shadow text-white rounded">Go</InputGroup.Text>
          </InputGroup.Prepend>
          </InputGroup>
          </Form>
          
    )
}

export default SearchInput
