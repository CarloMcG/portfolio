import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [state, handleSubmit] = useForm("mayaqnwn");
  if (state.succeeded) {
    return (
      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-6">
          <div class="card text-white bg-dark mb-3">
            <div class="card-body">
              <h4 class="card-title">Thanks!</h4>
              <p class="card-text">Email submitted successfully</p>
              <p class="card-text">
                I look forward to replying to your email as soon as possible
              </p>
              <p class="card-text">
                In the mean time, feel free to contact me on any of the sites
                linekd below
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div class="card text-white bg-dark mb-3 ">
        <div class="card-body">
          <h4 class="card-title">Email Me</h4>
          <div class="form-group">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              class="form-control form-fixer"
              style={{
                textAlign: "center",
              }}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="_subject"
              placeholder="Subject"
              class="form-control form-fixer"
              style={{
                textAlign: "center",
              }}
            />
          </div>
          <div class="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              class="form-control form-fixer"
              style={{
                textAlign: "center",
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div class="form-group">
            <button
              type="submit"
              disabled={state.submitting}
              class="btn btn-primary btn-lg active"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default ContactForm;
