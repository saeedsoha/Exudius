import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core"



const useStyles = makeStyles((theme) => ({
    containerClass: {
        border: '1px solid red',
        paddingTop: theme.spacing(10),
        backgroundColor: 'white',


    },
    root: {
        margin: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(15),
        boxShadow: '1px 1px  black',
    },
    media: {
        height: 300,
        backgroundSize: 'contained',
    }

}))

function Post() {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.unsplash.com/photo-1645874692602-e8e6188463cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80"
                        title="my post"
                    />
                    <CardContent>
                        <Typography variant="h5" gutterBottom component="h2">
                            Anne
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Published 21h ago <br />
                            NIKON CORPORATION, NIKON D3200 <br />
                            Free to use under the Unsplash License<br />
                            So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?

                            Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button  color="primary"> Share</Button>
                    <Button  color="primary"> Redd more</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default Post;
