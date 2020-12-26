import React from "react";
import FollowersBox from "./FollowersBox";

const MediaFollowers = () => {
  return (
    <div className="relative grid grid-cols-1 gap-6 w-full mt-8 md:grid-cols-2 xl:grid-cols-4">
      <FollowersBox
        socialNet={"facebook"}
        username={"@nathanf"}
        followers={"1987"}
        change={"positive"}
        difference={"12"}
        typeOfFollowers={"FOLLOWERS"}
        topBarColor={`bg-socialNetworks-facebook`}
      />
      <FollowersBox
        socialNet={"twitter"}
        username={"@nathanf"}
        followers={"1044"}
        change={"positive"}
        difference={"99"}
        typeOfFollowers={"FOLLOWERS"}
        topBarColor={`bg-socialNetworks-twitter`}
      />
      <FollowersBox
        socialNet={"instagram"}
        username={"@realnathanf"}
        followers={"11k"}
        change={"positive"}
        difference={"1099"}
        typeOfFollowers={"FOLLOWERS"}
        topBarColor={`bg-gradient-to-r from-socialNetworks-instagram-primaryGradient-first to-socialNetworks-instagram-primaryGradient-second`}
      />
      <FollowersBox
        socialNet={"youtube"}
        username={"Nathan F."}
        followers={"8239"}
        change={"negative"}
        difference={"144"}
        typeOfFollowers={"SUSCRIBERS"}
        topBarColor={`bg-socialNetworks-youtube`}
      />
    </div>
  );
};

export default MediaFollowers;
