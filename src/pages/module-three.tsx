// Local
import { BreadcrumbType, Breadcrumbs } from "@/actualComponents/Breadcrumbs";
import ModuleHeading from "@/actualComponents/ModuleHeading";
import { HorizontalLine } from "@/atoms/HorizontalLine";
import { StyledComponentsCodeExample } from "@/components/StyledComponentsCodeExample";
import SupportTicketModal from "@/components/SupportTicketModal";
import { ButtonTable, ButtonLevelsTable } from "@/compositions/buttonModule3";
import MiniComponentLibrary from "@/compositions/workshopMod3-miniComponentLib/MiniComponentLibrary";

export default function Page(): JSX.Element {
  return (
    <main>
      <ModuleHeading
        heading="modern component architecture"
        description="styled-components"
      />

      <StyledComponentsCodeExample />
      <Breadcrumbs
        crumbs={getBreadcrumbs()}
        lastBreadcrumb="Sectionals"
        handleClick={(text) => console.log(`clicked ${text}`)}
      />
      <ButtonTable />
      <ButtonLevelsTable />
      <SupportTicketModal />
      <HorizontalLine styles={{ marginTop: "6rem" }} />
      <MiniComponentLibrary />
    </main>
  );
}

function getBreadcrumbs(): BreadcrumbType["crumbs"] {
  const crumbMap = new Map();
  crumbMap.set("Home", "#home");
  crumbMap.set("Living Room", "#home/living");
  crumbMap.set("Couches", "#home/living/couch");
  return crumbMap;
}
