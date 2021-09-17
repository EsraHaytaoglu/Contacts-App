import { useState} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact} from '../../redux/contactSlice';

function Form() {
    const [name, setName]= useState('');
    const [number, setNumber]= useState('');
    const dispatch = useDispatch();

    const handleSubmit =(e)=> {
        e.preventDefault();

        if(!name || !number) return false;

        // const names = name.split(',')

        // names.forEach(name => dispatch(addContact({id:nanoid(), name })))
        // const data = names.map((name)=> ({id: nanoid(), name}));
        // dispatch(addContacts(data));

        dispatch(addContact({ id:nanoid(), name, phone_number: number }))
        
        setName('');
        setNumber('');
        

        

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                
                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input      
                    placeholder="phone number" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)} 
                />
                <div className="btn">
                    <button type="submit">Add</button>
                </div>
                
            </form>
            
        </div>
    )
}

export default Form
