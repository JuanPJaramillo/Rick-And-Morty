import React, { Fragment, useContext, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import Tooltip from '@mui/material/Tooltip';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TableContainer from '@mui/material/TableContainer';
import DialogContentText from '@mui/material/DialogContentText';
import { TableHead, TableRow, TableCell, TableBody, Button, Table, TablePagination, IconButton } from '@mui/material';

import Colors from '../../utils/Colors';
import { DataContext } from '../../context/DataContext';
import { ModalImagen } from './ModalImagen';

import iconoVivo from '../../Images/Iconodevivo.png';
import iconoMuerto from '../../Images/Iconodemuerto.png';
import iconoImagen from '../../Images/Iconoimagen.png';

export const Tabla = () => {
    const { getTareas, imagen, setImagen, open, handleClickOpen, handleClose, dataTable } = useContext(DataContext);

    useEffect(() => {
        getTareas();
    }, []);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"IMAGEN"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <ModalImagen imagen={imagen} />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='error' onClick={handleClose} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ padding: '25px' }}>
                <TableContainer component={Paper} sx={{ padding: '24px', borderRadius: '10px' }} elevation='10'>
                    <Table aria-label="spanning table">
                        <TableHead >
                            <TableRow style={{ backgroundColor: Colors.colorDos }}>
                                <TableCell style={{ fontWeight: 'bold', color: 'white', borderTopLeftRadius: 15 }} align="center">Nombre</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Vivo</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Especie</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Genero</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Origen</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Locación</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Capitulos</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white' }} align="center">Fecha</TableCell>
                                <TableCell style={{ fontWeight: 'bold', color: 'white', borderTopRightRadius: 15 }} align="center">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ name, status, species, gender, origin, location, episode, created, image }) => (
                                <TableRow>
                                    <TableCell align="center">{name}</TableCell>
                                    <TableCell align="center">
                                        {status === 'Alive' ?
                                            <img src={iconoVivo} alt="Success" /> :
                                            status === 'Dead' ?
                                                <img src={iconoMuerto} alt="Success" /> :
                                                status === 'unknown' ? 'NO CONFIRMADO' : ''
                                        }
                                    </TableCell>
                                    <TableCell align="center">{species}</TableCell>
                                    <TableCell align="center">{gender}</TableCell>
                                    <TableCell align="center">{origin.name}</TableCell>
                                    <TableCell align="center">{location.name}</TableCell>
                                    <TableCell align="center">{episode[0]}</TableCell>
                                    <TableCell align="center">{created.substring(0, 10)}</TableCell>
                                    <TableCell align="center">
                                        <Tooltip title="Ver Imagen">
                                            <IconButton onClick={() => {
                                                setImagen(image);
                                                handleClickOpen()
                                            }}>
                                                <img src={iconoImagen} alt='success' />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 50]}
                        component="div"
                        count={dataTable.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </Grid>
        </Fragment>
    )
}