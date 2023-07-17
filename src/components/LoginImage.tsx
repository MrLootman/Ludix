import CatImage from "../assets/Cat.jpg"

export default function LoginImage(): JSX.Element {
  return (
    <img
      className="login-page_section_image"
      src={CatImage}
      alt="Image"
    />
  );
}
