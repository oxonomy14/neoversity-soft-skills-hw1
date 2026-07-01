import Container from '../Container/Container';
import css from './Terms.module.css';

export default function Terms() {
  return (
    <>
      <section className={css.content}>
        <Container>
          <div className={css.wrapper}>
            <p className={css.lastUpdate}>
              <strong>Last Updated:</strong> June 25, 2026
            </p>
            <div className={css.section}>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Goodust website and services, you
                agree to comply with and be bound by these Terms of Use. If you
                do not agree with any part of these terms, please refrain from
                using our website or booking our services.
              </p>
            </div>

            <div className={css.section}>
              <h2>2. Services</h2>
              <p>
                Goodust provides residential and commercial cleaning services,
                including but not limited to home cleaning, office cleaning,
                furniture cleaning, window cleaning, carpet cleaning, and
                laundry services. Service availability may vary depending on
                location, scheduling, and operational requirements.
              </p>
            </div>

            <div className={css.section}>
              <h2>3. Appointments and Scheduling</h2>
              <p>
                Appointments may be booked through our website, by phone, or by
                email. While we make every effort to accommodate requested dates
                and times, all appointments are subject to availability. Goodust
                reserves the right to reschedule appointments due to unforeseen
                circumstances, including weather conditions, staff availability,
                or other operational factors.
              </p>
            </div>
            <div className={css.section}>
              <h2>4. Payment</h2>
              <p>
                Payment is due upon completion of the service unless otherwise
                agreed in writing. We accept approved payment methods listed on
                our website. Failure to make payment may result in additional
                charges or suspension of future services.
              </p>
            </div>
            <div className={css.section}>
              <h2>5. Cancellations</h2>
              <p>
                Customers may cancel or reschedule appointments by providing
                reasonable notice prior to the scheduled service time.
                Cancellations made less than 24 hours before the appointment may
                be subject to a cancellation fee. Repeated last-minute
                cancellations may affect future booking availability.
              </p>
            </div>
            <div className={css.section}>
              <h2>6. Customer Responsibilities</h2>
              <p>
                Customers are responsible for providing accurate information
                regarding the service location, access requirements, and any
                special instructions. Customers should secure valuables, fragile
                items, and personal belongings before the scheduled service.
                Goodust is not responsible for items that were not properly
                secured or disclosed.
              </p>
            </div>
            <div className={css.section}>
              <h2>7. Limitation of Liability</h2>
              <p>
                While Goodust strives to provide high-quality services, we shall
                not be liable for indirect, incidental, special, or
                consequential damages arising from the use of our website or
                services. Any claims relating to service performance must be
                reported within 48 hours of service completion. Our liability
                shall be limited to the amount paid for the specific service in
                question.
              </p>
            </div>
            <div className={css.section}>
              <h2>8. Privacy</h2>
              <p>
                Your use of our website and services is also governed by our
                Privacy Policy. We are committed to protecting your personal
                information and handling customer data responsibly in accordance
                with applicable laws and regulations.
              </p>
            </div>
            <div className={css.section}>
              <h2>9. Contact Information</h2>
              <p>
                If you have any questions regarding these Terms of Use, please
                contact us:
              </p>
              <p>
                <strong>Goodust Cleaning Services</strong>
                <br />
                Email: hello@goodust.demo <br />
                Phone: +1 (234) 567-8910
              </p>
              <p>
                We will make reasonable efforts to respond to all inquiries in a
                timely manner.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
