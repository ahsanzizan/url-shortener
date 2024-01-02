import CampaignModel from "@/models/Campaign.model";
import { Campaign } from "@/types/models";
import { connectAndQuery } from "@/utils/connectAndQuery";

export function getAllCampaigns(): Promise<Campaign[]> {
  return connectAndQuery(async () => await CampaignModel.find());
}

export function getCampaignById(id: string): Promise<Campaign> {
  return connectAndQuery(async () => {
    try {
      if (id === "") return null;
      return await CampaignModel.findById(id);
    } catch (error) {
      return null;
    }
  });
}

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

export function deleteCampaignById(id: string) {
  return connectAndQuery(async () => await CampaignModel.findByIdAndDelete(id));
}

type UpsertCampaignInput = {
  short: string;
  long: string;
};

export function upsertCampaign(id: string, campaign: UpsertCampaignInput) {
  return connectAndQuery(
    async () =>
      await CampaignModel.findByIdAndUpdate(
        id,
        { ...campaign },
        { upsert: true }
      )
  );
}
