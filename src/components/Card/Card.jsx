import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';


const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);

    const handleShowAll = () => {
        setShowAll(true);
    }

    useEffect(() => {
        const loadDAta = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json();
            console.log(data.data.tools);
            setData(data.data.tools);

        }
        loadDAta();
    }, [])



    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    data.slice(0, showAll ? data.length - 1 : 6).map((singleData) =>
                        <SingleData 
                        singleData={singleData} 
                        key={singleData.id} 
                        setUniqueId={setUniqueId}
                        />)
                }
            </div>
            {
                !showAll && (<span onClick={handleShowAll}>
                    <Button>See More</Button>
                </span>)
            }
            <Modal />
        </>
    );
};

export default Card;