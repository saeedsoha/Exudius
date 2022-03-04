import { Container, makeStyles, Typography } from "@material-ui/core"
import Post from "./Post";



const useStyles = makeStyles((theme)=> ({
  containerClass:{
    paddingTop: theme.spacing(10),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'

  }
}))

function Feet() {
  const classes = useStyles()
  return (
<Container className={classes.containerClass}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
</Container>
  );
}

export default Feet;
