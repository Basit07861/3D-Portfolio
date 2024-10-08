import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Ready to bring my skills to your team? <br className="sm:block hidden" />
        Let's connect! </p>
        <Link to="/contact" className="btn">
            Contact
        </Link>
    </section>
  )
}

export default CTA