import React, { Fragment } from 'react'
import SearchForm from './SearchForm/SearchForm'
import Forecast from './Forecast/Forecast'
import Error from './Error/Error'
import Loader from './Loader/Loader'
import useForecast from '../Hooks/useForecast'

export default function Page() {
    const {forecast, isLoading, isError, callApi} = useForecast();

const onChange = value => {
    callApi(value);
}

    return (
       <Fragment >
           <div className=" m-2 box-border">
               <h1 className="text-center text-4xl font-sans font-bold">Weather Forecast</h1>
<SearchForm 
onChange={onChange}/>
<div className="flex items-center justify-center">
 { isLoading  && <Loader/> } 
</div>
<div className="flex items-center justify-center">
{isError &&<Error message={isError}/> }
 </div> 
 <div className="mb-16">
{forecast && !isError && !isLoading && <Forecast forecast={forecast}/>}
</div>
</div> 
       </Fragment>
    )
}
