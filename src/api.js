const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

/**
 * Sends contact message details to the backend API.
 * @param {Object} data - Contains { name, email, phone, message }
 * @returns {Promise<Object>} The API response.
 */
export async function sendContactMessage(data) {
  const response = await fetch(`${BACKEND_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to send contact message");
  }

  return response.json();
}
