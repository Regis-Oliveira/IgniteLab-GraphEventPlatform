import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const [openMenu, setOpenMenu] = useState(false);

  const handleDropdown = useCallback(() => {
    setOpenMenu(!openMenu);
  }, [openMenu]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header dropdownActive={openMenu} activateDropdown={handleDropdown} />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          //Placeholder de info para clicar em alguma aula ou ir automaticamente para a primeira
          <div className="flex-1">Placeholder</div>
        )}
        <Sidebar menuVisible={openMenu} />
      </main>
    </div>
  )
}