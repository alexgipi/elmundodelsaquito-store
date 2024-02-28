/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { A as API_URL, b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import { $ as $$FormLayout } from './complete_BPI2afhF.mjs';

const $$Astro = createAstro();
const $$Registro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Registro;
  let alertMessage = {
    status: null,
    message: null
  };
  const errors = { invalidEmail: false, invalidPassword: false };
  let email = "";
  let password = "";
  let passwordRepeat = "";
  const isLoggedIn = Astro2.cookies.has("identity");
  if (isLoggedIn)
    return Astro2.redirect("/");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      email = formData.get("email");
      password = formData.get("password");
      passwordRepeat = formData.get("password-repeat");
      if (password.length < 8 || password.length > 30) {
        errors.invalidPassword = true;
        alertMessage.status = "error";
        alertMessage.message = "La contrase\xF1a debe tener entre 8 y 30 caracteres";
      } else if (password !== passwordRepeat) {
        errors.invalidPassword = true;
        alertMessage.status = "error";
        alertMessage.message = "Las contrase\xF1as no coinciden";
      } else {
        const newUserData = await createUser(email, password);
        if (newUserData.ok) {
          const { user } = newUserData;
          alertMessage.status = "success";
          alertMessage.message = "Cuenta creada correctamente";
          const loginUserData = await loginUser(email, password);
          if (loginUserData.ok) {
            const { user: user2, token } = loginUserData;
            alertMessage.status = "success";
            alertMessage.message = "Sesi\xF3n iniciada correctamente";
            const identity = {
              ...user2,
              token
            };
            Astro2.cookies.set("identity", JSON.stringify(identity));
            return Astro2.redirect("/");
          } else {
            errors.invalidEmail = true;
            alertMessage.status = "error";
            alertMessage.message = "Error: Usuario y/o contrase\xF1a invalidos";
          }
        } else {
          errors.invalidEmail = true;
          alertMessage.status = "error";
          alertMessage.message = "Ya existe una cuenta con este correo electr\xF3nico";
        }
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  async function loginUser(email2, password2) {
    try {
      const res = await fetch(
        `${API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email2,
            password: password2
          })
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      alertMessage.status = "error";
      alertMessage.message = "Ha hab\xEDdo un problema al iniciar sesi\xF3n.";
    }
  }
  async function createUser(email2, password2) {
    try {
      const res = await fetch(
        `${API_URL}/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email2,
            password: password2
          })
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      alertMessage.status = "error";
      alertMessage.message = "Ha hab\xEDdo un problema al iniciar sesi\xF3n.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Crear cuenta", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!" })} <div class="container flex-dir-column"> ${renderComponent($$result2, "FormLayout", $$FormLayout, {}, { "default": ($$result3) => renderTemplate` <nav class="secondary-nav mb-4"> <li> <a href="/login"> Iniciar sesión </a> </li> <li> <a href="/registro" class="active"> Registro </a> </li> </nav>  <form method="POST" class="form login-form"> ${alertMessage.message && renderTemplate`<p${addAttribute("form-alert " + alertMessage.status, "class")}> ${alertMessage?.message} </p>`} <div class="form-element"> <label${addAttribute(errors.invalidEmail ? "invalid" : "", "class")}> <span>Correo electrónico</span> <input${addAttribute(email, "value")} name="email" required type="email" placeholder="Introduce tu correo electrónico"> </label> <!-- {errors.email && <p class="field-error">{errors.email}</p>} --> </div> <div class="form-element"> <label${addAttribute(errors.invalidPassword ? "invalid" : "", "class")}> <span>Contraseña</span> <input${addAttribute(password, "value")} name="password" required type="password" placeholder="Escribe tu nueva contraseña"> </label> </div> <div class="form-element"> <label${addAttribute(errors.invalidPassword ? "invalid" : "", "class")}> <span>Repetir contraseña</span> <input${addAttribute(passwordRepeat, "value")} name="password-repeat" required type="password" placeholder="Vuelve a escribir tu nueva contraseña"> </label> </div> <footer> <button type="submit">
Crear cuenta
</button> <div class="flex flex-col gap-2 mt-4"> <p class="mt-2 text[#626262]">¿Ya tienes tu cuenta?</p> <a href="/login"> Inicia sesión con tu cuenta de El mundo del saquito</a> </div> </footer> </form> ` })} </div> </main> ` })}`;
}, "C:/www/astro/src/pages/registro.astro", void 0);

const $$file = "C:/www/astro/src/pages/registro.astro";
const $$url = "/registro";

export { $$Registro as default, $$file as file, $$url as url };
