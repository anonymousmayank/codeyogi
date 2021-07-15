import React from 'react';
interface Props{}

const Recordings:React.FC<Props> = ()=>{
    return(
        <div>This is Recordings</div>
    );
}

export default React.memo(Recordings);