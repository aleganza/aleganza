import { useState, useEffect } from "react";
import "./styles/Contact.css";
import ActionButton from "./buttons/ActionButton";
import { FiSend, FiCheck } from "react-icons/fi";
import HomeSection from "./Section";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "e3c5da43-7d36-470d-9a6c-5ccc19ac9529");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setStatus("idle");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("idle");
    }
  };

  return (
    <HomeSection id="contact">
      <h1 className="heading unselectable">Contact</h1>

      <div className="contact-form">
        <form onSubmit={onSubmit} style={{ color: "white" }}>
          <div className="form-group">
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
            <textarea
              className="element"
              placeholder="Message"
              name="message"
              required
              id="message"
            />
          </div>

          <div className="submit">
            <ActionButton
              text={
                status === "loading"
                  ? "Loading..."
                  : status === "success"
                  ? "Sent!"
                  : "Submit"
              }
              type="submit"
              iconRight={
                status === "loading"
                  ? undefined
                  : status === "success"
                  ? FiCheck
                  : FiSend
              }
              color={status === "success" ? "#28a745" : undefined}
            />
          </div>
        </form>
      </div>
    </HomeSection>
  );
}
