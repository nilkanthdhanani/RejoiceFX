import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon3 from '@/assets/images/svg/tadingIcon3.svg';

const tadingDetails = [
  {
    image: tadingIcon3,
    title: "Lorem Ipsum is simply",
    month: "03-04 Month",
    cost: "-",
    monthly: "$880.00",
  },
];

export default function TadingDiv11() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>PAMM</h3>
        <div className={styles.tadingDivGrid}>
          {tadingDetails.map((tadingDetails, index) => (
            <div className={styles.tadingDivGridBox} key={index}>
              <div className={styles.tadingBoxRange}>
                <Image src={tadingDetails.image} alt="tadingIcon1" />
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
