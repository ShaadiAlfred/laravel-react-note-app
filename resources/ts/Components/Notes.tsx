import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, fetchNotes } from "../store/Notes";
import { RootState } from "../store";
import { Card, CardActions, CardContent, Container, Grid, Typography } from "@material-ui/core";
import { Note } from "../types";
import { Delete } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import NoteInput from "./NoteInput";

const Notes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);

    const notes: Note[] = useSelector((state: RootState) => state.notes.notes);

    return (
        <Container maxWidth="lg">
            <h1>Notes</h1>

            <NoteInput />

            <Grid container spacing={3}>
                {notes.map((note) => (
                    <Grid key={note.id} item lg={3}>
                        <Card variant="elevation">
                            <CardActions>
                                <IconButton onClick={() => dispatch(deleteNote(note.id))}>
                                    <Delete />
                                </IconButton>
                            </CardActions>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {note.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {note.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Notes;
