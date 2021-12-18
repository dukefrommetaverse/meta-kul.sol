import SingleCard from "../components/singleCard";
import { exploreData } from '../components/data/exploreData';
import exploreStyles from "../styles/Explore.module.css";
import ButtonCommon from '../components/buttonCommon';
import { useState, useEffect } from "react";

const filterTypes = ['All', 'PFP','Skull', 'Banners', 'Skeleton', 'Launchpad', 'Skeleton']

const Explore = () => {
    const[filteredData, setFilteredData] = useState([]);

    const handleFilterChange = (event) => {
        let filteredValues;
        if(event.target.value !== filterTypes[0]) {
            filteredValues = exploreData.filter((ele) => ele.type === event.target.value);
        } else {
            filteredValues = exploreData;
        }
        setFilteredData(filteredValues);
    }

    useEffect(() => {
        setFilteredData(exploreData);
    }, [])

    return (
    <>
        <div className={exploreStyles.customPad}>
            <h1 className={`text-black font-bold`}>Explore</h1>
            <div className={exploreStyles.filterButtons}>
                <ul>
                    {
                        filterTypes.map((type, index) => <li key={index}><button value={type} onClick={handleFilterChange} className={exploreStyles.activeBtn}>{type}</button></li>)
                    }
                </ul>
            </div>
            <SingleCard data={filteredData} />
        </div>
    </>
    )
}

export default Explore;
