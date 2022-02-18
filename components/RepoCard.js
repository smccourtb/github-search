import Image from "next/image";
import repoIcon from "../public/github-repo-icon.svg";
import starIcon from "../public/github-star-icon.svg";
import forkIcon from "../public/github-fork-icon.svg";

const RepoCard = ({ name, description, forks, stars, visibility }) => {
  return (
    <li
      className={
        "flex flex-col gap-2 border-solid border rounded-sm border-#24292f p-4"
      }
    >
      <div className={"flex gap-1 justify-center"}>
        <Image src={repoIcon} alt={"Repository Icon"} />
        <h3 className={"font-bold"}>{name}</h3>
        <div
          className={
            "text-xs ml-auto border-solid border rounded-full border-#24292f"
          }
        >
          <p className={"py-1 px-3 capitalize"}>{visibility}</p>
        </div>
      </div>
      <p className={"text-xs text-slate-500"}>{description}</p>
      <div className={"flex gap-2 my-auto"}>
        <div className={"flex gap-1"}>
          <Image src={starIcon} alt={"Stars"} />
          <p>{stars}</p>
        </div>
        <div className={"flex gap-1"}>
          <Image src={forkIcon} alt={"Forks"} />
          <p>{forks}</p>
        </div>
      </div>
    </li>
  );
};

export default RepoCard;
