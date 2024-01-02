"use client";
import toast from "react-hot-toast";
import { StandardButton, StandardLinkButton } from "@/app/components/Buttons";
import { Campaign } from "@/types/models";
import { useRouter } from "next/navigation";
import { deleteCampaignAction } from "../actions";

export default function CampaignsTable({
  campaigns,
}: {
  campaigns: Campaign[];
}) {
  const router = useRouter();

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h4 className="text-lg drop-shadow-glow md:text-2xl">Campaigns</h4>
        <StandardLinkButton href={"/admin/campaigns/new"}>
          New
        </StandardLinkButton>
      </div>
      <div className="flex w-full flex-col divide-y divide-white">
        {campaigns.map((campaign, i) => (
          <div
            key={i}
            className="group flex w-full items-center justify-between overflow-hidden py-4 transition-all duration-500 md:py-10"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl drop-shadow-glow md:text-4xl">
                {campaign.short}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <StandardButton
                onClick={() => {
                  const toastId = toast.loading("Loading...");
                  deleteCampaignAction(campaign._id.toString()).then(() => {
                    toast.success("Successfully deleted a campaign", {
                      id: toastId,
                    });
                    router.refresh();
                  });
                }}
              >
                Delete
              </StandardButton>
              <StandardLinkButton
                href={"/admin/campaigns/" + campaign._id.toString()}
              >
                Edit
              </StandardLinkButton>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
