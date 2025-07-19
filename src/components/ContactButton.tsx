import WhatsappIcon from "./icons/WhatsappIcon"

const ContactButton = () => {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-12 md:right-10 z-50 shadow-2xl rounded-full bg-white p-2 md:p-3 transition-transform duration-300 hover:scale-110">
            <a href="https://wa.me/59895220063" title="whatsapp icons"
                target="_blank"
                rel="noopener noreferrer"
            >
                <WhatsappIcon className="w-10 h-10" />
            </a>
        </div>
    )
}

export default ContactButton