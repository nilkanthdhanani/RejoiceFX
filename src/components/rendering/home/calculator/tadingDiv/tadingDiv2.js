import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon1 from '@/assets/images/svg/tadingIcon1.svg';
import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';

const tadingDetails = [
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "05 Days",
    cost: "$500.00",
  },
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "10 Days",
    cost: "$1,000.00",
  },
];

export default function TadingDiv2() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Logo</h3>
        <div className={styles.tadingDivGrid}>
          {tadingDetails.map((tadingDetails, index) => (
            <div className={styles.tadingDivGridBox} key={index}>
              <div className={styles.tadingBoxRange}>
                <Image src={tadingDetails.image} alt="tadingIcon1" />
                <input type="radio" aria-label={`Select ${tadingDetails.title}`} />
              </div>
              <h4>{tadingDetails.title}</h4>
              <p>{tadingDetails.month}</p>
              <div className={styles.tadingBoxPrice}>
                <span>Total Cost</span>
                <h5>{tadingDetails.cost}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
