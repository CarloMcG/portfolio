import React from "react";
import { Grid, Column, Button, Form, Stack, TextInput, TextArea } from "@carbon/react";
import { LogoLinkedin, LogoGithub } from '@carbon/icons-react';
import { useForm, ValidationError } from "@formspree/react";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  let history = useHistory();

  async function refresh() {
    history.go(0);
  }

  const [state, handleSubmit] = useForm("mayaqnwn");
  if (state.succeeded) {
    return (
      <Grid>
        <Column lg={{ span: 12, offset: 1 }} md={8} sm={4} style={{ marginTop: '160px' }}>
          <Grid>
            <Column md={8} lg={7} sm={4}>
              <h1 className="bx--type-expressive-heading-01">Thanks!</h1>
            </Column>
          </Grid>
        </Column>
        <Column lg={{ span: 12, offset: 1 }} md={8} sm={4}>
          <Grid>
            <Column md={6} lg={8} sm={4}>
              <p className="bx--type-body-long-01">
                I look forward to replying to your email as soon as possible
              </p>
            </Column>
          </Grid>
        </Column>
        <Column lg={{ span: 1, offset: 1 }} md={8} sm={4} style={{ marginTop: '80px' }}>
          <Button onClick={refresh} kind="tertiary" style={{ marginTop: '20px' }}>
            Send another email
          </Button>
        </Column>
      </Grid>
    );
  }
  return (
    <Grid>

      <Column lg={{ span: 8, offset: 4 }} md={8} sm={4} style={{ marginTop: '160px' }}>
        <Form aria-label="Contact form" onSubmit={handleSubmit}>
          <Stack gap={7}>

            <TextInput
              id="email"
              name="email"
              labelText="Email Address"
              placeholder="Your Email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <TextArea
              id="message"
              name="message"
              labelText="Message"
              placeholder="Please enter your message"
              rows={4}
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <Button kind="tertiary" type="submit" disabled={state.submitting}>
              Submit
            </Button>

          </Stack>
        </Form>
        <Grid>
          <Column md={4} lg={{ span: 4, offset: 10 }} sm={4} style={{ marginTop: '80px' }}>
            <h3>Connect with Me</h3>
            <Grid>
              <Column>
                < Button kind="tertiary" renderIcon={LogoGithub} style={{ marginTop: '20px' }} />
              </Column>
              <Column>
                < Button kind="tertiary" renderIcon={LogoLinkedin} style={{ marginTop: '20px' }} />
              </Column>
            </Grid>
          </Column >
        </Grid >
      </Column>
    </Grid >
  );
};

export default ContactForm;
