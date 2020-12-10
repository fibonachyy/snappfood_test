import React, { useState } from 'react'
import './filterSelectCard.scss'
import { useSelector } from 'react-redux'
const FilterSelectCard = props => {

    const handelSelectItem = (value) => {
        props.selectItem(value)
    }
    const { title, value, selectedItem, selected } = props
    console.log(props);
    return (
        <>
            <div className="filterSelectCard filterSelectCard--active" onClick={e => handelSelectItem(value)}>
                {selected == true
                    ?
                    <svg width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><circle cx="8" cy="8" r="8" fill="#00D170"></circle><path fill="#FFF" d="M11.812 5.655a.616.616 0 0 0-.888 0L7.01 9.586l-1.533-1.52a.616.616 0 0 0-.888 0 .62.62 0 0 0 0 .89l1.977 1.966c.116.116.29.193.444.193a.664.664 0 0 0 .444-.193l4.359-4.357a.644.644 0 0 0 0-.91z"></path></g></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7.5" fill="#F2F2F2" fill-rule="evenodd" stroke="#E6E6E6"></circle></svg>
                }
                <span>{title}</span>
            </div>
        </>
    )
}


export default FilterSelectCard