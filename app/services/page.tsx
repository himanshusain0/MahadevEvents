import type { Metadata } from "next";
import { PageHead, Services, CTA } from "@/components/Site";
export const metadata: Metadata = { title: "Services | Mahadev Events", description: "Wedding and stage design, entrances, haldi styling, home facade and birthday balloon décor in Khatauli.", alternates: { canonical: "/services" } };
export default function Page() { return (<><PageHead eyebrow="Services" title={<>Decoration, <em>personalised</em></>} sub="Every set-up is shaped around your family, your rituals and your space." /><Services head={false} /><CTA /></>); }
