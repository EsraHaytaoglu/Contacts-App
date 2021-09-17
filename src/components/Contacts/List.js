import React from 'react';

import { contactSelectors, removeAllContacts} from '../../redux/contactSlice';
import { useSelector, useDispatch} from 'react-redux';
import Item from './Item';

function List() {
    const contacts = useSelector(contactSelectors.selectAll);
    const dispatch = useDispatch();
    // const total = useSelector(contactSelectors.selectTotal); => sayısını veriyor.

    const handleDeleteAll = ()=> {
        if(window.confirm('are you sure?')){
            dispatch(removeAllContacts());
        }
        
    }
    
    return (
        <div>
            <div className="deleteAllBtn" onClick={handleDeleteAll}>
                Delete All
            </div>
            <ul className="list">
                {contacts.map(contact => (
                    <Item key={contact.id} item={contact} />
                ))}
            </ul>
        </div>

    )
}

export default List
