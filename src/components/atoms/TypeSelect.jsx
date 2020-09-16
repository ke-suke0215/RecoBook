import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const TypeSelect = ({ bookTypes, selectLabel, type, setType }) => {
    const classes = useStyles();

    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <>
            <FormControl variant="outlined" className={classes.formControl}>

                <InputLabel id="demo-simple-select-label">
                    {selectLabel}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue=""
                    value={type}
                    onChange={handleChange}

                >
                    {bookTypes.map(type => {
                        return (
                            <MenuItem value={type} key={type}>{type}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>

        </>
    )
}

export default TypeSelect
