import type { Metadata } from "next";
import { PageHead, Contact } from "@/components/Site";
export const metadata: Metadata = { title: "Contact | Mahadev Events", description: "Call, WhatsApp, email or message Mahadev Events in Khatauli to plan your celebration.", alternates: { canonical: "/contact" } };
export default function Page() { return (<><PageHead eyebrow="Contact" title={<>Let&apos;s plan your <em>celebration</em></>} sub="Reach us by phone, WhatsApp, email or Instagram, or share your event details below." /><Contact /></>); }
