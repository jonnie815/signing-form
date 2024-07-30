// script.js
const container = document.getElementById('container');
const signUpButton = document.getElementById('goToSignUp');
const signInButton = document.getElementById('goToSignIn');
const forgotPasswordButton = document.getElementById('forgotPassword');
const signInFromRecoveryButton = document.getElementById('goToSignInFromRecovery');
const signUpOverlayButton = document.getElementById('signUp');
const signInOverlayButton = document.getElementById('signIn');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
  document.querySelector('.sign-in-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'none';
  document.querySelector('.sign-up-container').style.display = 'flex';
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
  document.querySelector('.sign-up-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'none';
  document.querySelector('.sign-in-container').style.display = 'flex';
});

forgotPasswordButton.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add("right-panel-active");
  document.querySelector('.sign-in-container').style.display = 'none';
  document.querySelector('.sign-up-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'flex';
});

signInFromRecoveryButton.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove("right-panel-active");
  document.querySelector('.sign-up-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'none';
  document.querySelector('.sign-in-container').style.display = 'flex';
});

signUpOverlayButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
  document.querySelector('.sign-in-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'none';
  document.querySelector('.sign-up-container').style.display = 'flex';
});

signInOverlayButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
  document.querySelector('.sign-up-container').style.display = 'none';
  document.querySelector('.password-recovery-container').style.display = 'none';
  document.querySelector('.sign-in-container').style.display = 'flex';
});

document.getElementById('signUpForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign Up Successful!');
});

document.getElementById('signInForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Sign In Successful!');
});

document.getElementById('passwordRecoveryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('recoveryEmail').value;
  alert(`Recovery email sent to ${email}`);
});
