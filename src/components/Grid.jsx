import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const GridTest = () => {

    return (
        <div className='grid pt-2 w-full text-center mt-2'>
            <div className='col-12 mb-2'>Test Grid System</div>
            <div className='col-12 sm:col-6 text-center'>1</div>
            <div className='col-12 sm:col-6 text-center'>2</div>
            <div className='col-12 sm:col-6 text-center'>3</div>
            <div className='col-12 sm:col-6 text-center'>4</div>
        </div>
    )
}

export default GridTest;