import { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key",
  import.meta.env.VITE_WEBFORM_ACCESS_KEY
);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message sent!" : "Something went wrong.");
  };

  return (
    <section id="contact" className="mt-10">
      <h2 className="text-4xl font-bold">Contact</h2>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-4 max-w-xl">
        <input type="text" name="name" placeholder="Name" required className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500" />
        <input type="email" name="email" placeholder="Email" required className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500" />
        <textarea name="message" placeholder="Message" rows={4} required className="w-full bg-transparent border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500" />
        <button type="submit" className="self-start px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-black transition-colors">Submit</button>
        {result && <p className="text-gray-400 text-sm">{result}</p>}
      </form>
    </section>
  );
}