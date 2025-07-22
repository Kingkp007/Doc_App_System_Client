import { createSlice } from '@reduxjs/toolkit'


export const alertSlice = createSlice({
    name: "alert",
    // we can make multiple initial state
    initialState: {
        loading: false
    },
    // in reducers we can make multiple reducers
    reducers: {
        showLoading: (state) => {
            state.loading = true
        },
        hideLoading: (state) => {
            state.loading = false
        }
    }
})

export const { showLoading, hideLoading } = alertSlice.actions;