import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://twitter.com/danimimm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Image
              src="/star1.svg"
              alt="Danimim Logo"
              className="dark"
              width={150}
              height={24}
              priority
            />
          </a>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full text-center justify-center bg-gradient-to-b from-purple-200 pb-6 pt-8 backdrop-blur-2xl ink-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl">
        {`I'm Daniela`}
        </p>
        </div>

        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
         <p className="fixed left-0 top-0 flex w-full text-center justify-center dark:from-inherit lg:static lg:w-auto lg:rounded-xl whitespace-pre-line">
          {`I'm building web3 marketing during daytime`}
          <br />
          and looking for low gas fees during night
         </p>
       </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#FF00C7] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="fixed left-0 top-6 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark"
          src="/daniphoto.jpg"
          alt="Dani photo Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full text-center justify-center border-b border-white-300 bg-gradient-to-b from-purple-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto">
         Product Marketing Manager @ Blockful and Chainlink Community Advocate&nbsp;
        </p>

        </div>

        <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full text-center justify-center border-b border-white-300 bg-gradient-to-b from-purple-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto">
        Kappa Sigma Mu (KSM Society) member, DAO and NFT lover, and web3 builder&nbsp;
        </p>

        </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-mono`}>
            Talks{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ✦
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-mono`}>
          See more about what I have covered on stages and which events I was present at as a speaker
          </p>
        </a>

        <a
          href="https://mirror.xyz/danimim.eth"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-mono`}>

            <Link href={`https://mirror.xyz/danimim.eth`}>Articles{' '}</Link>

            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ✦
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-mono`}>
          Understand my point of view better, especially about DAO governance (my favorite topic)&nbsp;
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-mono`}>
            Achievements and Skills{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ✦
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-mono`}>
          {`Discover what I've already created for a better Web3`}
          </p>
        </a>

        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-mono`}>
            Links{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            ✦
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 font-mono`}>
          {`Reach out! Let's talk about DAO Governance`}
          </p>
        </a>
      </div>
    </main>
  )
}
