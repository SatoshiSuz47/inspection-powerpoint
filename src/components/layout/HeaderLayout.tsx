import Header from "../Header/Header";
import { childrenType } from "../../types/type";

export default function HeaderLayout({ children }: childrenType) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
