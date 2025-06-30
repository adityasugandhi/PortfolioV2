"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Basic validation
    let hasErrors = false;
    const newFormData = { ...formData };

    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      hasErrors = true;
    }

    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.value)) {
      newFormData.email.error = "Please enter a valid email";
      hasErrors = true;
    }

    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormData(newFormData);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Thank you for your message! I will get back to you soon.');
        setFormData(defaultFormState); // Reset form
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-md">
          {submitMessage}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-md">
          {submitMessage}
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            className={`bg-neutral-100 dark:bg-[#1E1E1E] border border-transparent dark:border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full ${
              formData.name.error ? 'border border-red-500' : ''
            }`}
            value={formData.name.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                name: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
            disabled={isSubmitting}
          />
          {formData.name.error && (
            <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>
          )}
        </div>
        
        <div className="w-full">
          <input
            type="email"
            placeholder="Your email address"
            className={`bg-neutral-100 dark:bg-[#1E1E1E] border border-transparent dark:border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full ${
              formData.email.error ? 'border border-red-500' : ''
            }`}
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
            disabled={isSubmitting}
          />
          {formData.email.error && (
            <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <textarea
          placeholder="Your Message"
          rows={10}
          className={`bg-neutral-100 dark:bg-[#1E1E1E] border border-transparent dark:border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 px-2 py-2 rounded-md text-sm text-neutral-700 dark:text-neutral-300 w-full ${
            formData.message.error ? 'border border-red-500' : ''
          }`}
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
          disabled={isSubmitting}
        />
        {formData.message.error && (
          <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>
        )}
      </div>
      
      <button
        className={`w-full px-2 py-2 mt-4 rounded-md font-bold transition-colors ${
          isSubmitting
            ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
            : 'bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-100'
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
