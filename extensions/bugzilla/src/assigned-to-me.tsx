import { FetchBugs } from "./components/bugs";

export default function Command(): JSX.Element {
  return <FetchBugs currentUserSearchParam="assigned_to" />;
}
