import React, { Fragment, useContext } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import InputAdornment from '@mui/material/InputAdornment';

import Colors from '../../utils/Colors';
import iconoVivo from '../../Images/Iconodevivo.png';
import iconoMuerto from '../../Images/Iconodemuerto.png';
import { DataContext } from '../../context/DataContext';
import { withStyles } from '@material-ui/core/styles';

const StyledTextField = withStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: `90px`,
            },
        },
    },
})(TextField);

export const InfoPersonajes = () => {
    const { data, vivos, muertos, busqueda, getBusqueda } = useContext(DataContext);
    return (
        <Fragment>
            <Grid container sx={{ paddingLeft: '25px', paddingTop: '24px' }} spacing={3}>
                <Grid item xs={2.5}>
                    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                        <Typography variant="h6" sx={{ color: Colors.colorUno, paddingLeft: '25px' }} gutterBottom>Total de personajes <spam style={{ paddingLeft: '10px', fontWeight: 'bold' }}>{data.length}</spam></Typography>
                    </TableContainer>
                </Grid>
                <Grid item xs={4.5}>
                    <TableContainer component={Paper} sx={{ borderRadius: '10px' }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item xs container direction="row" justifyContent="center" alignItems="center">
                                <img src={iconoVivo} alt='vivo'/>
                                <Typography variant="h6" sx={{ color: Colors.colorUno, paddingLeft: '15px' }} gutterBottom>Personajes vivos <spam style={{ paddingLeft: '10px', fontWeight: 'bold' }}>{vivos === undefined ? '' : vivos.length}</spam></Typography>
                            </Grid>
                            <Divider orientation="vertical" sx={{ paddingTop: '15px', paddingBottom: '15px' }} />
                            <Grid item xs container direction="row" justifyContent="center" alignItems="center">
                                <img src={iconoMuerto}  alt='muerto'/>
                                <Typography variant="h6" sx={{ color: Colors.colorUno, paddingLeft: '15px' }} gutterBottom>Personajes muertos  <spam style={{ paddingLeft: '10px', fontWeight: 'bold' }}>{muertos === undefined ? '' : muertos.length}</spam> </Typography>
                            </Grid>
                        </Grid>
                    </TableContainer>
                </Grid>
                <Grid item xs={2}>
                    <StyledTextField
                        fullWidth
                        value={busqueda}
                        placeholder="Buscar"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            startAdornment: <InputAdornment position="end"> <SearchIcon /></InputAdornment>,
                        }}
                        sx={{ color: '#F1F1F1' }}
                        onChange={(event, value) => { getBusqueda(event.target.value) }}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}
