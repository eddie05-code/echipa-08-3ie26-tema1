// contact.js - Form validation

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (!form) return;

  function showError(inputId, errorId, msg) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.textContent = msg;
  }

  function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.remove('error');
    if (error) error.textContent = '';
  }

  // Live validation
  ['firstName', 'lastName', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => clearError(id, id + 'Error'));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    const firstName = document.getElementById('firstName').value.trim();
    const lastName  = document.getElementById('lastName').value.trim();
    const email     = document.getElementById('email').value.trim();
    const message   = document.getElementById('message').value.trim();
    const gdpr      = document.getElementById('gdpr').checked;

    // Clear previous errors
    ['firstName','lastName','email','message','gdpr'].forEach(id => {
      clearError(id, id + 'Error');
    });

    if (!firstName) {
      showError('firstName', 'firstNameError', 'Prenumele este obligatoriu.');
      valid = false;
    }

    if (!lastName) {
      showError('lastName', 'lastNameError', 'Numele este obligatoriu.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      showError('email', 'emailError', 'Adresa de email este obligatorie.');
      valid = false;
    } else if (!emailRegex.test(email)) {
      showError('email', 'emailError', 'Introdu o adresa de email valida.');
      valid = false;
    }

    if (!message || message.length < 10) {
      showError('message', 'messageError', 'Mesajul trebuie sa aiba cel putin 10 caractere.');
      valid = false;
    }

    if (!gdpr) {
      document.getElementById('gdprError').textContent = 'Trebuie sa accepti politica de confidentialitate.';
      valid = false;
    }

    if (valid) {
      form.style.display = 'none';
      successMsg.style.display = 'flex';
    }
  });

});
