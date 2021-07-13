import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container, IconButton, Snackbar, TextField } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from "react-redux";
import { login } from "../store/Auth";
import { RootState, useAppDispatch } from "../store";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 50,
        padding: 25,
    },
    title: {
        fontSize: 14,
    },
    submitButton: {
        display: "block",
        marginTop: 25,
        marginLeft: "auto"
    }
});

export default function Login() {
    const classes = useStyles();

    const history = useHistory();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    const dispatch = useAppDispatch();

    const loginFormHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        dispatch(login({
            email,
            password
        })).then(({ payload }) => {
            if (payload === null) {
                setMessage("Wrong credentials");
                setOpen(true);
            } else {
                history.push("/notes");
            }

        });
    };

    return (
        <Container maxWidth="sm">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Login
                    </Typography>

                    <form onSubmit={loginFormHandler} style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
                        <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            type="email"
                            autoFocus
                            required
                        />
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            required
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.submitButton}
                            type="submit"
                        >
                            Login
                        </Button>
                    </form>
                </CardContent>
                <CardActions>
                    <Button size="small">Create an account</Button>
                </CardActions>
            </Card>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={() => setOpen(false)}
                message={message}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={() => setOpen(false)}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
        </Container>
    );
}
