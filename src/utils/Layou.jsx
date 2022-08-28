import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import Colors from './Colors';
import LogoRandM from '../Images/Logo-RandM.png';
import Home from '../Images/Home.png';
import campana from '../Images/campana.png';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        background: 'white'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

export default function Layou(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed" sx={{ background: Colors.colorUno, paddingLeft: '30px' }}>
                <Toolbar>
                    <img src={LogoRandM} alt='some value' />
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton>
                        <img src={campana} alt='a' />
                    </IconButton>
                    <Box sx={{ padding: '5px' }} />
                    <IconButton>
                        <img src={Home} alt='a' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container} >
                    <Grid >
                        <div className="page">
                            {props.children}
                        </div>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}
