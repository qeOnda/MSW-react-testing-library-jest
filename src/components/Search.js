import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function Search ({ handleSearch, handleSubmit }) {
    const classes = useStyles();
  
    return (        
        <form 
          onSubmit={handleSubmit}
          data-testid="form"
        >
            <TextField 
                id="standard-basic" 
                label="Enter a domain" 
                onChange={handleSearch}
                className={classes.root}  
            />
            <Box pt={1}>
              <Button 
                color="primary"
                type="submit"
                className={classes.button}
              >
                SUBMIT
              </Button>      
            </Box>
        </form>        
    )
}