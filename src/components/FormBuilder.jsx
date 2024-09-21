import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Box, Container, Grid, Typography, Paper } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import FormField from './FormField';
import validationSchema from '../validation/validationSchema';
import { motion } from 'framer-motion';  // Import Framer Motion for animations

const FormBuilder = () => {
    const [fields, setFields] = useState([]);

    // Function to handle drag-and-drop
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newFields = Array.from(fields);
        const [reorderedItem] = newFields.splice(result.source.index, 1);
        newFields.splice(result.destination.index, 0, reorderedItem);
        setFields(newFields);
    };

    // Function to add a new field
    const addField = (type) => {
        setFields([...fields, { id: uuidv4(), type }]);
    };

    // Form submission handler
    const handleSubmit = (values) => {
        console.log('Form Data:', values);
        alert('Registration form submitted!');
    };

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
                Course Registration Form Builder
            </Typography>

            {/* Add Field Buttons */}
            <Grid container spacing={2} justifyContent="center" mb={2}>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => addField('text')}>
                        Add Text Field
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => addField('checkbox')}>
                        Add Checkbox Field
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => addField('email')}>
                        Add Email Field
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => addField('course')}>
                        Add Course Field
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="outlined" color="primary" onClick={() => addField('textarea')}>
                        Add Textarea Field
                    </Button>
                </Grid>
            </Grid>

            <Formik
                initialValues={fields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="fields">
                                {(provided) => (
                                    <motion.div
                                        layout
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        {fields.length === 0 && (
                                            <Box mt={4} display="flex" justifyContent="center">
                                                <Typography variant="body1" color="textSecondary">
                                                    Add fields to the form to get started!
                                                </Typography>
                                            </Box>
                                        )}

                                        {fields.map((field, index) => (
                                            <Draggable key={field.id} draggableId={field.id} index={index}>
                                                {(provided) => (
                                                    <motion.div
                                                        key={field.id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.5 }}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <Paper
                                                            elevation={3}
                                                            sx={{ p: 2, mb: 2 }}
                                                        >
                                                            <FormField field={field} errors={errors} touched={touched} />
                                                        </Paper>
                                                    </motion.div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </motion.div>
                                )}
                            </Droppable>
                        </DragDropContext>

                        {/* Submit Button */}
                        {fields.length > 0 && (
                            <Box mt={4} display="flex" justifyContent="center">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Button type="submit" variant="contained" color="secondary">
                                        Submit Registration Form
                                    </Button>
                                </motion.div>
                            </Box>
                        )}
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default FormBuilder;
