// const API_BASE_URL = "https://sailaya.pythonanywhere.com;
const API_BASE_URL = process.env.REACT_APP_API_URL;

export async function registerUser(data) {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function loginUser(data) {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getJobs() {
  const response = await fetch(`${API_BASE_URL}/jobs`);
  return response.json();
}

export async function applyJob(data) {
  const response = await fetch(`${API_BASE_URL}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
