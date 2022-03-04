import { Container, makeStyles, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from "@material-ui/core"
import AvatarGroup from '@material-ui/lab/AvatarGroup';



const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0,
    borderLeft: '1px solid  #ccc',
    height: '100vh'

  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555'
  },
  avatargrp: {
    marginBottom: theme.spacing(5)
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  }
}))

function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>
        Online Friends
      </Typography>
      <AvatarGroup max={6} className={classes.avatargrp}>
        <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://v4.mui.com//static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://v4.mui.com//static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="https://v4.mui.com//static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="" />
        <Avatar alt="TH Z" src="https://v4.mui.com//static/images/avatar/6.jpg" />
        <Avatar alt="LL KK" src="https://v4.mui.com//static/images/avatar/7.jpg" />
        <Avatar alt="L Henderson" src="https://v4.mui.com//static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography className={classes.title}>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={3}>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
        </ImageListItem>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" />
        </ImageListItem>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/camera.jpg" />
        </ImageListItem>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/morning.jpg" />
        </ImageListItem>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/hats.jpg" />
        </ImageListItem>
        <ImageListItem >
          <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
        </ImageListItem>
        ))
      </ImageList>
      <Typography className={classes.title}>
        Categorys
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Movie
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider flexItem />
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Life
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>

    </Container>
  );
}

export default Rightbar;
