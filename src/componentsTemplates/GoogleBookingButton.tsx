import { useEffect, useRef } from "react";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (options: {
          url: string;
          color?: string;
          label?: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default function GoogleBookingButton(): JSX.Element {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    // Si ya existe el botón, no hacer nada
    if (buttonRef.current.childNodes.length > 0) return;

    // Cargar CSS solo si no existe
    if (!document.querySelector("#google-calendar-style")) {
      const link = document.createElement("link");
      link.id = "google-calendar-style";
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    const loadButton = () => {
      if (window.calendar && buttonRef.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3N3aqxjrl-RxOlAsyjdLrJgPB6c_nplJSnaaXi5vnXvPFCwSJMqUSml4NN3j4Klyn6-71hQW7p?gv=true",
          color: "#ffc800",
          label: "Book an appointment",
          target: buttonRef.current,
        });
      }
    };

    // Si ya está cargado el script
    if (window.calendar) {
      loadButton();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = loadButton;

    document.body.appendChild(script);
  }, []);

  return <div ref={buttonRef} />;
}