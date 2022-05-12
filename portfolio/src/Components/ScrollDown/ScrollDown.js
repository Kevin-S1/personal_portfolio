import './scrolldown.css';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs'

function ScrollDown(props) {

  return (
    <>
    {props.direction === 'up' ? 
    <div className='scrollup'>
        <h5 className='scrollup--text'>Back to {props.nextPage}</h5>
        <BsFillArrowUpSquareFill className='scroll--logo'/>
    </div> 
    :
    <div className='scrolldown'>
        <h5 className='scrolldown--text'>Go to {props.nextPage}</h5>
        <BsFillArrowDownSquareFill className='scroll--logo'/>
    </div>}
    </>
    
  );
}

export default ScrollDown;