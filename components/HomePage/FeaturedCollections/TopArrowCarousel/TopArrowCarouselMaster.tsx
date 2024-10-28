import Image from 'next/image';
import { useSelector } from 'react-redux';
import useAddToCartHook from '../../../../hooks/CartPageHook/useAddToCart';
import useDisplayTagHooks from '../../../../hooks/HomePageHooks/useFeaturedCollections';
import ErrorImage from '../../../../public/assets/images/error-icon.png';
import { selectWishlist } from '../../../../store/slices/wishlist-slices/wishlist-local-slice';
import TopArrowCarouselData from './TopArrowCarouselData';
import TopArrowCarouselLoading from './TopArrowCarouselLoading';

const TopArrowCarouselMaster = () => {
  const { allTagsData, isLoading, errorMessage } = useDisplayTagHooks();
  const { addToCartItem, getPartyName } = useAddToCartHook();
  const wishlistData = useSelector(selectWishlist).items;

  if (isLoading) {
    return <TopArrowCarouselLoading />;
  } else if (allTagsData?.length > 0) {
    return (
      <>
        <TopArrowCarouselData
          allTagsData={allTagsData}
          addToCartItem={addToCartItem}
          getPartyName={getPartyName}
          wishlistData={wishlistData}
        />
      </>
    );
  } else if (errorMessage) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default TopArrowCarouselMaster;
