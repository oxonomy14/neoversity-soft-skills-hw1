'use client';

import css from './Form.module.css';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';
import ThankYouModal from '@/components/ThankYouModal/ThankYouModal';
import type { ContactFormData } from '@/types/contact-form.types';
import PhoneInput from 'react-phone-number-input';

const TIME_SLOTS = ['08:00', '12:00', '16:00', '20:00'];

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [availableSlots, setAvailableSlots] = useState(TIME_SLOTS);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm<ContactFormData>();

  const selectedDate = watch('date');

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();

      if (result.success) {
        setOrderId(result.orderId);
        setIsModalOpen(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots(TIME_SLOTS);
      return;
    }

    const loadSlots = async () => {
      try {
        const response = await fetch(
          `/api/available-slots?date=${selectedDate}`,
        );

        if (!response.ok) {
          throw new Error('Failed to load slots');
        }

        const data = await response.json();

        const available = TIME_SLOTS.filter(
          (slot) => !data.bookedTimes.includes(slot),
        );

        setAvailableSlots(available);
      } catch (error) {
        console.error(error);
      }
    };

    loadSlots();
  }, [selectedDate]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className={css.formContainer}>
          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Name
              <input
                {...register('name', { required: 'Please enter your name' })}
                type="text"
                placeholder="e.g. Bobbie Navarro"
                className={css.inputForm}
              />
            </label>
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>
          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Phone
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'Please enter your phone number',
                }}
                render={({ field }) => (
                  <PhoneInput
                    {...field}
                    international
                    /*    defaultCountry="US" */
                    placeholder="e.g. (+1) 234-567-8910"
                    className={css.phoneInput}
                  />
                )}
              />
              {errors.phone && (
                <p className={css.error}>{errors.phone.message}</p>
              )}
            </label>
          </div>
          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Email
              <input
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Please enter a valid email',
                  },
                })}
                type="email"
                placeholder="e.g. yourname@mail.com"
                className={css.inputForm}
              />
            </label>
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}
          </div>

          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Choose Service
              <select
                {...register('service', {
                  /*         required: 'Please select a service', */
                  required: false,
                })}
                defaultValue=""
                className={css.selectForm}
              >
                <option value="" disabled>
                  Choose Service
                </option>
                <option value="home-cleaning">Home Cleaning</option>
                <option value="office-cleaning">Office Cleaning</option>
                <option value="furniture-cleaning">Furniture Cleaning</option>
                <option value="window-cleaning">Window Cleaning</option>
                <option value="carpet-cleaning">Carpet Cleaning</option>
                <option value="laundry-services">Laundry Services</option>
              </select>
            </label>
            {errors.service && (
              <p className={css.error}>{errors.service.message}</p>
            )}
          </div>
          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Date
              <input
                {...register('date', {
                  /*  required: 'Please enter Expected Date', */
                  required: false,
                })}
                type="date"
                placeholder="dd/mm/yy"
                className={css.inputForm}
              />
            </label>
          </div>
          <div className={css.gridItem}>
            <label className={css.labelForm}>
              Time
              <select {...register('time')} className={css.selectForm}>
                <option value="">Choose Time</option>

                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={css.attantionWrapper}>
            <p className={css.attantionText}>
              ⚠️ Not sure about the date, time, or required services yet? Leave
              these fields blank and provide details in the comment section. Our
              manager will contact you to discuss your needs and answer any
              questions.{' '}
            </p>
          </div>
          <div className={css.gridItemTextarea}>
            <label className={css.labelForm}>
              Comment
              <textarea
                {...register('message', {
                  required: 'Please enter your comment',
                })}
                placeholder="Your comment"
                className={css.textareaForm}
              />
            </label>
            {errors.message && (
              <p className={css.error}>{errors.message.message}</p>
            )}
          </div>
        </div>
        <button type="submit" className={css.btnForm} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Book Appointment'}
        </button>
      </form>
      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        orderId={orderId}
      />
    </>
  );
}
