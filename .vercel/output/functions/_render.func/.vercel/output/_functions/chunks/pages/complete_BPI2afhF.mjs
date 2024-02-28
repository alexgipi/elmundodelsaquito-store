/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderSlot, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { A as API_URL, b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$FormLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormLayout;
  return renderTemplate`${renderSlot($$result, $$slots["default"])} `;
}, "C:/www/astro/src/layouts/FormLayout.astro", void 0);

const $$Astro = createAstro();
const $$Complete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Complete;
  const reset_password_token = Astro2.url.searchParams.get("token") || null;
  console.log(reset_password_token);
  let alertMessage = {
    status: null,
    message: null
  };
  const errors = { invalidEmail: false, invalidPassword: false };
  let password = "";
  let passwordRepeat = "";
  const isLoggedIn = Astro2.cookies.has("identity");
  if (isLoggedIn)
    return Astro2.redirect("/");
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
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
        const resetPasswordResponse = await resetPassword(password);
        console.log(resetPasswordResponse);
        if (resetPasswordResponse.ok) {
          const { user, token } = resetPasswordResponse;
          alertMessage.status = "success";
          alertMessage.message = "Contrase\xF1a restablecida correctamente";
          const identity = {
            ...user,
            token
          };
          Astro2.cookies.set("identity", JSON.stringify(identity), { path: "/" });
        } else {
          const error = resetPasswordResponse.error;
          errors.invalidEmail = true;
          alertMessage.status = "error";
          if (error === "Token missing or invalid") {
            alertMessage.message = "Tu enlace de cambio de contrase\xF1a no es v\xE1lido o ya se ha utilizado.";
          }
        }
      }
      const hasErrors = Object.values(errors).some((msg) => msg);
      if (!hasErrors) {
        if (!hasErrors) {
          return Astro2.redirect("/");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  async function resetPassword(password2) {
    try {
      const res = await fetch(
        `${API_URL}/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + reset_password_token
          },
          body: JSON.stringify({
            password: password2
          })
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      alertMessage.status = "error";
      alertMessage.message = "Ha hab\xEDdo un problema al restablecer la contrase\xF1a.";
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Restablecer contrase\xF1a", "color": "color-dark", "desc": "Escribe tu nueva contrase\xF1a para terminar el proceso." })} <div class="container flex-dir-column"> ${renderComponent($$result2, "FormLayout", $$FormLayout, {}, { "default": ($$result3) => renderTemplate` <form method="POST" class="form login-form"> ${alertMessage.message && renderTemplate`<p${addAttribute("form-alert " + alertMessage.status, "class")}> ${alertMessage?.message} </p>`} <div class="form-element"> <label${addAttribute(errors.invalidPassword ? "invalid" : "", "class")}> <span>Contraseña</span> <input${addAttribute(password, "value")} name="password" required type="password" placeholder="Escribe tu nueva contraseña"> </label> </div> <div class="form-element"> <label${addAttribute(errors.invalidPassword ? "invalid" : "", "class")}> <span>Repetir contraseña</span> <input${addAttribute(passwordRepeat, "value")} name="password-repeat" required type="password" placeholder="Vuelve a escribir tu nueva contraseña"> </label> </div> <footer> <button type="submit">
Cambiar contraseña
</button> <div class="flex flex-col gap-2 mt-4"> <p class="mt-2 text[#626262]">¿Ya tienes tu cuenta?</p> <a href="/login"> Inicia sesión con tu cuenta de El mundo del saquito</a> </div> </footer> </form> ` })} </div> </main> ` })}`;
}, "C:/www/astro/src/pages/reset-password/complete.astro", void 0);

const $$file = "C:/www/astro/src/pages/reset-password/complete.astro";
const $$url = "/reset-password/complete";

const complete = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Complete,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormLayout as $, complete as c };
