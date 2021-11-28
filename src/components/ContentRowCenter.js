import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import {Route,Routes} from 'react-router-dom';

function ContentRowCenter(){
    return (
        <div className="row">   
            <Routes>
            {/*<!-- Last Movie in DB -->*/}
            <Route exact path ='/lastMovie' element={<LastMovieInDb />}/> {/*<!-- para la version 6(react-routes-dom) se usa element y Routes  y en el component con su sintaxis -->*/}
            
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Route exact path ='/genres' element={<GenresInDb />}/> {/*<!-- para la version 6(react-routes-dom) se usa element y Routes  y en el component con su sintaxis -->*/}
            
		    </Routes>


        </div>
    )
}

export default ContentRowCenter;