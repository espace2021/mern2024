import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {signup,signin} from "../services/Authservice";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const register = createAsyncThunk(
"auth/register",
async (user, thunkAPI) => {
const { rejectWithValue } = thunkAPI;
try{
const res= await signup(user);
return res.data
}
catch (error) {
return rejectWithValue(error.response.message)
}});

export const login = createAsyncThunk(
"auth/login",
    async (user, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
    try {
    const res = await signin(user); 
       
    return res.data ;
    } 
    catch (error) { 
        
        return rejectWithValue(error.response.data.message);
      
}});

export const logout = createAsyncThunk("auth/logout", () => {
localStorage.removeItem("CC_Token");
});

export const authSlice = createSlice({
    name: "auth",
    initialState: {
    user:null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    errMsg: null,
    isLoggedIn:false,
  
    
},

reducers: {
    reset:(state)=>{
        state.isLoading=false
        state.isSuccess=false
        state.isError=false
        state.errorMessage=""
        state.isLoggedIn=false
        }
    },
    extraReducers: (builder) => {
        //get articles
    builder
    //insertion user
    .addCase(register.pending, (state, action) => {
    state.isLoading=true;
    
    })
    .addCase(register.fulfilled,(state, action) => {
        state.user=action.payload;
        state.isLoading=false;
        state.status=action.payload.success;
        state.isSuccess=true
        state.errorMessage=action.error.message
        })
    .addCase(register.rejected,(state, action) => { 
        state.isLoading=false;
        state.isError=true
        state.isSuccess=false
        state.user=null
        state.errorMessage=action.error.message
        MySwal.fire({
            icon: 'error',
            title: state.errorMessage,
            })
        })
    .addCase(login.pending, (state, action) => {
        state.isLoading=true;
        
            })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        console.log(action.payload)
        state.user = action.payload.user;
        localStorage.setItem("CC_Token",action.payload.token)
        localStorage.setItem('refresh_token', action.payload.refreshToken);
        state.isSuccess=true;
        state.errorMessage=null
        /* MySwal.fire({
            icon: 'success',
            title: 'Connection was successful',
            })*/
        })
    .addCase(register.rejected,(state, action) => {
            state.isLoading=false;
            state.isError=true
            state.isSuccess=false
            state.user=null
            state.errorMessage=action.error.message
            MySwal.fire({
                icon: 'error',
                title: state.errorMessage,
                })
            })
    .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
        state.isSuccess=false;
        })
        
        }}
)
export const {reset} =authSlice.actions
        export default authSlice.reducer;
            