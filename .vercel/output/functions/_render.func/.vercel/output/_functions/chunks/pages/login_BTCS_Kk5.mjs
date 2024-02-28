/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { A as API_URL, b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import { $ as $$FormLayout } from './complete_BPI2afhF.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const redirect = Astro2.url.searchParams.get("redirect") || "/";
  let alertMessage = {
    status: null,
    message: null
  };
  const errors = { invalidLogin: false };
  let email = "";
  let password = "";
  const isLoggedIn = Astro2.cookies.has("identity");
  if (isLoggedIn)
    return Astro2.redirect("/");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      email = formData.get("email");
      password = formData.get("password");
      const loginUserData = await loginUser(email, password);
      if (loginUserData.ok) {
        const { user, token } = loginUserData;
        alertMessage.status = "success";
        alertMessage.message = "Sesi\xF3n iniciada correctamente";
        const identity = {
          ...user,
          token
        };
        Astro2.cookies.set("identity", JSON.stringify(identity));
      } else {
        errors.invalidLogin = true;
        alertMessage.status = "error";
        alertMessage.message = "Error: Usuario y/o contrase\xF1a invalidos";
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        return Astro2.redirect(redirect);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Iniciar sesi\xF3n", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!" })} <div class="container flex-dir-column"> ${renderComponent($$result2, "FormLayout", $$FormLayout, {}, { "default": ($$result3) => renderTemplate` <nav class="secondary-nav mb-4"> <li> <a href="/login" class="active"> Iniciar sesión </a> </li> <li> <a href="/registro"> Registro </a> </li> </nav> <form method="POST" class="form login-form"> ${alertMessage.message && renderTemplate`<p${addAttribute("form-alert " + alertMessage.status, "class")}> ${alertMessage?.message} </p>`} <div class="form-element"> <label${addAttribute(errors.invalidLogin ? "invalid" : "", "class")}> <span>Correo electrónico</span> <input${addAttribute(email, "value")} name="email" required type="email"> </label> <!-- {errors.email && <p class="field-error">{errors.email}</p>} --> </div> <div class="form-element"> <label${addAttribute(errors.invalidLogin ? "invalid" : "", "class")}> <span>Contraseña</span> <input${addAttribute(password, "value")} name="password" required type="password"> </label> </div> <a href="/reset-password" data-astro-prefetch="load">¿Olvidaste la contraseña?</a> <footer> <button type="submit">
Iniciar sesión
</button> <div class="flex flex-col gap-2 mt-4"> <p class="mt-2 text[#626262]">¿Todavía no tienes tu cuenta?</p> <a href="/registro"> Crear cuenta de Elmundodelsaquito.es</a> </div> </footer> </form> ` })} </div> </main> ` })}`;
}, "C:/www/astro/src/pages/login.astro", void 0);

const $$file = "C:/www/astro/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
