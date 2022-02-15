import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
// import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
// import CheckIcon from "@material-ui/icons/Check";
import {
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation AddProduct($name: String!) {
    addProduct( name: $name) {
      name
    }
  }
`;

const EditTextField = () => {
  const [inputText, setInputText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);

  const [AddProduct,{data, loading, error}] = useMutation(CREATE_PRODUCT, {
    variables:{
      name:inputText,
    }
  })
  useEffect(() => {
    AddProduct()
  },[inputText])

  return (
    <Grid container>
      <Grid item>
        <FormControl>
          <Input
            id="standard-adornment-weight"
            value={inputText}
            onChange={(e: any) => {setInputText(e.target.value); AddProduct()}}
            endAdornment={
              <InputAdornment position="end">
                 <Button onClick={() =>AddProduct()} >
                 <EditIcon />Edit
                </Button>
              </InputAdornment>
            }
          />
          <FormHelperText id="standard-weight-helper-text">
            Column Nmae
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

        {/* <TextField
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
         */}