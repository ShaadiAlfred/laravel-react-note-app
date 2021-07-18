import React, { FormEvent, FormEventHandler } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid, IconButton, TextField } from "@material-ui/core";
import { SendTwoTone } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { NewNote } from "../types";
import { addNote } from "../store/Notes";

export default function NoteInput() {
    const dispatch = useDispatch();

    const addNoteHandler: FormEventHandler<HTMLFormElement> = (e ) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            title: { value: string };
            content: { value: string };
        };

        const newNote: NewNote = {
            title: target.title.value,
            content: target.content.value
        };

        if (newNote.title || newNote.content) {
            target.title.value = "";
            target.content.value = "";

            dispatch(addNote(newNote));
        }
    };

    return (
        <Grid item lg={6} style={{ marginRight: "auto", marginLeft: "auto", marginBottom: "20px" }}>
            <form onSubmit={addNoteHandler}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            direction={"column"}
                            alignContent={"center"}
                            spacing={3}
                        >
                            <Grid item>
                                <TextField id="title" name="title" label="Title" />
                            </Grid>

                            <Grid item>
                                <TextField
                                    id="content"
                                    name="content"
                                    label="Content"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <IconButton style={{ marginLeft: "auto" }} type="submit">
                            <SendTwoTone />
                        </IconButton>
                    </CardActions>
                </Card>
            </form>
        </Grid>
    );
}
