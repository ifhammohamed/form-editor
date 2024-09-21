import React from 'react';
import { Field } from 'formik';
import { TextField, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const FormField = ({ field, errors, touched }) => {
    switch (field.type) {
        case 'text':
            return (
                <Field
                    name={field.id}
                    as={TextField}
                    label="Name"
                    fullWidth
                    error={touched[field.id] && !!errors[field.id]}
                    helperText={touched[field.id] && errors[field.id]}
                />
            );
        case 'email':
            return (
                <Field
                    name={field.id}
                    as={TextField}
                    label="Email"
                    type="email"
                    fullWidth
                    error={touched[field.id] && !!errors[field.id]}
                    helperText={touched[field.id] && errors[field.id]}
                />
            );
        case 'course':
            return (
                <FormControl fullWidth>
                    <InputLabel id="course-label">Course</InputLabel>
                    <Field name={field.id} as={Select} labelId="course-label">
                        <MenuItem value="CS101">CS101: Intro to Computer Science</MenuItem>
                        <MenuItem value="MAT102">MAT102: Calculus I</MenuItem>
                        <MenuItem value="PHY103">PHY103: Physics I</MenuItem>
                    </Field>
                </FormControl>
            );
        case 'checkbox':
            return (
                <FormControlLabel
                    control={<Field name={field.id} as={Checkbox} />}
                    label="Morning Session"
                />
            );
        case 'textarea':
            return (
                <Field
                    name={field.id}
                    as={TextField}
                    label="Comments"
                    multiline
                    rows={4}
                    fullWidth
                    error={touched[field.id] && !!errors[field.id]}
                    helperText={touched[field.id] && errors[field.id]}
                />
            );
        default:
            return null;
    }
};

export default FormField;
