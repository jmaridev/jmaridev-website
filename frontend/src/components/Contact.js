import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContentWrapper from "./ContentWrapper";
import SectionTitle from "./SectionTitle";
import ContactSocial from "./ContactSocial";

export default function Contact() {
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-fit flex flex-col"
      id="contact"
    >
      <ContentWrapper className="bg-sky-50 dark:bg-slate-800">
        <SectionTitle title="CONTACT" titleExt="Come say hello 👋" />
      </ContentWrapper>
      <ContentWrapper>
        <p className="text-2xl mb-4">Feel free to check out my socials!</p>
        <div className="flex gap-4 text-5xl mb-8 text-blue-900 dark:text-yellow-50">
          <ContactSocial
            icon={<FaLinkedin />}
            href="https://www.linkedin.com/in/justinmarimaliwat/"
          />
          <ContactSocial
            icon={<FaGithub />}
            href="https://github.com/jmaridev"
          />
        </div>
        <p className="text-2xl mb-4">Or, you can shoot me a message here:</p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4 place-items-center justify-center"
        >
          <input type="hidden" name="access_key" value="MY_ACCESS_KEY" />
          <input
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-blue-500 focus:border-blue-500 dark:bg-slate-800 rounded-xl"
            type="text"
            placeholder="What's your name?"
            name="name"
            required
          />
          <input
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-blue-500 focus:border-blue-500 dark:bg-slate-800 rounded-xl"
            type="email"
            placeholder="What email can I reach you at?"
            name="email"
            required
          />
          <textarea
            className="w-full p-4 transition-all border-2 border-slate-500 hover:border-blue-500 focus:border-blue-500 dark:bg-slate-800 rounded-xl"
            name="message"
            placeholder="What's on your mind?"
            rows="5"
            required
          ></textarea>
          <div className="h-captcha" data-captcha="true"></div>
          <button
            className="px-8 py-2 border-2 border-blue-500 rounded-xl text-blue-500 hover:border-blue-500 hover:text-white hover:bg-blue-500 transition-all"
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
