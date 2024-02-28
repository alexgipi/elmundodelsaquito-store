/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
import { b as $$Jumbotron, $ as $$Layout } from './404_BNLLaKx8.mjs';
import { $ as $$SecondaryNav } from './_id__DJgVOUTP.mjs';
import { $ as $$Modal } from './detalles_C1o7ye4c.mjs';
/* empty css                                    */

const $$Astro = createAstro();
const $$MetodosDePago = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MetodosDePago;
  console.log(Astro2.cookies.get("Hola"));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar compra", "data-astro-cid-ru5g4dhp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-ru5g4dhp> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "jumbotron--small bg-position-center", "title": "Metodos de pago", "color": "color-dark", "desc": "Accede para ver y guardar todos tus pedidos en un solo lugar, disfrutando de una experiencia de compra personalizada. \xA1Tu conveniencia y seguridad son nuestra prioridad!", "data-astro-cid-ru5g4dhp": true })} <div class="container" data-astro-cid-ru5g4dhp> ${renderComponent($$result2, "SecondaryNav", $$SecondaryNav, { "data-astro-cid-ru5g4dhp": true })} <div class="my-account-content" data-astro-cid-ru5g4dhp>
Ver y editar metodos de pago
</div> </div> </main> ${renderComponent($$result2, "Modal", $$Modal, { "id": "dialog", "open": "Abrir modal", "data-astro-cid-ru5g4dhp": true }, { "open": ($$result3) => renderTemplate`<button${addAttribute(`window.dialog.showModal()`, "onclick")} data-astro-cid-ru5g4dhp>OPEM</button>` })} ` })}  `;
}, "C:/www/astro/src/pages/mi-cuenta/metodos-de-pago.astro", void 0);

const $$file = "C:/www/astro/src/pages/mi-cuenta/metodos-de-pago.astro";
const $$url = "/mi-cuenta/metodos-de-pago";

export { $$MetodosDePago as default, $$file as file, $$url as url };
