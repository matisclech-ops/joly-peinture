import { WhatsAppIcon } from "@/components/icons";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/33651294455"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="WhatsApp"
      aria-label="Contacter Joly Peinture sur WhatsApp"
    >
      <WhatsAppIcon size={26} fill="white" />
    </a>
  );
}
