// pages/campaigns.js
import CampaignTile from '../components/CampaignTile';

const Campaigns = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mt-4 mb-8">Campaigns</h1>
      <CampaignTile />
      {/* Add additional content or components as needed */}
    </div>
  );
};

export default Campaigns;
