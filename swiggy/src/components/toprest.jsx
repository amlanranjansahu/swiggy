import React from 'react'
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi'
import Card from './Card';

export default function Toprest() {
    const [data,setData] = useState([]);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )
    return (      
            <div className='max-w-[1200px] mx-auto'>
          <div className='flex my-5 items-center justify-between'>
             <div className='text-[25px] font-bold'>Top restaurant chains in Bhubaneswar</div>
             <div className='flex'>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                    <HiArrowSmLeft />
                </div>
                <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
                    <HiArrowSmRight />
                </div>
             </div>
          </div>
          <div className='flex'>
            <Card />
          </div>
        </div>
    )
}