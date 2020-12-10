import React from 'react'
import './filterToggleCard.scss';
import { useSelector } from 'react-redux';
const FilterToggleCard = props => {
    const { filter_section } = useSelector(state => state.global)

    const handelSelectItem = (value) => {
        console.log(value);
        props.selectItem(props)
    }
    const { title, value, selected } = props
    console.log(props);
    return (
        <>
            <div className="filterToggleCard">
                <input type='checkbox' defaultChecked={selected} onChange={() => handelSelectItem(value)}></input>
                <p>{title}</p>
            </div>
        </>
    )
}


export default FilterToggleCard