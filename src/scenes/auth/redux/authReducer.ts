import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  authData: {
    isAuthenticated: true,
    user: {},
    token: '',
    error: null,
    loading: false
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.authData.isAuthenticated = true
      state.authData.user = action.payload.user
      state.authData.token = action.payload.token
      state.authData.error = null
      state.authData.loading = false
    },
    logout(state) {
      state.authData.isAuthenticated = false
      state.authData.user = {}
      state.authData.token = ''
      state.authData.error = null
      state.authData.loading = false
    },
    authError(state, action) {
      state.authData.error = action.payload
      state.authData.loading = false
    },
    authLoading(state, action) {
      state.authData.loading = action.payload
    },
  },
})

export const { login, logout, authError, authLoading} = authSlice.actions
export default authSlice.reducer