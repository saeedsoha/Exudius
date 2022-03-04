import {Grid, makeStyles} from "@material-ui/core"
import Add from "./Components/Add";
import Feet from "./Components/Feet";
import Leftbar from "./Components/Leftbar";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";


const useStyles = makeStyles((theme)=>({
  right:{
    display: 'flex',
    [theme.breakpoints.down("sm")]:{
      display: 'none'
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <Navbar/>
      <Grid container >
          <Grid item sm={2} xs={2}>  <Leftbar/></Grid>
          <Grid item sm={7} xs={10} ><Feet/></Grid>
          <Grid item sm={3} className={classes.right}><Rightbar/></Grid>
      </Grid>
      <Add className={classes.add}/>
    </div>
  );
}

export default App;
