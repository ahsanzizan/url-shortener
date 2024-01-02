"use server";

import { deleteCampaignById, upsertCampaign } from "@/database/campaign.query";
import { redirect } from "next/navigation";

export async function upsertCampaignAction(formData: FormData) {
  await upsertCampaign(formData.get("_id") as string, {
    long: formData.get("long") as string,
    short: formData.get("short") as string,
  });
  redirect("/admin");
}

export async function deleteCampaignAction(id: string) {
  await deleteCampaignById(id);
  redirect("/admin");
}
