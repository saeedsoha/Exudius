import { Button, Container, Fab, FormControl, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip, Typography } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';



function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    absolute: {
        position: 'fixed',
        right: theme.spacing(3),
        bottom: theme.spacing(2),

    },
    container: {
        width: 600,
        height: 600,
        position: 'absolute',
        backgroundColor: 'white',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
            height: '100vh'

        },
    },
    item: {
        marginBottom: theme.spacing(2)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    form: {
        padding: theme.spacing(2)
    }

}))

function Add() {
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [menuitem, setMenuitems] = useState('Public')
    const [alert, setAlert] = useState(false)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert(false);
      };

    const clickHandler = (e) => {
        setMenuitems(e.target.value)
    }
    return (
        <>
            <Tooltip title="Add" aria-label="Add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.absolute}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="smal" style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField id="filled-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                variant="outlined" size="smal" style={{ width: '100%' }} />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                value={menuitem}
                                helperText="Please select your category"
                                onChange={clickHandler}
                            >
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Privet</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormControl>
                                <FormLabel component="legend">Who can comment?</FormLabel>
                                <RadioGroup defaultValue="Everyone">
                                    <FormControlLabel value="Everyone" control={<Radio />} label="Everyone" />
                                    <FormControlLabel value="frinds" control={<Radio />} label="frinds" />
                                    <FormControlLabel value="noone" control={<Radio />} label="noone" />
                                    <FormControlLabel
                                        value="disabled"
                                        disabled
                                        control={<Radio />}
                                        label="Custom (Premium)"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className={classes.item}>
                            <Button className={classes.button} variant="outlined" color="primary" onClick={() => setAlert(true)}>Post</Button>
                            <Button className={classes.button} variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancle</Button>
                        </div>


                    </form>
                </Container>
            </Modal>
            <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} >
                <Alert onClose={handleClose} severity="success">
                    Your Post is Created!
                </Alert>
            </Snackbar>
        </>
    )
}

export default Add;
