import { AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core"
import { Theme, alpha } from "@material-ui/core"
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-around',

    },

    logoLg: {

        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: theme.spacing(2)
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },

    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            display: (props) => props.open ? 'flex' : 'none'
        },

    },
    cancle: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },

    },

    searchIcon: {
        color: 'white',
        marginLeft: theme.spacing(1)

    },
    NavrightItems: {
        alignItem: 'center',
        justifyContent: 'space-around',
        display: (props) => props.open ? 'none' : 'flex',

    },
    badges: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    searchSm: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1),
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },

    },

}))

function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })
    return (
        <div >
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.logoLg}>
                        FaceBook <Avatar alt="Logo" src="./imgs/logo-facebook.png" />
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        FB
                    </Typography>
                    <div className={classes.search}>
                        <Search className={classes.searchLg} />
                        <InputBase placeholder="search..."
                        />
                        <Cancel className={classes.cancle} onClick={() => setOpen(false)} />
                    </div>
                    <div className={classes.NavrightItems}>
                        <Search className={classes.searchSm} onClick={() => setOpen(true)} />
                        <Badge color="secondary" badgeContent={4} className={classes.badges}>
                            <Mail />
                        </Badge>
                        <Badge color="secondary" badgeContent={4} className={classes.badges}>
                            <Notifications />
                        </Badge>
                        <Avatar alt="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
