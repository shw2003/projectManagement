import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import Layout from "../../layout/Layout";
import Main from "../../layout/Main";
import OrgHeader from "./OrgHeader";
import OrgOverview from "./OrgOverview";

const Organization = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [org, setOrg] = useState({});
  const userProfile = useSelector((state) => {
    return state.userProfile;
  });
  console.log(userProfile.uid);
  const params = new URLSearchParams(location.search);
  const url_org_id = params.get("orgId");
  console.log(url_org_id);
  useEffect(() => {
    const e_org = [];
    const q = query(
      collection(db, "organizations"),
      //   where("owner_id", "==", userProfile.uid),
      where("org_id", "==", url_org_id)
    );
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        e_org.push(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
      e_org.length < 1 ? navigate("/error") : setOrg(...e_org);
    };
    getData();
  }, [url_org_id]);
  useEffect(() => {
    console.log(org);
  }, [org]);
  return (
    <Layout>
      <OrgHeader id={id} />
      <Main>
        <OrgOverview org={org} />
      </Main>
    </Layout>
  );
};

export default Organization;
