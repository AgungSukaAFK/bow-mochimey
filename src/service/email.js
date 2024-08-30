export const emailServices = {
  sendEmail: async (data) => {
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          key: process.env.NEXT_PUBLIC_KEY, // Pastikan KEY tersedia di client-side atau telah diinject
        }),
      });

      // Optional: Check if the response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Assuming the response is in JSON
      return result;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error; // Rethrow the error so it can be handled by the caller
    }
  },
};
