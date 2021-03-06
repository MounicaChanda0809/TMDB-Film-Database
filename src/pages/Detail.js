import React from "react";
import { useStateValue } from "../StateProvider";
import "./styles/Detail.css";
import DetailError from "./DetailError";
import DetailSucess from "./DetailSucess";
/* Detail Page when its controlled the view of the details film */
function Detail() {
  const [{ movieSelected }] = useStateValue();
  const isEmpty = Object.keys(movieSelected).length;
  // Control the user dont enter to detail page with no content selected
  return isEmpty ? <DetailSucess /> : <DetailError />;
}

export default Detail;
