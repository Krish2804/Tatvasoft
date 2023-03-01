import React from 'react';

function Title(props){

    return (
        <div>
            <div>This is title page.</div>
            <div>There are several titles like {props.t0}, {props.t1} and {props.t2}</div>
        </div>
    );
}

export default Title;