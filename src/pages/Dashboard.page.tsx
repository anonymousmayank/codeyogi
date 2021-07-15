import React from 'react';
interface Props{}

const Dashboard:React.FC<Props> = ()=>{
    return(
        <div>This is Dashboard</div>
    );
}

export default React.memo(Dashboard);