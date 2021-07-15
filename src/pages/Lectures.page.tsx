import React from 'react';
import { useParams } from 'react-router-dom';

interface Props{}

interface PathProps{
    batchNumber:string;
    lectureNumber:string;
}


const Recordings:React.FC<Props> = ()=>{
    const {batchNumber,lectureNumber} =useParams<PathProps>();
    return(
        <div>This is Recordings of Batch : {batchNumber} Leture : {lectureNumber}</div>
    );
}

export default React.memo(Recordings);