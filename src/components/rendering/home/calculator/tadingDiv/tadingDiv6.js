import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';
import tadingIcon3 from '@/assets/images/svg/tadingIcon3.svg';
import tadingIcon4 from '@/assets/images/svg/tadingIcon4.svg';

const tadingDetails = [
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "$1,000.00",
    monthly: "$250.00",
  },
  {
    image: tadingIcon4,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "$1,000.00",
    monthly: "$350.00",
  },
  {
    image: tadingIcon3,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "$1,500.00",
    monthly: "$500.00",
  },
];

export default function TadingDiv6() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Cabinet Mobile App</h3>
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
