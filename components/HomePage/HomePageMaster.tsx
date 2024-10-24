import HomeBannersInspiration1Master from './BannerSection/HomeBannersInspiration1/HomeBannersMaster';
import HomeBannersInspiration3Master from './BannerSection/HomeBannersInspiration3/HomeBannersMaster';
import TopCategories from './PersonalizedCategories/TopCategories';
import BrandListing from './BrandSection/BrandListingMaster';
import CollectionsMaster from './FeaturedCollections/CollectionMaster';
import style from '../../styles/components/home.module.scss';

const HomePageMaster = () => {
  return (
    <>
      <HomeBannersInspiration3Master />
      <div className={`row ps-lg-5 pe-lg-5 ${style.backgoundColor}`}>
        <TopCategories />
        <BrandListing />
        <CollectionsMaster />
      </div>
    </>
  );
};

export default HomePageMaster;
