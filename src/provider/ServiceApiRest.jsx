import React, { useState } from "react";
import { DataContext } from "../context/DataContext";
import { URL } from "../utils/const";

const ServiceApiRest = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [imagen, setImagen] = useState();
    const [vivos, setVivos] = useState();
    const [muertos, setMuertos] = useState();
    const [busqueda, setBusqueda] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getBusqueda = (caracters) => {
        if (!caracters) {
            setDataTable(data);
        } else {
            setBusqueda(caracters);
            const results = data.filter((iter) => iter.name.toUpperCase().includes(caracters.toUpperCase()));
            setDataTable(results);
            console.log(caracters)
        }
    }

    const getTareas = async () => {
        fetch(`${URL}/character`)
            .then(response => response.json())
            .then(response => {
                const PersoVivos = response.results.filter((iter) => iter.status === 'Alive')
                const PersoMuertos = response.results.filter((iter) => iter.status === 'Dead')
                setMuertos(PersoMuertos);
                setVivos(PersoVivos);
                setDataTable(response.results);
                setData(response.results);
            })
    }

    return (
        <DataContext.Provider value={{
            data, getTareas,
            imagen, setImagen, open, handleClickOpen, handleClose, vivos, muertos, busqueda, getBusqueda, dataTable
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default ServiceApiRest;
