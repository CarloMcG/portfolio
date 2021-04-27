import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayaqnwn");
  if (state.succeeded) {
    return (
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        Thanks for your email, I will reply as soon as possible!
      </h1>
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h4 class="card-title">Email Me</h4>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            class="form-control form-fixer"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            class="form-control form-fixer"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            class="btn btn-primary btn-lg active"
          >
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
}

export default ContactForm;
