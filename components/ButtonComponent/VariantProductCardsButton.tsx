import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';
import styles from '../../styles/components/variantProductCards.module.scss';

const VariantProductCardsButton = () => {
  return (
    <div className={styles.varients_btns}>
      <div className={styles.quickShop_btn}>
        <span className={styles.quickShop}>Quick View</span>
        <span className={styles.quickIcon}>
          <IoEyeOutline />
        </span>
      </div>
      <div className={styles.quickShop_btn}>
        <span className={styles.quickShop}>Quick Shop</span>
        <span className={styles.quickIcon}>
          <IoCartOutline />
        </span>
      </div>
    </div>
  );
};

export default VariantProductCardsButton;
