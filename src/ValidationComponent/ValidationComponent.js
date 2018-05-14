import React from 'react';

const validationComponent = (props) => {
    
    let display = null;
    if(props.len > 10)
    {
        display = (<p> Text too long </p>);
    }   
    else if(props.len < 5)
    {
        display = (<p> Text too short </p>);
    }
    return (
        <div>
            {display}
        </div>
    );
};

export default validationComponent;