import React, { useEffect, useState } from "react";
import GroupCard from "../../components/groups/GroupCard";
import ButtonGroup from "../../components/groups/ButtonGroup";

function ViewGroups() {
  const [GroupList, setGroupList] = useState(null);

  //get all groups
  useEffect(() => {
    fetch("http://localhost:3002/api/group/getGroups")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setGroupList(data);
      });
  }, []);

  return (
    <div>
      <ButtonGroup />
      {GroupList && <GroupCard groups={GroupList} />}
    </div>
  );
}

export default ViewGroups;
