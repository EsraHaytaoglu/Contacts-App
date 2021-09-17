import { createSlice, createEntityAdapter} from '@reduxjs/toolkit';

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: contactAdaptor.addOne,
    },
});

export const { addContact} = contactSlice.actions;
export default contactSlice.reducer;