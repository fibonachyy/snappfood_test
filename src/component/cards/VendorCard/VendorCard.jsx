import React from 'react'
import './vendorCard.scss'
const VendorCard = (props) => {
    const { title, logo, area, rating, commentCount, costsForTwo } = props.data
    return (
        <>


            <section className='vendorCard' >
                <div className='vendorCard_header' >

                    <div>
                        <div className='vewndorcard_imgContainer' >
                            <img src={logo} alt={title} />
                        </div>
                    </div>

                    <div className='vendorCard_header_details'  >
                        <h3 className='vendorCard_header_details_title' >
                            {title}
                        </h3>
                        <br />
                        <div className='vendorCard_header_details_location' >{area}</div>
                    </div>
                </div>
                <div className='vendorCard_footer'>
                    <div >
                        <div className='vendorCard_footer_price' >
                            <div >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#A3A3A3" fill-rule="nonzero" d="M10.95 10.671l-7.944.874a8.927 8.927 0 0 0-.006.338v5.736l7.808-3.822a.242.242 0 0 0 .141-.215v-2.911zM3.327 9.498l7.446-.82c1.157-.124 2.175.774 2.175 1.936v2.968c0 .853-.487 1.63-1.259 2.01l-7.107 3.479c.48 1.131 1.351 1.83 2.106 1.707l13.884-5.708a.514.514 0 0 0 .325-.471v-3.105c0-4.792-3.926-8.49-8.946-8.494a8.952 8.952 0 0 0-8.624 6.498zm3.879 13.215c-1.848.428-3.569-.841-4.422-2.763l-.345.17A1 1 0 0 1 1 19.22v-7.338C1 5.883 5.908.996 11.953 1c6.099.004 10.945 4.57 10.945 10.494V14.6c0 1.017-.618 1.93-1.563 2.32L7.362 22.664l-.155.05zm10.436-9.396a.805.805 0 0 1-.809-.799c0-.44.363-.795.809-.795.442 0 .805.355.805.795 0 .44-.363.799-.805.799z"></path></svg>
                            </div>
                            <div className="vendorCard_footer_price_text">
                                <span>{costsForTwo}</span>
                                <span>تومان</span>
                            </div>
                        </div>
                    </div>
                    <div className='vendorCard_footer_badge'>
                        <span>( {commentCount} )</span>

                        <div className="badge--g">
                            <span >{rating.toFixed(2)}</span>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default VendorCard