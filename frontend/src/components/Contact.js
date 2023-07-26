import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section className="bg-white w-screen h-fit flex flex-col gap-12 px-80">
      <SectionTitle />
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input type="hidden" name="access_key" value="MY_ACCESS_KEY" />
        <input
          type="text"
          placeholder="What should I call you?"
          name="name"
          required
        />
        <input
          type="email"
          placeholder="What email can I reach you at?"
          name="email"
          required
        />
        <textarea
          name="message"
          placeholder="What's the gameplan?"
          required
        ></textarea>
        <div className="h-captcha" data-captcha="true"></div>
        <button type="submit">Send</button>
      </form>
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </section>
  );
}
