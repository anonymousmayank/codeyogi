import React from 'react';
interface Props{}

const NotFoundPage:React.FC<Props> = ()=>{
    return(
        <div className="bg-red-400 ">
            The Page you are Looking for is not found
        </div>
    );
}

export default React.memo(NotFoundPage);