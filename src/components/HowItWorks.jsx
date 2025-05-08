import './HowItWorks.css';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: '📤', // Emoji as icon (bad me hum SVG ya FontAwesome use kar sakte hain)
      title: 'Upload License',
      description: 'Share your license details securely',
    },
    {
      id: 2,
      icon: '💰',
      title: 'Get Valuation',
      description: 'Receive offer within 24 hours',
    },
    {
      id: 3,
      icon: '💳',
      title: 'Get Paid',
      description: 'Instant transfer to your bank',
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="step-card"
          >
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


