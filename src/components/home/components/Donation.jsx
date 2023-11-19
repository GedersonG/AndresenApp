import donationFirstPage from '../../../assets/documents/donation-1.jpg';
import donationSecondPage from '../../../assets/documents/donation-2.jpg';

export const Donation = () => {

  return (
    <div className="donation-container mt-2">

      <div className="images-container">
        <img src={donationFirstPage} />
        <img src={donationSecondPage} />
      </div>

    </div>
  )
}
