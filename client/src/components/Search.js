import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Popover,
  PopoverBody,
  PopoverHeader,
} from "reactstrap";
import Fuse from "fuse.js";
import searchResults from "../searchResults.json";

function Search() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchResults, {
    keys: ["subject", "name"],
  });

  const results = fuse.search(query);
  console.log(results)

  const toggle = (e) => {
    if (e.target.value !== "") {
      setPopoverOpen(true);
    } else setPopoverOpen(false);

    setQuery(e.target.value);
  };

  return (
    <div>
      <Form inline className="mr-3" id="Popover1">
        <FormGroup>
          <Label for="search"></Label>
          <Input
            type="text"
            name="text"
            id="search"
            placeholder="Search..."
            onChange={toggle}
          />
        </FormGroup>
      </Form>
      <Popover placement="left" isOpen={popoverOpen} target="Popover1">
        {results.map(result => {
            return (
                <PopoverBody>
                    <a href='' style={{textDecoration: 'none'}}>{result.item.name}</a>
                </PopoverBody>
            )
        })}
      </Popover>
    </div>
  );
}

export default Search;
