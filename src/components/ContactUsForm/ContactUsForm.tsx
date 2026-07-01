'use client';

import css from './ContactUsForm.module.css';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';

import type { ContactFormData } from '@/types/contact-form.types';
import PhoneInput from 'react-phone-number-input';

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<ContactFormData>();

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
        reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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

          <div className={css.gridItemTextarea}>
            <label className={css.labelForm}>
              Your question?
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
          <button type="submit" className={css.btnForm} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </form>
    </>
  );
}
