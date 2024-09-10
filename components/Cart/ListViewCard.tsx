import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CONSTANTS } from '../../services/config/app-config';
import { currency_selector_state } from '../../store/slices/general_slices/multi-currency-slice';
import cartStyles from '../../styles/components/cartlist.module.scss';
import { useRouter } from 'next/router';
import selectedMultilanguageSlice, { SelectedFilterLangDataFromStore } from '../../store/slices/general_slices/selected-multilanguage-slice';
function ListViewCard({ cartListingItems, setCartListingItems, addToCartItem, RemoveItemCartAPIFunc }: any) {
    const router = useRouter()
    const currency_state_from_redux: any = useSelector(currency_selector_state);
    const SelectedLangDataFromStore: any = useSelector(
        SelectedFilterLangDataFromStore
    );
    console.log(SelectedLangDataFromStore, 'cart')
    const [currencySymbol, setCurrencySymbol] = useState('')
    const [updatedCartList, setUpdatedCartList]: any = useState([])
    const [selectedMultiLangData, setSelectedMultiLangData] = useState<any>();
    useEffect(() => {
        if (
            Object.keys(SelectedLangDataFromStore?.selectedLanguageData)?.length > 0
        ) {
            setSelectedMultiLangData(SelectedLangDataFromStore?.selectedLanguageData);
        }
    }, [SelectedLangDataFromStore]);
    const imageLoader = ({ src, width, quality }: any) => {
        return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
    };
    const handleUpdateCart = () => {
        const params = {
            // currency: currency_state_from_redux?.selected_currency_value ? currency_state_from_redux?.selected_currency_value : currency_state_from_redux?.default_currency_value,
            currency: 'INR',
            party_name: cartListingItems?.party_name,
            item_list: updatedCartList
        }
        addToCartItem(params, setCartListingItems)
    }
    const handleQtyChange = (item_code: string, value: string) => {
        const newQty = Number(value);
        const updatedItems = cartListingItems?.categories?.map((category: any) => ({
            ...category,
            orders: category.orders.map((item: any) => {
                if (item.item_code === item_code) {
                    return { ...item, qty: newQty };
                }
                return item;
            }),
        }));
        setCartListingItems((prevItems: any) => ({ ...prevItems, categories: updatedItems }));
        setUpdatedCartList((prevList: any) => {
            const itemIndex = prevList.findIndex((item: any) => item.item_code === item_code);
            if (itemIndex !== -1) {
                const updatedList = [...prevList];
                updatedList[itemIndex].quantity = newQty;
                return updatedList;
            } else {
                return [...prevList, { item_code, quantity: newQty }];
            }
        });
    };
    const handleDeleteItem = (item_code: any) => {
        const params = {
            item_code: item_code,
            ququotation_id: cartListingItems?.name
        }
        RemoveItemCartAPIFunc(params, setCartListingItems)
    }
    const goToCheckout = () => {
        router.push("/checkout");
    };
    return (
        <div className='py-3'>
            {cartListingItems?.categories?.length > 0 && cartListingItems?.categories?.map((category: any) => (
                <div className="border p-4">

                    <h3>{category?.category}</h3>
                    <div className='row d-md-none d-lg-block d-sm-none d-none  '>
                        <div className='col-lg-12 col-md-6'>
                            <div className={`row ${cartStyles.cart_header}`}>
                                <div className="col-lg-2  col-md-12 m-0"> </div>
                                <div className="col-lg-7 col-md-12"><h6>{selectedMultiLangData?.item_with_desc}</h6></div>
                                <div className="col-lg-1 col-md-12 text-center"><h6>{selectedMultiLangData.price_c}</h6></div>
                                <div className="col-lg-1 col-md-12 text-center"><h6>{selectedMultiLangData?.quantity_c}</h6></div>
                                <div className="col-lg-1 col-md-12 text-center"><h6>{selectedMultiLangData?.total}</h6></div>
                            </div>
                        </div>
                        <div className='col-lg-12 col-md-6'>

                            {category?.orders?.length > 0 && category?.orders?.map((item: any) => (
                                <div className='row mt-3 ms-2'>
                                    {/* {setCurrencySymbol(item?.currency_symbol)} */}
                                    <div className="col-lg-2 col-md-12">
                                        <Image src={item?.image} alt='product image' width={100} height={100} loader={imageLoader} />
                                    </div>
                                    <div className="col-lg-7 col-md-12">{item?.item_name} <br /><b>{selectedMultiLangData?.item_code} : {item?.item_code}</b>
                                        <div>
                                            <button className='btn btn-link text-decoration-none p-0' onClick={() => handleDeleteItem(item?.item_code)}>Delete</button></div>
                                    </div>
                                    <div className="col-lg-1 col-md-12">{item?.currency_symbol}{item?.amount}</div>
                                    <div className="col-lg-1 col-md-12">
                                        <input type="number" value={item?.qty} className='w-100 text-center border' onChange={(e) => handleQtyChange(item?.item_code, e.target.value)} /></div>
                                    <div className="col-lg-1 col-md-12">{item?.currency_symbol}{item?.amount}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {category?.orders?.length > 0 && category?.orders?.map((item: any) => (
                        <div className='row d-lg-none d-md-block'>
                            <div className='col-12 border'>
                                <div className='row'>

                                    <div className="col-6 col-sm-6"><Image src={item?.image} alt='product image' width={100} height={100} loader={imageLoader} /></div>
                                </div>
                            </div>
                            <div className='col-12 border'>
                                <div className='row'>
                                    <div className="col-6"><h6>{selectedMultiLangData?.item_with_desc}</h6></div>
                                    <div className="col-6">
                                        {item?.item_name} <br /><b>{selectedMultiLangData?.item_code} : {item?.item_code}</b>
                                        <div>
                                            <button className='btn btn-link text-decoration-none p-0' onClick={() => handleDeleteItem(item?.item_code)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 border'>
                                <div className='row'>
                                    <div className="col-6"><h6>{selectedMultiLangData?.price_cs} :</h6></div>
                                    <div className="col-6">{item?.currency_symbol}{item?.amount}</div>
                                </div>
                            </div>
                            <div className='col-12 border'>
                                <div className='row'>
                                    <div className="col-6"><h6>{selectedMultiLangData?.quantity_c}</h6></div>
                                    <div className="col-6"><input type="number" value={item?.qty} className='w-auto text-start border-0' onChange={(e) => handleQtyChange(item?.item_code, e.target.value)} /></div>
                                </div>
                            </div>
                            <div className='col-12 border'>
                                <div className='row'>
                                    <div className="col-6"><h6>{selectedMultiLangData?.total}</h6></div>
                                    <div className="col-6">{item?.currency_symbol}{item?.amount}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            <div className="container mt-3 mb-0 pb-0">
                <div className="col-12 pb-0 mb-0">
                    <div className="row justify-content-start ">
                        {/* <div className="col-md-6 note-line-height">
                            <h5>{selectedMultiLangData?.note}:-</h5>
                            <h5>note</h5>
                            <p className="note-line-height">
                                {selectedMultiLangData?.note_1}
                                note1
                            </p>
                            <p className="note-line-height">
                                {selectedMultiLangData?.note_2}
                                note2
                                <button
                                    onClick={handleShowEnqModal}
                                    className="btn btn-link text-decoration-none"
                                >
                                    {selectedMultiLangData?.let_us_know}
                                    let us know
                                </button>{" "}
                                {selectedMultiLangData?.to_mail_us}{" "}
                            </p>
                        </div> */}
                        <div className="col-md-8 col-lg-6 text-start ">

                            <>
                                <div className="row ">
                                    <div className="col-lg-6 col-6  ">

                                        {selectedMultiLangData?.sub_total}{" "}

                                    </div>
                                    :
                                    <div className="col-lg-5 col-md-5 col-sm-5 col-6  ">
                                        {currencySymbol}{" "}
                                        {cartListingItems?.grand_total_excluding_tax}
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-lg-6 col-6 ">
                                        {selectedMultiLangData?.order_total_including_tax}{" "}
                                    </div>
                                    :

                                    <div className="col-lg-5 col-md-5 col-sm-5 col-6  ">
                                        {currencySymbol}{" "}
                                        {cartListingItems?.grand_total_including_tax}
                                    </div>

                                    <div className="col-12">
                                        <div className='row  mt-2'>
                                            <div className='col-lg-4 col-md-6 col-6 p-0 d-flex align-items-center justify-content-start'>

                                                <button
                                                    className=" btn btn-link text-decoration-none"
                                                    onClick={() => handleUpdateCart()}
                                                >
                                                    {selectedMultiLangData?.update_cart}
                                                </button>

                                            </div>
                                            <div className="col-6 d-flex align-items-center text-center ">
                                                <Link href="/checkout">
                                                    <button
                                                        type="button"
                                                        className="  text-uppercase p-2"
                                                        style={{
                                                            backgroundColor: "#0071DC",
                                                            color: "#fff",
                                                            borderRadius: "7px",
                                                        }}
                                                        onClick={goToCheckout}
                                                    >
                                                        {
                                                            selectedMultiLangData?.order_checkout
                                                        }

                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            {/* )} */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <EnqModal show={showEnqModal} handleClose={handleCloseEnqModal} /> */}
        </div>
    )
}
export default ListViewCard