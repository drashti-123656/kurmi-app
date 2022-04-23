import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
  authData: {
    isAuthenticated: false,
    userData: {},
    token: '',
    error: null,
    loading: false
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.authData.isAuthenticated = true
      state.authData.userData = action.payload
      state.authData.token = 'randomToken'
      state.authData.error = null
      state.authData.loading = false
    },
    logout(state) {
      state.authData.isAuthenticated = false
      state.authData.userData = {}
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

export const { loginSuccess, logout, authError, authLoading} = authSlice.actions
export default authSlice.reducer