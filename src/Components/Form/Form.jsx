import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Form = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const {t} = useTranslation();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.name || !formData.email || !formData.message) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            const token = await window.grecaptcha.execute(
                import.meta.env.VITE_RECAPTCHA_SITE_KEY,
                { action: "submit" }
            );

            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                "g-recaptcha-response": token,
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setError("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        }
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="form__input" type="text" name="name" placeholder={t("formName")} value={formData.name} onChange={handleChange} required />
            <input className="form__input" type="email" name="email" placeholder={t("formEmail")} value={formData.email} onChange={handleChange} required />
            <textarea className="form__msg" name="message" placeholder={t("formMsg")} value={formData.message} onChange={handleChange} required></textarea>
            <button className="form__btn" type="submit">{t("formBtn")}</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    );
};

export default Form;
