
export const sendForm = async (data) => await fetch('/api/sendEmail', {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
});




