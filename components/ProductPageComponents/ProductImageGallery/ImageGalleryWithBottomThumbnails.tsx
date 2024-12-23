import ReactImageMagnify from 'react-image-magnify';
import Image from 'next/image';
import { CONSTANTS } from '../../../services/config/app-config';
import { ProductSlideshowImages } from '../../../interfaces/product-slideshow-images';
import imageStyle from '../../../styles/components/productImgMagnify.module.scss';
import useImageGallery from '../../../hooks/ProductImageGalleryHandler/useImageGallery';

const ImageGalleryWithBottomThumbnails = ({ slideShowImages }: ProductSlideshowImages) => {
  const { enlargeImg, activeImgIndex, handleSelectedImage, generateSrcSet } = useImageGallery({ slideShowImages });

  return (
    <div className={imageStyle.product_img_container}>
      <div className={imageStyle.img_container_column}>
        {/* Main Image */}
        <div className={imageStyle.product_img_bottom}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Product image',
                isFluidWidth: true,
                width: 400,
                height: 400,
                src: `${CONSTANTS.API_BASE_URL}/${enlargeImg}`,
                srcSet: generateSrcSet(enlargeImg), // Use srcSet to provide multiple resolutions
                sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 10vw, 10vw `, // Define sizes for different screen widths
              },
              largeImage: {
                src: `${CONSTANTS.API_BASE_URL}/${enlargeImg}`,
                srcSet: generateSrcSet(enlargeImg), // Use srcSet for large image as well
                sizes: `(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 30vw`,
                width: 1200,
                height: 1200,
              },
              // enlargedImageClassName: `${imageStyle.magnified_image}`,
              enlargedImagePosition: 'beside', // Ensure the image appears beside the main image
            }}
          />
        </div>

        {/* Thumbnails */}
        <div className={imageStyle.thumbnail_bottom}>
          {slideShowImages.map((image: string, i: number) => (
            <div
              className={`${imageStyle.img_wrap} ${i === activeImgIndex ? `${imageStyle.active}` : ''}`}
              key={i}
              onClick={() => handleSelectedImage(image, i)}
            >
              <Image src={`${CONSTANTS.API_BASE_URL}/${image}`} alt={`Thumbnail image ${i + 1}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryWithBottomThumbnails;
