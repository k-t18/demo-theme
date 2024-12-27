import Image from 'next/image';
import HomeBannerLoading from './HomeBannersLoading';
import HomeBanners from './HomeBanners';
import ErrorImage from '../../../../public/assets/images/error-icon.png';

const MasterComponent = ({ bannerData }: any) => {
  console.log('bannerData', bannerData);
  if (bannerData?.data?.length > 0) {
    return <HomeBanners bannersList={bannerData?.data} />;
  }
  if (bannerData?.data?.length === 0) {
    return (
      <div className="p-3 d-flex justify-content-center align-items-center" style={{ fontSize: '40px' }}>
        <Image src={ErrorImage} width={250} height={250} alt="Error Image" />
      </div>
    );
  }
  return <HomeBannerLoading />;
};

export default MasterComponent;
