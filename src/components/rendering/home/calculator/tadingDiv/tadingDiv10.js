import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';

const tadingDetails = [
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "-",
    monthly: "$1,099.00",
  },
];

export default function TadingDiv10() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Copy Trading</h3>
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
