import React from 'react';
import { Button, Stack } from '@mui/material';

const FormEditorToolbar = ({ addField }) => {
    return (
        <Stack direction="row" spacing={2} marginBottom={2}>
            <Button variant="contained" onClick={() => addField('text')}>
                Add Text Field
            </Button>
            <Button variant="contained" onClick={() => addField('checkbox')}>
                Add Checkbox Field
            </Button>
        </Stack>
    );
};

export default FormEditorToolbar;
