import { useState } from "react";
import { MenuListItem } from "./MenuListItem";
import { IconSocialMedia } from "./IconSocialMedia";
import { GithubIcon, LinkedinIcon } from "./icons";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    id: false,
  });

  const handleLoginClick = () => {
    if (userData) {
      // Si ya hay datos de usuario, hacer logout
      setUserData(null);
    } else {
      setShowLoginForm(!showLoginForm);
      // Cerrar el menú principal si está abierto
      if (showMenu) setShowMenu(false);
    }
  };

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    // Cerrar el formulario de login si está abierto
    if (showLoginForm) setShowLoginForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Resetear el error cuando el usuario escribe
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: false,
      });
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name.trim() === "",
      id: formData.id.trim() === "",
    };
    setFormErrors(errors);
    return !errors.name && !errors.id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData(formData);
      setShowLoginForm(false);
      setFormData({
        name: "",
        id: "",
      });
    }
  };

  return (
    <>
      <nav className="bg-gray-100 rounded-lg w-[95%] ml-auto mr-auto fixed z-50 top-[16px] right-[0%] left-[0%] bottom-auto py-2 pl-8 pr-2">
        <div className="flex justify-between items-center relative">
          <a className="flex items-center cursor-pointer" href="#">
            <img src="../../assets/logo_REnergy.ico" className="size-[50px]" />
            <span className="text-2xl font-bold text-[#40513B]">REnergy</span>
          </a>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                className="text-white bg-[#40513B] font-medium rounded-lg text-md px-8 py-3 cursor-pointer"
                onClick={handleLoginClick}
              >
                {userData ? `Hola, ${userData.name}` : "Log in"}
              </button>

              {showLoginForm && (
                <div
                  className="absolute z-20 bg-white w-64 p-4 rounded-lg shadow-lg"
                  style={{ inset: "68px 0 auto auto" }}
                >
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${
                          formErrors.name ? "border-red-500" : "border-gray-300"
                        } rounded`}
                        required
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          Este campo es obligatorio
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cédula*
                      </label>
                      <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        className={`w-full p-2 border ${
                          formErrors.id ? "border-red-500" : "border-gray-300"
                        } rounded`}
                        required
                      />
                      {formErrors.id && (
                        <p className="text-red-500 text-xs mt-1">
                          Este campo es obligatorio
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#40513B] text-white py-2 rounded hover:bg-[#2d3a27]"
                    >
                      Ingresar
                    </button>
                  </form>
                </div>
              )}
            </div>

            <button
              className="text-gray-900 cursor-pointer bg-[#E7E7E7] rounded-lg font-medium text-md px-8 py-3"
              onClick={handleMenuClick}
            >
              Menu
            </button>

            <div
              className={`absolute z-10 bg-[#E7E7E7] w-1/7 px-8 py-3 rounded-lg ${
                showMenu ? "block" : "hidden"
              }`}
              style={{ inset: "68px 0 auto auto" }}
            >
              <ul className="flex flex-col gap-2 pt-4">
                <MenuListItem to="#" text="Quienes somos" />
                <MenuListItem to="#" text="Portafolio" />
                <MenuListItem to="#" text="Galeria" />
                <MenuListItem to="#" text="Contactor" />
              </ul>

              <ul className="flex pt-4 gap-2">
                <IconSocialMedia to="#">
                  <LinkedinIcon />
                </IconSocialMedia>
                <IconSocialMedia to="https://github.com/JuanPabloEscobarMarin/REnergy_Frontend/tree/main">
                  <GithubIcon />
                </IconSocialMedia>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
