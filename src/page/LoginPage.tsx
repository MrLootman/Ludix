import LoginForm from "../components/LoginForm";
import LoginImage from "../components/LoginImage";

export default function LoginPage(): JSX.Element {
  return (
    <main className="login-page">
      <section className="login-page_section">
        <LoginImage />
        <LoginForm />
      </section>
    </main>
  )
}