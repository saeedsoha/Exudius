import { Container, List, makeStyles, Typography } from "@material-ui/core"
import { Apps, Collections, ExitToApp, Home,PlaylistAddCheckOutlined, People, PhotoCamera, PlayCircleOutline, Settings, Storefront } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  containerClass: {
    paddingTop: theme.spacing(10),
    marginLeft: 0,
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    color: 'white',
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: 'white',
      color: 'black',
      borderRight: '1px solid  #ccc',
    },

  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(5),
      cursor: 'pointer',
    },
  },
  text: {
    fontWeight:500,
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  icon: {
    marginRight: theme.spacing(5),
  },
  [theme.breakpoints.up("sm")]: {
      fontSize:'18px'
  },
}))

function Leftbar() {
  const classes = useStyles()
  return (
    <Container className={classes.containerClass}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <People className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <PlaylistAddCheckOutlined className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        
        <Apps className={classes.icon} />
        <Typography className={classes.text}>APPS</Typography>
      </div>
      <div className={classes.item}>
        <Collections className={classes.icon} />
        <Typography className={classes.text}>Collection</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
