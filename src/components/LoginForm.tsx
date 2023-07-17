export default function LoginForm() {

  return (
    <section className="login-page_section_form">
      <div aria-label="Horizontal band giving a shadow effect between the image and the form."></div>
      <span>Bienvenue !</span>
      <form>
        <label htmlFor="login-email">
          <input
            placeholder="Your email" 
            id="login-email"
            autoComplete="off"
          />
        </label>
        <label htmlFor="login-password" title="Your password">
          <input 
            id="login-password"
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