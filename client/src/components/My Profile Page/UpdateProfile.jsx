import { useState } from "react";

import SuccessToast from "../Toast Components/SuccessToast.jsx";
import useMessage from "../../hooks/useMessage.js";


const UpdateProfile = ({
  emailOriginal,
  firstNameOriginal,
  lastNameOriginal,
  avatarOriginal,
}) => {
  const [firstName, setFirstName] = useState(firstNameOriginal);
  const [lastName, setLastName] = useState(lastNameOriginal);
  const [avatar, setAvatar] = useState(avatarOriginal);
  const [email, setEmail] = useState(emailOriginal);
  const [message, setMessage] = useMessage();


  // Avatar options
  const avatarOptions = {
    CryptoKnight:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Kurt&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Wink&eyebrowType=Angry&mouthType=Twinkle&skinColor=Brown",
    BlockChainMaster:
      "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Prescription02&hatColor=Gray01&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Skull&eyeType=WinkWacky&eyebrowType=SadConcernedNatural&mouthType=Eating&skinColor=Tanned",
    BitWarrior:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&eyeType=EyeRoll&eyebrowType=Angry&mouthType=Twinkle&skinColor=Yellow",
    CryptoQueen:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Happy&eyebrowType=SadConcerned&mouthType=Smile&skinColor=DarkBrown",
    BlockDiva:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Prescription02&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light",
    SatoshiHunter:
      "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Prescription01&facialHairType=BeardMajestic&facialHairColor=Auburn&clotheType=BlazerShirt&eyeType=Side&eyebrowType=AngryNatural&mouthType=Twinkle&skinColor=Tanned",
    TokenEmpress:
      "https://avataaars.io/?avatarStyle=Circle&topType=LongHairDreads&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Skull&eyeType=Happy&eyebrowType=RaisedExcited&mouthType=Default&skinColor=Brown"
  };

  const updateProfileHandler = () => {
    const {accessToken, _createdOn, _id} = JSON.parse(localStorage.getItem("user"));
    localStorage.setItem("user", JSON.stringify({avatar, email, firstName, lastName, accessToken, _createdOn, _id}));
    const item = JSON.parse(localStorage.getItem("user"))
    console.log(item);
    setMessage("Profile Updated");
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex">
        <div className="w-1/3 flex flex-col items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Change Avatar
          </label>
          <select
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="block w-full py-2 px-3 mb-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {Object.entries(avatarOptions).map(([key, url]) => (
              <option key={key} value={url}>
                {key}
              </option>
            ))}
          </select>
        </div>
        <div className="w-2/3 ml-8">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end">
            <button onClick={updateProfileHandler} className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {message && <SuccessToast message={message} />}
    </div>
  );
};

export default UpdateProfile;
