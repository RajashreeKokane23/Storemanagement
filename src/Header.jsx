import { Link } from 'react-router-dom';
import img from './assets/Cjclogo.jpg'
function Header(){
return<>
<div className='bg-dark m-1 p-2 d-flex justify-content-between'>
    <img src={img} alt="Image not load" width='150px'></img>
    <div>
        <Link className='btn btn-light m-2' to='/add'>ADD Product</Link>
                <Link className='btn btn-light ' to='/view'>VIEW Product</Link>

    </div>
</div>
</>
}
export default Header;
