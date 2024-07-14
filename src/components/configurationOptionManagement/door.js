import React, {useEffect} from "react";
import {BreadcrumbFn} from "../../common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import appconstant from "../../themes/appconstant";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper} from "@mui/material";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import {toaster} from "../../utils/Toaster";

const Door = () => {
    const [doors, setDoors] = React.useState()
    const [doorCategory, setDoorCategory] = React.useState();
    const [doorType, setDoorType] = React.useState();
    const [typeOfOpening, setTypeOfOpening] = React.useState();
    const [directionOfOpening, setDirectionOfOpening] = React.useState();
    const [handlePosition, setHandlePosition] = React.useState();

    const [doorSize, setDoorSize] = React.useState('100');
    const [doorPrice, setDoorPrice] = React.useState('1000');

    const getDoors = async () => {
        try {
            const response = await axios.get(appconstant.SERVER_URL + 'doorList')
            setDoors(response.data.data)
        } catch (error) {
            console.log(error)
            toaster("Error occurred", 'error');
        }
    }

    const createDoor = async (e) => {
        console.log(e)
        e.preventDefault();

        if (!doorCategory || !doorType || !doorSize || !doorPrice) {
            toaster("Please fill out all required fields.", 'error');
            return;
        }

        if (doorCategory === 'hinged' && !typeOfOpening) {
            toaster("Please fill out the type of opening for hinged doors.", 'error');
            return;
        }

        if (doorCategory === 'sliding' && doorType === 'single' && !directionOfOpening) {
            toaster("Please fill out the direction of opening for single sliding doors.", 'error');
            return;
        }

        if (doorCategory === 'hinged' && doorType === 'single') {
            if (!handlePosition) {
                toaster("Please fill out the handle position.", 'error');
                return;
            }
        }

        try {
            await axios.post(appconstant.SERVER_URL + 'createDoor', {
                doorCategory,
                doorType,
                typeOfOpening: (doorCategory === 'hinged') ? typeOfOpening : null,
                directionOfOpening: ((doorCategory === 'sliding') && (doorType === 'single')) ? directionOfOpening : null,
                handlePosition: ((doorCategory === 'hinged') && (doorType === 'single')) ? handlePosition : null,
                doorSize,
                doorPrice
            })
            toaster("Created Successfully");
            await getDoors()
        } catch (error) {
            console.log(error)
            toaster("Error occurred", 'error');
        }
    }

    const removeDoor = async (id) => {
        try {
            await axios.delete(appconstant.SERVER_URL + `removeDoor/${id}`)
            toaster("Removed Successfully");
            await getDoors()
        } catch (error) {
            console.log(error)
            toaster("Error occurred", 'error');
        }
    }

    useEffect(() => {
        getDoors()
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
                        <h6 className="text-white text-capitalize ps-3">{appconstant.door}</h6>
                    </div>

                    <form
                        onSubmit={(e) => createDoor(e)}
                        style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20, maxWidth: 500, marginBottom: 30 }}
                    >
                        <FormControl required>
                            <FormLabel id="demo-radio-buttons-group-label">Door Category</FormLabel>
                            <RadioGroup
                                required
                                name="doorCategory"
                                value={doorCategory}
                                onChange={(e) => setDoorCategory(e.target.value)}
                            >
                                <FormControlLabel value="hinged" control={<Radio />} label="Hinged" />
                                <FormControlLabel value="sliding" control={<Radio />} label="Sliding" />
                            </RadioGroup>
                        </FormControl>

                        <FormControl required>
                            <FormLabel id="demo-radio-buttons-group-label">Door Type</FormLabel>
                            <RadioGroup
                                required
                                name="doorType"
                                value={doorType}
                                onChange={(e) => setDoorType(e.target.value)}
                            >
                                <FormControlLabel value="single" control={<Radio />} label="Single" />
                                <FormControlLabel value="double" control={<Radio />} label="Double" />
                            </RadioGroup>
                        </FormControl>

                        {
                            (doorCategory === 'hinged') &&
                            <FormControl required>
                                <FormLabel id="demo-radio-buttons-group-label">Type of opening</FormLabel>
                                <RadioGroup
                                    required
                                    name="typeOfOpening"
                                    value={typeOfOpening}
                                    onChange={(e) => setTypeOfOpening(e.target.value)}
                                >
                                    <FormControlLabel value="push" control={<Radio />} label="Push" />
                                    <FormControlLabel value="pull" control={<Radio />} label="Pull" />
                                </RadioGroup>
                            </FormControl>
                        }

                        {
                            (doorCategory === 'sliding' && doorType === 'single') &&
                            <FormControl required>
                                <FormLabel id="demo-radio-buttons-group-label">Direction of opening</FormLabel>
                                <RadioGroup
                                    required
                                    name="directionOfOpening"
                                    value={directionOfOpening}
                                    onChange={(e) => setDirectionOfOpening(e.target.value)}
                                >
                                    <FormControlLabel value="left" control={<Radio />} label="Left" />
                                    <FormControlLabel value="right" control={<Radio />} label="Right" />
                                </RadioGroup>
                            </FormControl>
                        }

                        {
                            (doorCategory === 'hinged' && doorType === 'single') &&
                            <FormControl required>
                                <FormLabel id="demo-radio-buttons-group-label">Handle Position</FormLabel>
                                <RadioGroup
                                    required
                                    name="directionOfOpening"
                                    value={handlePosition}
                                    onChange={(e) => setHandlePosition(e.target.value)}
                                >
                                    <FormControlLabel value="left" control={<Radio />} label="Left" />
                                    <FormControlLabel value="right" control={<Radio />} label="Right" />
                                </RadioGroup>
                            </FormControl>
                        }

                        <hr></hr>

                        <FormControl required>
                            <TextField
                                label={"Door size"}
                                type={"number"}
                                variant="outlined"
                                value={doorSize}
                                onChange={(e) => setDoorSize(e.target.value || '')}
                            />
                        </FormControl>

                        <FormControl required>
                            <TextField
                                label={"Door price"}
                                type="number"
                                value={doorPrice}
                                onChange={(e) => setDoorPrice(e.target.value || '')}
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                        >
                            Add Door
                        </Button>
                    </form>






                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Door Category</TableCell>
                                    <TableCell>Door Type</TableCell>
                                    <TableCell>Type Of Opening</TableCell>
                                    <TableCell>Direction Of Opening</TableCell>
                                    <TableCell>Handle Position</TableCell>
                                    <TableCell>Door Size</TableCell>
                                    <TableCell>Door Price</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {doors && doors.length > 0 && doors.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        <TableCell>{row.doorCategory}</TableCell>
                                        <TableCell>{row.doorType}</TableCell>
                                        <TableCell>{row.typeOfOpening}</TableCell>
                                        <TableCell>{row.directionOfOpening}</TableCell>
                                        <TableCell>{row.handlePosition}</TableCell>
                                        <TableCell>{row.doorSize}</TableCell>
                                        <TableCell>{row.doorPrice}</TableCell>
                                        <TableCell>
                                            <DeleteIcon
                                                cursor={'pointer'}
                                                onClick={() => removeDoor(row._id)}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    )
}
export default Door