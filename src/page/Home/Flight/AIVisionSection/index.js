import { Section } from "../Section";
import {
  CameraIcon,
  CuboidIcon,
  MonitorIcon,
  NetworkIcon,
  WifiIcon,
} from "lucide-react";

export function AIVisionSection({ scrollProgress }) {
  return (
    <Section scrollProgress={scrollProgress}>
      <Section.Header>
        <Section.Title>2 // FULL PAYLOAD SYSTEM</Section.Title>
        <Section.Description>
          Our AI Vision system empowers drones with advanced perception and
          autonomy, enabling them to perform complex tasks with precision and
          reliability.
        </Section.Description>
      </Section.Header>
      <Section.Separator />
      <Section.Subgrid>
        <Section.Subitem>
          <Section.SubitemHeader>
            <CameraIcon height={24} width={24} className="inline" />
            Thermal imaging
          </Section.SubitemHeader>
          <Section.SubitemBody>
            supports critical missions, from finding missing persons in search &
            rescue to nighttime reconnaissance.
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <MonitorIcon height={24} width={24} className="inline" />
            Live dashboard
          </Section.SubitemHeader>
          <Section.SubitemBody>
            delivers real-time insights on any device, keeping responders
            connected without specialized gear.
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <NetworkIcon height={24} width={24} className="inline" />
            Secure communications
          </Section.SubitemHeader>
          <Section.SubitemBody>
            protect sensitive mission data and ensure reliable connectivity in
            contested environments.
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <CuboidIcon height={24} width={24} className="inline" />
            Modular Design
          </Section.SubitemHeader>
          <Section.SubitemBody>
            adapts to mission needs, letting agencies swap sensors, radios, or
            batteries to configure for public safety or disaster response.
          </Section.SubitemBody>
        </Section.Subitem>
      </Section.Subgrid>
    </Section>
  );
}
