import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { api } from "../axios";

const PhoneNumber = ""; //NOTE 10 diget phone number you want to text
const Profile = () => {
  async function makeRequest() {
    try {
      setRequestData("");
      let res = await api.post("messages", {
        //NOTE to test the make api request you must add an end point
        Body: messageData,
        PhoneNumber: "+1" + PhoneNumber,
        Name: "name",
      });
      setRequestData(JSON.stringify(res.data));
    } catch (error) {
      console.error(error);
      setRequestData(
        "Make sure you enter a valid endpoint in src/pages/profile.jsx - line 8"
      );
    }
  }
  const [messageData, setMessageData] = useState("");
  const messageChange = (event) => {
    setMessageData(event.target.value);
  };

  const [requestData, setRequestData] = useState(
    "Make a request to get JSON data from api"
  );
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="d-flex flex-column justify-content-center align-items-center pt-3 mt-2">
        <div className="">
          <img src={user.picture} alt={user.name} />
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </div>
        <input
          className="p-2 m-2"
          onChange={messageChange}
          value={messageData}
          placeholder="message..."
        />
        <button className="btn btn-dark" onClick={makeRequest}>
          Make api request
        </button>
        <h4 className="p-3 text-dark">{requestData}</h4>
      </div>
    )
  );
};

export default Profile;
