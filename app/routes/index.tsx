import Logo from "../components/braincog";

export default function Index() {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center">
        {/* <Logo />  */}
        <h1 className="font-black text-4xl uppercase mb-2">
          Non&middot;Techie Guides
        </h1>
        <h2 className="text-xl text-gray-300">
          translating web tech{" "}
          <span className="italic underline decoration-pink-600 decoration-wavy">
            techno-babble
          </span>{" "}
          into plain ol' English
        </h2>

        <p className="hidden md:block w-1/2 mx-auto text-left mt-12 mb-5 text-lg">
          Learn <em>anything</em> and <em>everything</em> about the web: from
          basics like{" "}
          <span className="underline decoration-blue-400 decoration-dashed">
            CSS
          </span>{" "}
          and the{" "}
          <span className="underline decoration-blue-400 decoration-dashed">
            essentials of how websites work
          </span>
          , to the deep stuff like{" "}
          <span className="underline decoration-blue-400 decoration-dashed">
            building fast, compliant, secure websites
          </span>{" "}
          using the <strong>modern&nbsp;web</strong>!
        </p>
        <p className="hidden md:block w-1/2 mx-auto text-left ">
          No muss. No fuss. No over-your-head or dumbed down explanations. Just
          plain English explanations.
        </p>
        <p className="w-1/2 mx-auto italic font-bold mt-24">
          By a non-techie, for non&#8209;techies!
        </p>
      </div>
    </div>
  );
}
