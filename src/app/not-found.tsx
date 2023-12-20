import { StandardLinkButton } from "./components/Buttons";
import LeftArrowIcon from "./components/Icons/LeftArrow";

export default function NotFound() {
  return (
    <>
      <section
        id="home"
        className="w-screen min-h-screen flex items-center justify-center"
      >
        <header className="flex flex-col gap-2 md:gap-4 items-center justify-center">
          <h1 className="text-6xl leading-snug drop-shadow-glow md:text-9xl text-center">
            404
          </h1>
          <h5 className="text-center text-md md:text-xl mb-8">
            The page you are looking for is not available.
          </h5>
          <div className="block">
            <StandardLinkButton href="https://www.ahsanzizan.xyz">
              To My Website
              <LeftArrowIcon className="rotate-180 mr-1 group-hover:-translate-x-1 fill-current transition-transform duration-500" />
            </StandardLinkButton>
          </div>
        </header>
      </section>
    </>
  );
}
