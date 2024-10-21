import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon1 from '@/assets/images/svg/tadingIcon1.svg';
import tadingIcon4 from '@/assets/images/svg/tadingIcon4.svg';

const tadingDetails = [
  {
    image: tadingIcon4,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "Minimum deposit $ 20k",
    monthly: "$2,000.00",
  },
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "-",
    monthly: "$500.00- $700.00",
  },
];

export default function TadingDiv9() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Liquidity</h3>
        <div className={styles.tadingDivGrid}>
          {tadingDetails.map((tadingDetails, index) => (
            <div className={styles.tadingDivGridBox} key={index}>
              <div className={styles.tadingBoxRange}>
                <Image src={tadingDetails.image} alt="tadingIcon1" />
                <label htmlFor={`tadingOption-${index}`} className={styles.radioLabel}>Select</label>
                <input type="radio" />
              </div>
              <h4>{tadingDetails.title}</h4>
              <p>{tadingDetails.month}</p>
              <div className={styles.tadingBoxPrice}>
                <span>One Time Cost</span>
                <h5>{tadingDetails.cost}</h5>
              </div>
              <div className={styles.tadingBoxPrice}>
                <span>Monthly</span>
                <h5>{tadingDetails.monthly}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
