import { CircularProgress } from '@mui/material';
import React from 'react'

/**
* @author
* @function Loader
**/

const Loader = (props) => {
  return(
    <div className="preloader">
        <div className="status">
            <div className="text-center">
                <CircularProgress />
            </div>
        </div>
    </div>
   )
}

export default Loader;