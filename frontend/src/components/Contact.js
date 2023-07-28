import ContentWrapper from "./ContentWrapper";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      className="bg-white dark:bg-blue-800 w-screen h-fit flex flex-col"
      id="contact"
    >
      <ContentWrapper>
        <SectionTitle
          title="CONTACT"
          titleExt="Let me help you grow your stonks 📈"
        />
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4 place-items-center justify-center"
        >
          <input type="hidden" name="access_key" value="MY_ACCESS_KEY" />
          <input
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-rose-500 focus:border-rose-500 text-slate-800 rounded-xl"
            type="text"
            placeholder="What should I call you?"
            name="name"
            required
          />
          <input
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-rose-500 focus:border-rose-500 text-slate-800 rounded-xl"
            type="email"
            placeholder="What email can I reach you at?"
            name="email"
            required
          />
          <textarea
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-rose-500 focus:border-rose-500 text-slate-800 rounded-xl"
            name="message"
            placeholder="What's on your mind?"
            rows="5"
            required
          ></textarea>
          <div className="h-captcha" data-captcha="true"></div>
          <button
            className="px-8 py-2 border-2 border-rose-500 rounded-xl text-rose-500 hover:border-rose-500 hover:text-white hover:bg-rose-500 transition-all"
            type="submit"
          >
            Send
          </button>
        </form>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </ContentWrapper>
    </section>
  );
}
