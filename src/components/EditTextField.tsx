import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import OutlinedInput from "@mui/material/OutlinedInput";

import {
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation ($input: addProductInput!) {
    addProduct(input: $input) {
      id
      name
    }
  }
`;

const GET_PRODUCT = gql`
  query products {
    products {
      id
      name
    }
  }
`;

const EditTextField = () => {
  const { loading, data } = useQuery(GET_PRODUCT);

  console.log(data && data.products[0].name)
  const [inputText, setInputText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const [AddProduct, { data: data1 }] = useMutation(CREATE_PRODUCT, {
    variables: {
      input: {
        id: 1,
        name: inputText,
      },
    },
  });

  useEffect(()=>{
    setInputText(data && data.products[0].name)
  },[data && data.products[0].name])

  const inputRef = useRef<HTMLInputElement>();

  const setTextInputRef = (element: HTMLInputElement) => {
    inputRef.current = element;
  };

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus();
    }
  }, [inputRef.current, disabled]);

  return (
    <Grid container>
      <Grid item>
        <FormControl>
          <OutlinedInput
            id="standard-adornment-weight"
            style={{ padding: "0" }}
            // placeholder={data && data.products[0].name}
            // defaultValue={inputText}
            value={inputText || ""}
            onChange={(e: any) => {
              setInputText(e.target.value);
            }}
            disabled={disabled}
            inputRef={setTextInputRef}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  onClick={() => {
                    AddProduct();
                    setDisabled(!disabled);
                  }}
                  style={{ padding: "15px 0" }}
                >
                  <EditIcon />
                </Button>
              </InputAdornment>
            }
          />
          <FormHelperText id="standard-weight-helper-text">
            Column Name
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EditTextField;

// useEffect(() => {
//   if (!disabled) {
//     inputRef.current?.focus();
//     setInputText("");
//   }
// }, [inputRef.current, disabled]);

// const setTextInputRef = (element: HTMLInputElement) => {
//   inputRef.current = element;
// };

/* <TextField
          label="Column Name"
          value={inputText}
          onChange={(e: any) => setInputText(e.target.value)}
          disabled={disabled}
          error={inputText === ""}
          inputRef={setTextInputRef}
        />
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? <EditIcon /> : <CheckIcon />}
        </Button>
      </Grid>
      <Grid item>
         */
