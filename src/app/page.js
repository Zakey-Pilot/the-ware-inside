import Image from "next/image";

export default function Home() {
  return (
    <>

  <header>
    <h1>The Ware Inside</h1>
  </header>

  <section className="hero">
    <h2>COMING SOON</h2>
    <form className="email-form">
      <input type="email" placeholder="Enter your email for updates" required />
      <button type="submit">Get Updates</button>
    </form>
  </section>

  </>
  );
}
