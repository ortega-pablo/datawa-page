import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Obtengo productos del js para home
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (data) => {
    try {
      return data;
    } catch (error) {
      throw Error("Error al cargar los productos");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;
