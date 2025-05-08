import './Testimonials.css';
import { motion } from 'framer-motion';

export default function Testimonials() {

  const reviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'CTO, TechPioneers',
      review: 'SoftSell helped us recover 40% cost on unused licenses!',
      rating: '★★★★★',
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Finance Manager, GrowFast',
      review: 'The valuation was fair and payment instant. Highly recommend!',
      rating: '★★★★☆',
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="rating">{review.rating}</div>
            <p className="review-text">"{review.review}"</p>
            <div className="reviewer-info">
              <h4>{review.name}</h4>
              <p>{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
