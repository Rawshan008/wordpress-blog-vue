import { ref } from 'vue';

export function useContactForm() {
  const name = ref('');
  const email = ref('');
  const phone = ref('');
  const message = ref('');

  const responseMessage = ref('');
  const responseClass = ref('');

  const loading = ref(false);
  const errors = ref({});


  const validateForm = () => {
    errors.value = {};
    let valid = true;

    if (!name.value.trim()) {
      errors.value.name = 'Name is required.';
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      errors.value.email = 'Email is required.';
      valid = false;
    } else if (!emailPattern.test(email.value)) {
      errors.value.email = 'Email is invalid.';
      valid = false;
    }

    if (phone.value === undefined || String(phone.value).trim() === '') {
      errors.value.phone = 'Phone number is required.';
      valid = false;
    }

    if (!message.value.trim()) {
      errors.value.message = 'Message is required.';
      valid = false;
    }

    return valid;
  };


  const authToken = btoa(`${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`);
  let url = `${import.meta.env.VITE_API_BASE_URL}/contact`;

  const submitForm = async () => {
    if (!validateForm()) return;

    loading.value = true;
    responseMessage.value = '';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        responseMessage.value = data.message;
        responseClass.value = 'success';
      } else {
        responseMessage.value = data.message || 'An error occurred';
        responseClass.value = 'error';
      }
    } catch (error) {
      responseMessage.value = 'An unexpected error occurred.';
      responseClass.value = 'error';
    }
    finally {
      loading.value = false;
    }
  };

  return {
    name,
    email,
    phone,
    message,
    responseMessage,
    responseClass,
    submitForm,
    errors
  };
}
