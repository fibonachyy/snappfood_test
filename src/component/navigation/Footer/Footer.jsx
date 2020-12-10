import React from 'react';
import './footer.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as globalActions from '../../../store/actions/globalAction'
const Footer = () => {
    const dispatch = useDispatch();
    const { top_filters, active_top_filter } = useSelector(state => state.global)
    const handelSelectFilter = (e) => {
        dispatch(globalActions.setTopFilter(e.target.attributes.getNamedItem('data-value').value))
    }
    const filterBnGenerator = data => {
        return data.map(node => {
            const { title, value, selected } = node
            return (<>
                <span onClick={handelSelectFilter} className={selected == true ? 'footer_filterList_items footer_filterList_items--active' : 'footer_filterList_items'} data-value={value} > {title}</span>
            </>)
        })
    }
    const openFilterModal = () => {
        dispatch(globalActions.openModal('filter'))
    }
    return (
        <>
            <footer className='footer'>
                <div className='footer_filterList'>
                    {filterBnGenerator(top_filters)}
                </div>
                <div className='footer_allFilterBTN' onClick={openFilterModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6"><path fill="#404040" fill-rule="evenodd" d="M4.875 5.568c-.072.097-.16.181-.263.249-.483.32-1.149.21-1.487-.25L.193 1.595A.978.978 0 0 1 0 1.013C0 .453.478 0 1.068 0h5.864c.22 0 .433.064.612.183.484.321.601.953.263 1.41L4.875 5.569z"></path></svg>
                    <span>همه فیلتر ها</span>
                </div>
            </footer>
        </>
    )
}


export default Footer;