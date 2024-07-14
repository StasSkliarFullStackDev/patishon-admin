import React, {useEffect} from "react";
import {BreadcrumbFn} from "../../common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import appconstant from "../../themes/appconstant";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {toaster} from "../../utils/Toaster";

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    maxWidth: 500,
    marginBottom: 30
}

const GlassCovering = () => {
    const [glassCovering, setGlassCovering] = React.useState()

    const [clearGlassCovering, setClearGlassCovering] = React.useState()
    const [etchedGlassCovering, setEtchedGlassCovering] = React.useState()
    const [reededGlassCovering, setReededGlassCovering] = React.useState()
    const [ricePaperGlassCovering, setRicePaperGlassCovering] = React.useState()

    const getGlassCovering = async () => {
        try {
            const response = await axios.get(appconstant.SERVER_URL + 'glassCoveringList')
            setGlassCovering(response.data.data)
            setDefaultValues(response.data.data)
        } catch (error) {
            console.log(error)
            toaster("Error occurred", 'error');
        }
    }

    const updatePrice = async (id, value) => {
        try {
            await axios.post(appconstant.SERVER_URL + `glassCoveringList/${id}`, { price: value })
            toaster("Updated Successfully");
        } catch (error) {
            console.log(error)
            toaster("Error occurred", 'error');
        }
    }

    const setDefaultValues = (glassCovering) => {
        setClearGlassCovering(glassCovering[0].price)
        setEtchedGlassCovering(glassCovering[1].price)
        setReededGlassCovering(glassCovering[2].price)
        setRicePaperGlassCovering(glassCovering[3].price)
    }

    useEffect(() => {
        getGlassCovering()
    }, []);

    return (
        <div>
            <BreadcrumbFn
                path={["productManagement", "config"]}
                pathName={[
                    <FontAwesomeIcon icon={faHome} />,
                    appconstant.ConfigurationManagement,
                    appconstant.doorChannel,
                ]}
            />

            <div className="site-layout-background">
                <div className="content-e content-ep">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg p-0 system-line">
                        <h6 className="text-white text-capitalize ps-3">{appconstant.glassCovering}</h6>
                    </div>

                    <div style={itemStyle}>
                        <h3 style={{width: 120}}>Clear</h3>
                        <FormControl required>
                            <TextField
                                label="Price"
                                type="number"
                                variant="outlined"
                                size="small"
                                defaultValue={0}
                                value={clearGlassCovering}
                                onChange={(e) => setClearGlassCovering(e.target.value)}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => updatePrice(glassCovering[0]._id, clearGlassCovering)}
                        >
                            Save
                        </Button>
                    </div>

                    <div style={itemStyle}>
                        <h3 style={{width: 120}}>Etched</h3>
                        <FormControl required>
                            <TextField
                                label="Price"
                                type="number"
                                variant="outlined"
                                size="small"
                                defaultValue={0}
                                value={etchedGlassCovering}
                                onChange={(e) => setEtchedGlassCovering(e.target.value)}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => updatePrice(glassCovering[1]._id, etchedGlassCovering)}
                        >
                            Save
                        </Button>
                    </div>

                    <div style={itemStyle}>
                        <h3 style={{width: 120}}>Reeded Glass</h3>
                        <FormControl required>
                            <TextField
                                label="Price"
                                type="number"
                                variant="outlined"
                                size="small"
                                defaultValue={0}
                                value={reededGlassCovering}
                                onChange={(e) => setReededGlassCovering(e.target.value)}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => updatePrice(glassCovering[2]._id, reededGlassCovering)}
                        >
                            Save
                        </Button>
                    </div>

                    <div style={itemStyle}>
                        <h3 style={{width: 120}}>Rice Paper</h3>
                        <FormControl required>
                            <TextField
                                label="Price"
                                type="number"
                                variant="outlined"
                                size="small"
                                defaultValue={0}
                                value={ricePaperGlassCovering}
                                onChange={(e) => setRicePaperGlassCovering(e.target.value)}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => updatePrice(glassCovering[3]._id, ricePaperGlassCovering)}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GlassCovering