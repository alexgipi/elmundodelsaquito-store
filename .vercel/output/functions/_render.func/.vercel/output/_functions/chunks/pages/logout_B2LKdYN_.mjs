/* empty css                               */
import { c as createAstro, d as createComponent } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("identity");
  const data = Astro2.locals;
  console.log(data);
  return Astro2.redirect("/");
}, "C:/www/astro/src/pages/logout.astro", void 0);

const $$file = "C:/www/astro/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
