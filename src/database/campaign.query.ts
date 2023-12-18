import CampaignModel from "@/models/Campaign.model";
import { Campaign } from "@/types/models";
import { connectAndQuery } from "@/utils/connectAndQuery";

export function getCampaignByShort(short: string): Promise<Campaign> {
  return connectAndQuery(async () => {
    try {
      if (short === "") return null;
      return await CampaignModel.findOne({ short });
    } catch (error) {
      return null;
    }
  });
}
