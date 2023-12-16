import { FetchBugs } from "./components/bugs";

export default function Command(): JSX.Element {
  return <FetchBugs currentUserSearchParam="creator" />;
}
