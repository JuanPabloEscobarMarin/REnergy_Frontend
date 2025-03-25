import React, { useEffect, useState } from "react";

export const Roles = () => {
  const [text, setText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Camilo Bello",
    "Sergio Gomez",
    "Andres Callejas",
    "Kevin Jay",
    "Pablo Escobar",
  ];

  const typingSpeed = 100; // Velocidad de escritura (en milisegundos)
  const deletingSpeed = 50; // Velocidad de borrado (en milisegundos)
  const pauseBetweenRoles = 2000; // Pausa entre roles (en milisegundos)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        // Borrando el texto
        setText(currentRole.substring(0, text.length - 1));
      } else {
        // Escribiendo el texto
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        // Si terminó de escribir, espera y comienza a borrar
        setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
      } else if (isDeleting && text === "") {
        // Si terminó de borrar, pasa al siguiente rol
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer); // Limpia el timer al desmontar el componente
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <div className="text-5xl sm:text-7xl">
      <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold">{text}</span>
      <span className="inline-block ml-2 animate-cursor">|</span>
    </div>
  );
};
