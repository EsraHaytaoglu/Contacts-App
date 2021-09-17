import React from 'react';

import { contactSelectors} from '../../redux/contactSlice';
import { useSelector} from 'react-redux';
import Item from './Item';

function List() {
    const contacts = useSelector(contactSelectors.selectAll);
    // const total = useSelector(contactSelectors.selectTotal); => sayısını veriyor.
    
    return (
        <div>
            {contacts.map(contact => (
                <Item key={contact.id} item={contact} />
            ))}
        </div>
    )
}

export default List
