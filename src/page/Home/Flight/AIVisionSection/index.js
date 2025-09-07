import { Section } from "../Section";
import {
  CameraIcon,
  MonitorIcon,
  NetworkIcon,
  WifiIcon,
} from "lucide-react";

export function AIVisionSection({ scrollProgress }) {
  return (
    <Section scrollProgress={scrollProgress}>
      <Section.Header>
        <Section.Title>2 // AI VISION PAYLOAD</Section.Title>
        <Section.Description>
          Multi-spectral computer vision system with real-time analytics
          streaming to cloud-based dashboards. Seamless integration of thermal,
          RGB, and LiDAR sensors for comprehensive situational awareness and
          automated threat detection.
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
            captures heat signatures through smoke and darkness at 640x512
            resolution
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <MonitorIcon height={24} width={24} className="inline" />
            Live dashboard
          </Section.SubitemHeader>
          <Section.SubitemBody>
            streams 4K video with telemetry overlay at sub-100ms latency
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <NetworkIcon height={24} width={24} className="inline" />
            Edge analytics
          </Section.SubitemHeader>
          <Section.SubitemBody>
            processes 30 FPS object detection without cloud dependency
          </Section.SubitemBody>
        </Section.Subitem>
        <Section.Subitem>
          <Section.SubitemHeader>
            <WifiIcon height={24} width={24} className="inline" />
            Mesh networking
          </Section.SubitemHeader>
          <Section.SubitemBody>
            maintains connectivity across 10km range with automatic failover
          </Section.SubitemBody>
        </Section.Subitem>
      </Section.Subgrid>
    </Section>
  );
}