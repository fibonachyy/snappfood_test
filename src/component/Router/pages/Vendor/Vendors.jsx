import React, { useEffect } from 'react';
import * as cards from '../../../cards'
import './vendor.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as globalActions from '../../../../store/actions/globalAction';
const Vendors = props => {
    const dispatch = useDispatch()
    const { finalResult } = useSelector(state => state.global)

    useEffect(() => {
        getInitialData()
    }, [])


    const getInitialData = () => {
        axios.get("https://snappfood.ir/mobile/v3/restaurant/vendors-list")
            .then(response => {
                const { status, data } = response
                if (status === 200)
                    return data
            })
            .then(data => {
                const { extra_sections, open_count, count, finalResult } = data.data;
                const { top, sections } = extra_sections.filters
                finalResult.shift()
                dispatch(globalActions.setCounts(open_count, count))
                dispatch(globalActions.setFilters(top.data, sections[0].data))
                dispatch(globalActions.setResult(finalResult))
            }).catch(e => {
                console.log(e);
            })
    }

    const vendorGenerator = (data) => {
        return data.map(node => {
            return <cards.VendorCard {...node} />
        })
    }
    return (
        <>
            <div className='vendorcontainer'>
                <div className='vendorcontainer_title' ><h2>۱۶۱  فروشنده‌ی باز</h2></div>
                {vendorGenerator(finalResult)}
            </div>
        </>
    )
}



export default Vendors;