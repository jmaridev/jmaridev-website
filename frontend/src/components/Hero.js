export default function Hero() {
  return (
    <section
      className="bg-white dark:bg-slate-900 w-screen h-screen bg-[url('/logos/logo-light.svg')] dark:bg-[url('/logos/logo-dark.svg')] bg-no-repeat bg-center bg-cover"
      id="top"
    >
      <div className="bg-white bg-opacity-80 h-full sm:bg-transparent sm:h-fit p-12 xl:p-32 dark:bg-black dark:bg-opacity-60 dark:sm:bg-opacity-60 dark:sm:bg-black dark:sm:h-full">
        <div className="mb-4 transition-all cursor-default hover:bg-white dark:hover:bg-slate-900 hover:drop-shadow hover:p-4">
          <h1 className="text-[60px] md:text-[100px] inline mr-4">jmaridev</h1>
          <span className="hidden lg:inline text-3xl">
            CA | PH / d͡ʒeɪˈmɑrˈeɪˈdɪˈv /
          </span>
        </div>

        <hr className="border-t-slate-900 border-t-2 mb-4" />

        <p className="sm:pl-4 italic text-xl md:text-3xl md:mb-4">noun</p>

        <ol className="pl-8 sm:pl-12 list-decimal text-xl">
          <li className="transition-all cursor-default hover:bg-white dark:hover:bg-slate-900 hover:drop-shadow hover:p-2">
            an experienced and passionate{" "}
            <span className="text-2xl text-rose-500">
              full stack web developer
            </span>{" "}
            who loves to design, develop, and deploy beautiful applications that
            live on the internet
          </li>
          <li className="transition-all cursor-default hover:bg-white dark:hover:bg-slate-900 hover:drop-shadow hover:p-2">
            a hardworking and adaptive{" "}
            <span className="text-2xl text-orange-500">learner</span> who puts
            his all into improving his skills
          </li>
          <li className="transition-all cursor-default hover:bg-white dark:hover:bg-slate-900 hover:drop-shadow hover:p-2">
            just another{" "}
            <span className="text-2xl text-teal-500">human being</span> trying
            their best to succeed and make friends along the way
          </li>
        </ol>
      </div>
    </section>
  );
}
