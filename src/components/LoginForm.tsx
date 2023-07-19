// import { useState } from "react"
// import ConfirmModal from "./ConfirmModal";

export default function LoginForm(): JSX.Element {

  return (
    <section className="login-page_section_form">
      {/* Si isClicked === true, renvoyer une modal de confirmation
        Cette modal prendra l'objet informations, le boolean isClicked,
        et la fonction handleSubmit en props
      */}
      {/* <ConfirmModal /> */}
      <div aria-label="Horizontal band giving a shadow effect between the image and the form."></div>
      <span>Bienvenue !</span>
      <form>
        <label htmlFor="login-email">
          <input
            placeholder="Your email" 
            id="login-email"
            name="email"
            autoComplete="off"
          />
        </label>
        <label htmlFor="login-password" title="Your password">
          <input 
            id="login-password"
            name="password"
            type="password"
            placeholder="Your password"
            autoComplete="off"
          />
        </label>
        <button type="button">Envoyer</button>
      </form>
      <p aria-label="Message de création de compte">Créez votre compte</p>
    </section>
  )
}