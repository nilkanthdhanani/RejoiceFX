import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon1 from '@/assets/images/svg/tadingIcon1.svg';
import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';
import tadingIcon3 from '@/assets/images/svg/tadingIcon3.svg';
import tadingIcon4 from '@/assets/images/svg/tadingIcon4.svg';

const tadingDetails = [
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "15 Days",
    cost: "$6,000.00",
  },
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "15 Days",
    cost: "$5,000.00",
  },
  {
    image: tadingIcon3,
    title: "Lorem Ipsum is simply",
    month: "15 Days",
    cost: "$3,500.00",
  },
  {
    image: tadingIcon4,
    title: "Lorem Ipsum is simply",
    month: "15 Days",
    cost: "$2,500.00",
  },
];

export default function TadingDiv4() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Trading Platform</h3>
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
