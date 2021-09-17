import { createSlice} from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {}
});

export default contactSlice.reducer;