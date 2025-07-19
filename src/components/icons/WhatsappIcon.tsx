interface Props {
    className?: string;
}
const WhatsappIcon = ({ className }: Props) => {
    return (
        <img src="/assets/icons/whatsapp.svg" alt="Whatsapp Icon" className={className} />
    )
}

export default WhatsappIcon