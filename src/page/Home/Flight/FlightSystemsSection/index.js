import { Section } from "../Section";
import {
  BatteryFullIcon,
  CpuIcon,
  PanelTopIcon,
  ScanSearchIcon,
} from "lucide-react";

export function FlightSystemsSection({ scrollProgress }) {
  return (
    <Section scrollProgress={scrollProgress}>
      <Section.Header>
        <Section.Title>1 // FLIGHT SYSTEMS</Section.Title>
        <Section.Description>
          Advanced autonomous navigation powered by next-generation AI and
          real-time sensor fusion. Our aerial platform delivers unmatched
          precision and reliability for mission-critical operations in complex
          environments.
        </Section.Description>
      </Section.Header>
      <Section.Separator />
      <Section.Subgrid>
        <Section.Subitem>
          <Section.SubitemHeader>
            <ScanSearchIcon height={24} width={24} className="inline" />
            Object recognition
          </Section.SubitemHeader>
          <Section.SubitemBody>
            tracks and identifies targets in real-time with millimeter precision
          </Section.SubitemBody>
        </Section.Subitem>
        {/* <Section.Subitem> */}
        {/*   <Section.SubitemHeader> */}
        {/*     <BatteryFullIcon height={24} width={24} className="inline" /> */}
        {/*     Power management */}
        {/*   </Section.SubitemHeader> */}
        {/*   <Section.SubitemBody> */}
        {/*     extends flight duration to 45+ minutes through adaptive load */}
        {/*     balancing */}
        {/*   </Section.SubitemBody> */}
        {/* </Section.Subitem> */}
        <Section.Subitem>
          <Section.SubitemHeader>
            <CpuIcon height={24} width={24} className="inline" />
            Neural processing
          </Section.SubitemHeader>
          <Section.SubitemBody>
            delivers 8 TOPS of edge computing for autonomous decision-making
          </Section.SubitemBody>
        </Section.Subitem>
        {/* <Section.Subitem> */}
        {/*   <Section.SubitemHeader> */}
        {/*     <PanelTopIcon height={24} width={24} className="inline" /> */}
        {/*     Flight control */}
        {/*   </Section.SubitemHeader> */}
        {/*   <Section.SubitemBody> */}
        {/*     maintains stability in 40+ knot winds with predictive compensation */}
        {/*   </Section.SubitemBody> */}
        {/* </Section.Subitem> */}
      </Section.Subgrid>
    </Section>
  );
}

