import { useState } from "react";
import "./styles/Contact.css";
import ActionButton from "./buttons/ActionButton";
import { FiSend } from "react-icons/fi";
import HomeSection from "./Section";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target as HTMLFormElement);

    // Assicurati di rimuovere gli spazi extra o sostituirli se necessario
    formData.append("access_key", "e3c5da43-7d36-470d-9a6c-5ccc19ac9529");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <HomeSection id="contact">
      <h1 className="heading unselectable">Contact</h1>

      <div className="contact-form">
        <form onSubmit={onSubmit} style={{ color: "white" }}>
          <div className="form-group">
            {/* <label htmlFor="name">Name:</label> */}
            <input
              className="element"
              placeholder="Name"
              type="text"
              name="name"
              required
              id="name"
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="email">Email:</label> */}
            <input
              className="element"
              placeholder="Email"
              type="email"
              name="email"
              required
              id="email"
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="message">Message:</label> */}
            <textarea
              className="element"
              placeholder="Message"
              name="message"
              required
              id="message"
            />
          </div>

          {/* <button type="submit">Submit Form</button> */}
          <div className="submit">
            <ActionButton text="submit" type="submit" iconRight={FiSend} />
          </div>
        </form>
        <span>{result}</span>
      </div>
    </HomeSection>
  );
}
