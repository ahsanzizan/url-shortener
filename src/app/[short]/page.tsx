import { getCampaignByShort } from "@/database/campaign.query";
import { notFound, redirect } from "next/navigation";

export default async function Campaign({
  params,
}: {
  params: { short: string };
}) {
  const campaign = await getCampaignByShort(params.short);
  if (!campaign) {
    notFound();
  }

  return redirect(campaign.long);
}
