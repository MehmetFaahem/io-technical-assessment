import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface Service {
  id: number;
  name: string;
  description: string;
  slug: string;
  detailedDescription?: string;
  features?: string[];
  imageUrl?: string;
}

interface ServicesState {
  services: Service[];
  currentService: Service | null;
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  services: [],
  currentService: null,
  loading: false,
  error: null,
};

// Async thunk to fetch all services
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetch("/api/services");
    if (!response.ok) {
      throw new Error("Failed to fetch services");
    }
    return response.json();
  }
);

// Async thunk to fetch a single service by slug
export const fetchServiceBySlug = createAsyncThunk(
  "services/fetchServiceBySlug",
  async (slug: string) => {
    const response = await fetch(`/api/services/${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch service");
    }
    return response.json();
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    clearCurrentService: (state) => {
      state.currentService = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all services
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchServices.fulfilled,
        (state, action: PayloadAction<Service[]>) => {
          state.loading = false;
          state.services = action.payload;
        }
      )
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch services";
      })
      // Fetch single service
      .addCase(fetchServiceBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchServiceBySlug.fulfilled,
        (state, action: PayloadAction<Service>) => {
          state.loading = false;
          state.currentService = action.payload;
        }
      )
      .addCase(fetchServiceBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch service";
      });
  },
});

export const { clearCurrentService, clearError } = servicesSlice.actions;
export default servicesSlice.reducer;
