import{Link} from 'react-router-dom'

import { a} from './Navigate.styled';


export default function Navigate(){

    return(
        <>
			<div> Navigate</div>
            <Link to='/home'>Home</Link>
            <Link to='/catalog'>_Catalog</Link>
            <Link to='/favorites'>_Favorites</Link>
        </>
        
    ) 
};
// export default Navigate;
