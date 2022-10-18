const formLogin = document.getElementById("form-login");

formLogin.onsubmit = async (e) => {
  e.preventDefault();
  const loginDetails = await login({
    username: formLogin.username.value,
    password: formLogin.password.value,
  });
  console.log(loginDetails);

  if (loginDetails.error) {
    pStatus.innerText = loginDetails.error;
    return;
  }
  accessToken = loginDetails.accessToken;
  pStatus.innerHTML = `Login Successful!`;
};
