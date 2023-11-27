import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { addItem } from "../../services/AddService";
import { toast, ToastContainer } from "react-toastify";
import { ItemReducerAction } from "../../types";
import { useItemContext } from "../../hooks/useItemContext";

const AddItem: React.FC = () => {
  const { dispatch }: { dispatch: (action: ItemReducerAction) => void } =
    useItemContext();
  const [imageUpload, setImageUpload] = useState();
  const initialValues = {
    itemName: "",
    itemPrice: "",
    itemCategory: "",
    itemSize: "",
    itemType: "",
    itemDescription: "",
    itemImageUrl: null,
  };

  async function handleCreateItem(values: any, { resetForm }: any) {
    dispatch({
      type: "SET_LOADING",
      payload: [],
      loading: true,
    });
    const data = { ...values, itemImageUrl: imageUpload };
    const res = await addItem(data);
    if (res?.status === 200) {
      toast.success(`Item added successfully!`, {
        autoClose: 1500,
      });

      resetForm({ values: initialValues });
    } else {
      console.log("Something wrong");
    }
  }

  function handleImageUpload(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("imageUpload", file);
    setImageUpload(file);
  }

  return (
    <Box>
      <ToastContainer />
      <Formik initialValues={initialValues} onSubmit={handleCreateItem}>
        <Form>
          <Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Add Item
              </Typography>
              <Typography variant="body1">
                Add new items to your store.
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Images
                </Typography>
                <Field
                  name="itemImageUrl"
                  as={TextField}
                  id="outlined-basic"
                  variant="outlined"
                  type="file"
                  onChange={handleImageUpload}
                />
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Name
                </Typography>
                <Field
                  as={TextField}
                  id="outlined-basic"
                  name="itemName"
                  placeholder="Name"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Price
                </Typography>
                <Field
                  as={TextField}
                  name="itemPrice"
                  id="outlined-basic"
                  placeholder="Price"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Category
                </Typography>
                <Field
                  as={TextField}
                  name="itemCategory"
                  id="outlined-basic"
                  placeholder="Category"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Size
                </Typography>
                <Field
                  as={TextField}
                  name="itemSize"
                  id="outlined-basic"
                  placeholder="Size"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>

              {/* <Grid item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Color
              </Typography>
              <Field
                as={TextField}
                id="outlined-basic"
                placeholder="Color"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid> */}

              <Grid item xs={4}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Type
                </Typography>
                <Field
                  as={TextField}
                  name="itemType"
                  id="outlined-basic"
                  placeholder="Type"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Description
                </Typography>
                <Field
                  as={TextField}
                  name="itemDescription"
                  multiline
                  id="outlined-basic"
                  placeholder="Description"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Box sx={{ my: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "transparent",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "transparent",
                  },
                }}
                type="submit"
                // disabled={isSubmitting}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default AddItem;
