import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon1 from '@/assets/images/svg/tadingIcon1.svg';
import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';

const tadingDetails = [
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "20-30 Days",
    cost: "$2,000.00",
  },
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "30-45 Days",
    cost: "$4,800.00",
  },
];

export default function TadingDiv3() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Website</h3>
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
                <span>Total Cost</span>
                <h5>{tadingDetails.cost}</h5>
              </div>
              <div className={styles.tadingBoxPrice}>
                <span>Total Pages</span>
                <h5>Upto 30</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
