import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TextField from "@material-ui/core/TextField";
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';


const EditTextField = () => {

  const [inputText, setInputText] = useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(true)

  const inputRef = useRef<HTMLInputElement>();

  useEffect(()=>{
    if(!disabled){
      inputRef.current?.focus();
      setInputText("")
    }
  },[inputRef.current,disabled])

  const setTextInputRef = (element: HTMLInputElement) => {
    inputRef.current = element;
  };

  console.log(disabled)

  return (
    <div>
        <TextField
          id="standard-helperText"
          label="Column Name"
          value={inputText}
          onChange={(e: any) => setInputText(e.target.value)}
          disabled={disabled}
          inputRef={setTextInputRef}
        />

        <Button onClick={()=>setDisabled(!disabled)}>
          {disabled ? <EditIcon /> : <CheckIcon />}
        </Button>
    </div>
  );
};

export default EditTextField;
