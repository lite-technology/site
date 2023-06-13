import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Form } from './styles';
const ContactForm = () =>  {
  const [state, handleSubmit] = useForm("mzbqndwl");

  return (
<Form onSubmit={handleSubmit}>
<div class="form-group">
  <label class="form-label" htmlFor="name">Nome</label>
  <input required="" placeholder="Nome para contato" class="form-input" type="text"/>
</div>
<div class="form-group">
  <label class="form-label" htmlFor="number">Numero</label>
  <input required="" placeholder="(12) 9 8989-8989" class="form-input" name="number" id="number" type="text"/>
</div>
<div class="form-group">
  <label class="form-label" htmlFor="email">Email</label>
  <input required="" placeholder="exemplo@gmail.com" class="form-input" name="email" id="email" type="email"/>
</div>
<ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
/>
<div class="form-group">
  <label class="form-label" htmlFor="message">Mensagem</label>
  <textarea required="" placeholder="Resuma seu objetivo" class="form-input" name="message" id="message"></textarea>
</div>
<ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
<button class="form-button" type="submit" disabled={state.submitting}>
    {state.succeeded ? "Enviado!" : "Enviar"}
</button>
</Form>

  );
}

export default ContactForm


/**
 <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
 */