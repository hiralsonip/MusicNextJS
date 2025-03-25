import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us ",
    description: "Get in touch with us for inquiries about our music courses and events.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
