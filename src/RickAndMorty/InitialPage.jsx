import React, { Fragment } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Layou from '../utils/Layou';
import Colors from '../utils/Colors';
import ServiceApiRest from '../provider/ServiceApiRest';
import cameraMovie from '../Images/camera-movie.png';
import { Tabla } from './components/Tabla';
import { InfoPersonajes } from './components/InfoPersonajes';

export const InitialPage = () => {
    return (
        <ServiceApiRest>
            <Fragment>
                <Layou>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        sx={{ marginLeft: '22px' }}
                    >
                        <img src={cameraMovie} alt='some' height='30px' />
                        <Box sx={{ padding: '5px' }} />
                        <Typography variant="h5" sx={{ color: Colors.colorUno, fontWeight: 'bold' }} gutterBottom>Personajes</Typography>
                    </Grid>
                    <InfoPersonajes />
                    <Tabla />
                </Layou>
            </Fragment >
        </ServiceApiRest>
    )
}
