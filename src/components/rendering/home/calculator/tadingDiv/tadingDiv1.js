import styles from './tadingDiv.module.scss'
import Image from 'next/image'

import tadingIcon1 from '@/assets/images/svg/tadingIcon1.svg';
import tadingIcon2 from '@/assets/images/svg/tadingIcon2.svg';
import tadingIcon3 from '@/assets/images/svg/tadingIcon3.svg';
import tadingIcon4 from '@/assets/images/svg/tadingIcon4.svg';

const tadingDetails = [
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "03-04 Month",
    cost: "$8,000.00",
  },
  {
    image: tadingIcon2,
    title: "Lorem Ipsum is simply",
    month: "02-03 Month",
    cost: "$22,050.00",
  },
  {
    image: tadingIcon3,
    title: "Lorem Ipsum is simply",
    month: "01 Month",
    cost: "$19,800.00",
  },
  {
    image: tadingIcon4,
    title: "Lorem Ipsum is simply",
    month: "04-07 Month",
    cost: "$19,600.00",
  },
  {
    image: tadingIcon1,
    title: "Lorem Ipsum is simply",
    month: "03 Week",
    cost: "$25,000.00",
  },
];

export default function TadingDiv1() {
  return (
    <>
      <div className={styles.tadingDiv}>
        <h3>Compliance</h3>
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
