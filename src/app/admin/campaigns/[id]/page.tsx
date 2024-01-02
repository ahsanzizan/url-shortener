import { BackButton, StandardFormButton } from "@/app/components/Buttons";
import { getCampaignById } from "@/database/campaign.query";
import { Types } from "mongoose";
import { upsertCampaignAction } from "../../actions";

export default async function EditCampaign({
  params,
}: {
  params: { id: string };
}) {
  const campaign = await getCampaignById(params.id);

  return (
    <>
      <section className="flex h-screen flex-col items-center justify-center gap-2">
        <div className="w-full max-w-lg rounded p-6">
          <BackButton />
          <h1 className="mb-7 mt-4 text-4xl leading-snug drop-shadow-glow md:text-7xl">
            {campaign ? "Edit" : "Create"} a Campaign
          </h1>
          <form action={upsertCampaignAction}>
            <input
              type="hidden"
              id="_id"
              name="_id"
              value={
                campaign
                  ? campaign._id.toString()
                  : new Types.ObjectId().toString()
              }
            />
            <div className="mb-4">
              <label
                htmlFor="long"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                Long
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="long"
                id="long"
                placeholder="Long URL"
                defaultValue={campaign?.long}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="short"
                className="mb-1 block text-lg drop-shadow-glow md:text-2xl"
              >
                Short
              </label>
              <input
                className="w-full rounded-full border border-white bg-transparent px-5 py-3 text-white autofill:shadow-[0_0_0_30px_black_inset_!important] focus:outline-none"
                style={{ WebkitTextFillColor: "#fff" }}
                type="text"
                name="short"
                id="short"
                placeholder="Short URL"
                defaultValue={campaign?.short}
                required
              />
            </div>
            <div className="mt-10">
              <StandardFormButton type="submit">
                {campaign ? "Save" : "Create"}
              </StandardFormButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
