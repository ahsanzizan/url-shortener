import { getAllCampaigns } from "@/database/campaign.query";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { StandardLinkButton } from "../components/Buttons";
import LeftArrowIcon from "../components/Icons/LeftArrow";
import CampaignsTable from "./components/CampaignsTable";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const campaigns = JSON.parse(JSON.stringify(await getAllCampaigns()));

  return (
    <section id="home" className="mb-32 w-full py-12">
      <header className="mb-12 flex flex-col gap-2 md:gap-4">
        <h1 className="mb-7 text-4xl leading-snug drop-shadow-glow md:text-7xl">
          Welcome back, {session?.user?.username}
        </h1>
        <div className="inline-block w-auto">
          <StandardLinkButton href={"#"}>
            Go to Production Deployment{" "}
            <LeftArrowIcon className="m-1 h-3 w-3 fill-current transition-transform duration-500 group-hover:translate-x-1 md:h-4 md:w-4" />
          </StandardLinkButton>
        </div>
      </header>
      <div className="flex flex-col gap-12">
        <div className="block">
          <CampaignsTable campaigns={campaigns} />
        </div>
      </div>
    </section>
  );
}
