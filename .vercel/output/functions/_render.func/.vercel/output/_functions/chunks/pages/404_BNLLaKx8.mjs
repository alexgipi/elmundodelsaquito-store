/* empty css                               */
import { c as createAstro, d as createComponent, e as defineStyleVars, r as renderTemplate, m as maybeRenderHead, f as addAttribute, u as unescapeHTML, g as renderSlot, h as renderComponent, i as renderHead } from '../astro_Bbjgh55g.mjs';
import 'kleur/colors';
/* empty css                               */
import 'clsx';
/* empty css                               */
import { atom, map } from 'nanostores';

const $$Astro$6 = createAstro();
const $$Jumbotron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Jumbotron;
  const {
    title,
    desc,
    btnValue,
    btnHref,
    class: className,
    bgUrl,
    bgColor,
    color,
    backPath
  } = Astro2.props;
  const backgroundUrl = `url(${bgUrl})`;
  const backgroundColor = bgColor;
  const textColor = color || "color-white";
  const $$definedVars = defineStyleVars([{ backgroundUrl, backgroundColor }]);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute("jumbotron " + className, "class")} data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> <div class="container" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> <div class="jumbotron-content" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> <h1${addAttribute("jumbotron-title align-it-center flex " + textColor, "class")} data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> ${backPath && renderTemplate`<a${addAttribute(backPath, "href")} class="back-btn" id="backButton" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}><path d="M0 0h24v24H0V0z" fill="none" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}></path><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}></path></svg> </a>`} ${title} </h1> <div${addAttribute("jumbotron-desc " + textColor, "class")} data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}>${unescapeHTML(desc)}</div> ${btnHref && btnValue && renderTemplate`<a${addAttribute(btnHref, "href")} class="btn btn-white btn-lg" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}> ${btnValue} </a>`} ${!btnHref && btnValue && renderTemplate`<button class="btn btn-white btn-lg" data-astro-cid-2c35h5vg${addAttribute($$definedVars, "style")}>${btnValue}</button>`} </div> <!-- <div class="jumbotron-content">
      <div style="display: flex;align-items: center;">
        <img class="object-fit-contain" alt="Imagen de cojínes térmicos medianos" src="https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/puntosG3-2.webp" style="height: 326px;transform: scale(1.1) rotate(17deg) translateY(-31px);position: absolute;right: 20px;transition: filter 0.3s ease;">
        <img class="object-fit-contain" alt="Imagen de cojínes térmicos medianos" src="https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/zapatillas-leopardo.webp" style="height: 326px;transform: scale(0.8) rotate(13deg) translateY(4px);filter: grayscale(1);transition: all 0.3s;">
      </div>
    </div> --> </div> </section> `;
}, "C:/www/astro/src/components/Jumbotron.astro", void 0);

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/www/astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$Dropdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Dropdown;
  Astro2.cookies.has("identity");
  return renderTemplate`${maybeRenderHead()}<button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" class="text-dark whitespace-nowrap shadow bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
Mi cuenta
<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path> </svg> </button> <!-- Dropdown menu --> ${renderSlot($$result, $$slots["default"])} `;
}, "C:/www/astro/src/components/ui/Dropdown.astro", void 0);

/** @returns {void} */
function noop() {}

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

function subscribe(store, ...callbacks) {
	if (store == null) {
		for (const callback of callbacks) {
			callback(undefined);
		}
		return noop;
	}
	const unsub = store.subscribe(...callbacks);
	return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

// general each functions:

function ensure_array_like(array_like_or_iterator) {
	return array_like_or_iterator?.length !== undefined
		? array_like_or_iterator
		: Array.from(array_like_or_iterator);
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

/** @returns {string} */
function each(items, fn) {
	items = ensure_array_like(items);
	let str = '';
	for (let i = 0; i < items.length; i += 1) {
		str += fn(items[i], i);
	}
	return str;
}

function validate_component(component, name) {
	if (!component || !component.$$render) {
		if (name === 'svelte:component') name += ' this={...}';
		throw new Error(
			`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
		);
	}
	return component;
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/** @returns {string} */
function add_attribute(name, value, boolean) {
	if (value == null || (boolean && !value)) return '';
	const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
	return ` ${name}${assignment}`;
}

const isCartOpen = atom(false);
const cartItems = map({});
const totalItems = atom(0);
const subtotal = atom(0);

function formatCurrency(number) {
  return number.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  });
}
function formatDate(dateString) {
  const date = new Date(dateString);
  const dateFormat = new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "UTC"
    // Ajusta esto según tu zona horaria
  });
  return dateFormat.format(date);
}

/* C:/www/astro/src/components/ToggleCart.svelte generated by Svelte v4.2.1 */

const css = {
	code: ".cart-panel.svelte-2xf1g2.svelte-2xf1g2{position:relative}.toggle-cart.svelte-2xf1g2.svelte-2xf1g2{display:flex;align-items:center;gap:12px;color:#000;padding:10px 18px;border:none;background:#fff;border-radius:10px;position:relative;cursor:pointer;box-shadow:1px 1px 10px #f2f2f2d4}.toggle-cart.svelte-2xf1g2 .price.svelte-2xf1g2,.toggle-cart.svelte-2xf1g2 .total-products.svelte-2xf1g2{font-size:0.84em;opacity:0.9}.toggle-cart.svelte-2xf1g2 .total-products.svelte-2xf1g2{position:absolute;display:flex;align-items:center;justify-content:center;font-weight:600;opacity:1;width:22px;height:22px;left:-11px;top:-11px;background:#ff5858;color:#fff;border-radius:100%;box-shadow:1px 1px 10px #4e4e4e17}.toggle-cart.svelte-2xf1g2 .price.svelte-2xf1g2{font-weight:600}.toggle-cart.svelte-2xf1g2 svg.svelte-2xf1g2{width:24px;height:24px;padding:1px;fill:currentColor}.cart-panel.svelte-2xf1g2:hover .cart-items.svelte-2xf1g2{opacity:1;visibility:visible}.cart-panel.svelte-2xf1g2.svelte-2xf1g2:hover::before{position:absolute;right:0;top:1px;content:\"\";width:278px;height:60px;border-radius:100% 0% 0% 100% / 140% 0% 100% 0%}.cart-items.svelte-2xf1g2.svelte-2xf1g2{display:flex;flex-direction:column;border:1px solid #dddddd78;background:#ffffff;-webkit-backdrop-filter:hue-rotate(53deg);backdrop-filter:hue-rotate(53deg);position:absolute;width:385px;right:0;top:50px;border-radius:12px;overflow:hidden;visibility:hidden;opacity:0}.cart-item.svelte-2xf1g2.svelte-2xf1g2{list-style:none;padding:22px;border-bottom:1px solid #dddddd78;display:flex;align-items:center;gap:14px;justify-content:space-between}.cart-item.svelte-2xf1g2.svelte-2xf1g2:hover{background:#f6f6f6}.cart-item__info.svelte-2xf1g2.svelte-2xf1g2{display:flex;align-items:center;gap:20px}.cart-item.svelte-2xf1g2 img.svelte-2xf1g2{border-radius:6px;-o-object-fit:cover;object-fit:cover;height:56px}.cart-item.svelte-2xf1g2 h4.svelte-2xf1g2{font-size:0.9em;margin:0;max-width:195px;text-wrap:balance}.cart-item.svelte-2xf1g2 .quantity.svelte-2xf1g2{font-size:0.8em;margin-top:0;white-space:nowrap}.cart-item.svelte-2xf1g2 .price.svelte-2xf1g2{color:#00966c;font-weight:600}.cart-items.svelte-2xf1g2 footer.svelte-2xf1g2{display:flex;padding:22px;flex-direction:column;gap:18px}.cart-items.svelte-2xf1g2 footer .cart-panel__btn.svelte-2xf1g2{padding:16px 20px;border:none;background:#3d1a6c;color:#fff;border-radius:9px;width:100%;cursor:pointer;text-align:center;font-size:0.9em;line-height:1;font-weight:500}.svelte-2xf1g2.svelte-2xf1g2{scrollbar-width:auto;scrollbar-color:#a6a6a6 #ebebeb}.svelte-2xf1g2.svelte-2xf1g2::-webkit-scrollbar{width:11px}.svelte-2xf1g2.svelte-2xf1g2::-webkit-scrollbar-track{background:#ebebeb}.svelte-2xf1g2.svelte-2xf1g2::-webkit-scrollbar-thumb{background-color:#a6a6a6;border-radius:13px;border:3px solid #ebebeb}",
	map: null
};

const ToggleCart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let $$unsubscribe_isCartOpen;
	let $subtotal, $$unsubscribe_subtotal;
	let $totalItems, $$unsubscribe_totalItems;
	let $cartItems, $$unsubscribe_cartItems;
	$$unsubscribe_isCartOpen = subscribe(isCartOpen, value => value);
	$$unsubscribe_subtotal = subscribe(subtotal, value => $subtotal = value);
	$$unsubscribe_totalItems = subscribe(totalItems, value => $totalItems = value);
	$$unsubscribe_cartItems = subscribe(cartItems, value => $cartItems = value);

	$$result.css.add(css);
	$$unsubscribe_isCartOpen();
	$$unsubscribe_subtotal();
	$$unsubscribe_totalItems();
	$$unsubscribe_cartItems();

	return `<div class="cart-panel svelte-2xf1g2"><button class="toggle-cart svelte-2xf1g2"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" class="svelte-2xf1g2"><g class="svelte-2xf1g2"><rect fill="none" height="24" width="24" class="svelte-2xf1g2"></rect><rect fill="none" height="24" width="24" class="svelte-2xf1g2"></rect></g><g class="svelte-2xf1g2"><path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M19,16c0-0.55-0.45-1-1-1H7l1.1-2h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34 c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.54,2.57C4.38,2.22,4.02,2,3.64,2H2C1.45,2,1,2.45,1,3s0.45,1,1,1h1l3.6,7.59 l-1.35,2.44C4.52,15.37,5.48,17,7,17h11C18.55,17,19,16.55,19,16z M11.29,2.71c0.39-0.39,1.02-0.39,1.41,0l2.59,2.59 c0.39,0.39,0.39,1.02,0,1.41l-2.59,2.59c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L12.17,7L9,7C8.45,7,8,6.55,8,6 c0-0.55,0.45-1,1-1l3.17,0l-0.88-0.88C10.9,3.73,10.9,3.1,11.29,2.71z" class="svelte-2xf1g2"></path></g></svg> <span class="price svelte-2xf1g2">${escape(formatCurrency($subtotal))}</span> ${$totalItems > 0
	? `<span class="total-products svelte-2xf1g2">${escape($totalItems)}</span>`
	: ``}</button> ${Object.values($cartItems).length
	? `<div class="cart-items svelte-2xf1g2">${each(Object.values($cartItems), cartItem => {
			return `<li class="cart-item svelte-2xf1g2"><div class="cart-item__info svelte-2xf1g2"><img${add_attribute("src", cartItem.imageSrc, 0)}${add_attribute("alt", cartItem.name, 0)} class="svelte-2xf1g2"> <div class="svelte-2xf1g2"><h4 class="svelte-2xf1g2">${escape(cartItem.name)}</h4> <small class="svelte-2xf1g2">${each(cartItem.selectedAttributes, attribute => {
				return `<span class="svelte-2xf1g2">${escape(attribute?.optionSelected)} </span>`;
			})}</small> </div></div> <div class="cart-item__details svelte-2xf1g2"><p class="quantity svelte-2xf1g2">${escape(cartItem.quantity)} x <span class="price svelte-2xf1g2">${escape(formatCurrency(cartItem.price))}</span> </p></div> </li>`;
		})} <footer class="svelte-2xf1g2"><p class="svelte-2xf1g2"><strong class="svelte-2xf1g2" data-svelte-h="svelte-hruljg">Subtotal:</strong> <span class="svelte-2xf1g2">${escape(formatCurrency($subtotal))}</span></p> <a href="/finalizar-compra" class="cart-panel__btn svelte-2xf1g2" data-svelte-h="svelte-11cbt3m">Finalizar compra</a></footer></div>`
	: ``} </div>`;
});

const API_URL = "http://localhost:3500/api";
const UPLOADS_URL = "http://localhost:3500/uploads/";
const getCategories = async () => {
  try {
    const res = await fetch(
      `${API_URL}/product-categories`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getCategoryBySlug = async (categorySlug) => {
  try {
    const res = await fetch(
      `${API_URL}/product-categories/${categorySlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getCategoryProducts = async (categorySlug, params) => {
  try {
    const queryParams = new URLSearchParams({
      limit: params?.limit?.toString() || "",
      page: params?.page?.toString() || ""
    });
    const res = await fetch(
      `${API_URL}/products/categories.slug/${categorySlug}?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getProudct = async (idOrSlug) => {
  try {
    const res = await fetch(
      `${API_URL}/products/${idOrSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  let identityCookie = Astro2.cookies.get("identity");
  let identity = null;
  if (identityCookie) {
    identity = JSON.parse(identityCookie.value);
  }
  const menuItems = await getMainNav();
  async function getMainNav() {
    try {
      const res = await fetch(
        `${API_URL}/menus/menu-principal`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await res.json();
      return data.menu_items;
    } catch (error) {
      console.log(error);
    }
  }
  return renderTemplate`<!-- { identity && admin_roles.includes(identity.role)  &&

  <AdminToolbar identity={identity}></AdminToolbar>

} -->${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img width="149" height="56" src="https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito.webp" class="header-logo" alt="Logo de El mundo del saquito" decoding="async" fetchpriority="high" srcset="
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito.png          1958w,
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito-300x113.png   300w,
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito-1024x385.png 1024w,
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito-768x289.png   768w,
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito-1536x577.png 1536w,
            https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/logo-elmundodelsaquito-416x156.png   416w
          " sizes="(max-width: 1958px) 100vw, 1958px" data-astro-cid-3ef6ksr2> </a> <nav class="main-nav" data-astro-cid-3ef6ksr2> <div class="main-nav-items" data-astro-cid-3ef6ksr2> ${menuItems.map((menuItem) => renderTemplate`<a${addAttribute("/" + currentPath === menuItem.link ? "active" : "", "class")}${addAttribute(menuItem.link, "href")} data-astro-cid-3ef6ksr2>${menuItem.label}</a>`)} </div> </nav> <!-- <div class="header-search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
        ><path d="M0 0h24v24H0V0z" fill="none"></path><path
          d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        ></path></svg
      >
      <input placeholder="Buscar productos..." />
    </div> --> <div class="header__right" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ToggleCart", ToggleCart, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/www/astro/src/components/ToggleCart.svelte", "client:component-export": "default", "data-astro-cid-3ef6ksr2": true })} ${!identity && renderTemplate`<a data-astro-prefetch="load" href="/login" id="dropdownInformationButton" class="text-white whitespace-nowrap bg-[#481f7f] hover:bg-[--primary-color] focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-astro-cid-3ef6ksr2>
Iniciar sesión
</a>`} ${identity && renderTemplate`${renderComponent($$result, "Dropdown", $$Dropdown, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <div id="dropdownInformation" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600" data-astro-cid-3ef6ksr2> <div class="px-4 py-3 text-sm text-gray-900 dark:text-white" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2><strong data-astro-cid-3ef6ksr2>Usuario:</strong> ${identity.username}</div> <div class="font-medium truncate" data-astro-cid-3ef6ksr2>${identity.email}</div> </div> <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/mi-cuenta" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-3ef6ksr2>Escritorio</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/mi-cuenta/pedidos" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-3ef6ksr2>Mis pedidos</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/mi-cuenta/direcciones" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-3ef6ksr2>Direcciones</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/mi-cuenta/metodos-de-pago" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-3ef6ksr2>Métodos de pago</a> </li> <li data-astro-cid-3ef6ksr2> <a href="/mi-cuenta/detalles" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-astro-cid-3ef6ksr2>Detalles de mi cuenta</a> </li> </ul> <div class="py-2" data-astro-cid-3ef6ksr2> <a href="/logout" data-astro-prefetch="load" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-astro-cid-3ef6ksr2>Cerrar sesión</a> </div> </div> ` })}`} </div> </div> </header> <!-- <StoreMessage client:load></StoreMessage> --> <!-- <CheckoutModal client:load></CheckoutModal> --> `;
}, "C:/www/astro/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="container flex flex-col gap-6" data-astro-cid-sz7xmlte> <div class="footer-sitename" data-astro-cid-sz7xmlte>
Elmundodelsaquito.es
</div> <div class="footer-nav" data-astro-cid-sz7xmlte> <a href="/aviso-legal" data-astro-cid-sz7xmlte>Aviso legal</a> <a href="/politica-de-privacidad" data-astro-cid-sz7xmlte>Política de privacidad</a> <a href="/politica-de-cookies" data-astro-cid-sz7xmlte>Política de cookies</a> </div> <div class="flex gap-4" style="gap: 15px;" data-astro-cid-sz7xmlte> <a target="_blank" data-astro-cid-sz7xmlte> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path> </svg> </a> <a target="_blank" data-astro-cid-sz7xmlte> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" data-astro-cid-sz7xmlte></path> </svg> </a> <a target="_blank" data-astro-cid-sz7xmlte> <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" data-astro-cid-sz7xmlte></path> </svg> </a> </div> </div> </footer> `;
}, "C:/www/astro/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Noto+Sans:wght@100;200;500;600;700&display=swap" rel="stylesheet">', "", '</head> <body> <div class="layout layout--aside-cart"> <div class="layout-content"> ', " ", " ", " </div> </div>  </body> <!-- <script>\n  import { initFlowbite } from 'flowbite';\n\n  initFlowbite();\n\n  document.addEventListener('astro:after-swap', (e) => {\n    initFlowbite();\n  })\n\n<\/script> --></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap", "handleForms": true }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/www/astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Jumbotron", $$Jumbotron, { "class": "bg-404", "title": "Error 404", "desc": "La pagina que estabas buscando no existe en este sitio web.", "btnValue": "Ir a la pagina de Inicio", "btnHref": "/", "bgUrl": "https://images.unsplash.com/photo-1610337673044-720471f83677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" })} <div class="container flex-dir-column"> <section> <div class="d-block text-center"> <h3 class="d-block-title">
Shop by category
</h3> <a class="text-dark font-weight-bold" href="#" style="text-decoration: none; font-weight: 500; color: #919191">Browse all categories &gt;</a> </div> <div class="category-grid"> <div class="card"> <picture class="with-gradient"> <img alt="Imagen de zapatillas térmicas" src="https://elmundodelsaquito.es/wp-content/uploads/sites/4/2023/09/zapatillas-324x324.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title">Silk Dresses</h4> <a href="#" class="text-white text-sm font-weight-semibold mb-0">See products &gt;</a> </div> </div> <div class="card"> <picture class="with-gradient"> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/category2.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title">Silk Dresses</h4> <a href="#" class="text-white text-sm font-weight-semibold mb-0">See products &gt;</a> </div> </div> <div class="card"> <picture class="with-gradient"> <img alt="Imagen de zapatillas térmicas" src="https://demos.creative-tim.com/astro-ecommerce//images/category3.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title">Silk Dresses</h4> <a href="#" class="text-white text-sm font-weight-semibold mb-0">See products &gt;</a> </div> </div> <div class="card"> <picture class="with-gradient"> <img alt="Imagen de zapatillas térmicas" src="	https://demos.creative-tim.com/astro-ecommerce//images/category4.jpg"> </picture> <div class="card-body"> <p>Pre-fall</p> <h4 class="card-title">Silk Dresses</h4> <a href="#" class="text-white text-sm font-weight-semibold mb-0">See products &gt;</a> </div> </div> </div> </section> </div> </main> ` })}`;
}, "C:/www/astro/src/pages/404.astro", void 0);

const $$file = "C:/www/astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, API_URL as A, UPLOADS_URL as U, _404 as _, getCategoryProducts as a, $$Jumbotron as b, create_ssr_component as c, formatDate as d, add_attribute as e, formatCurrency as f, getCategoryBySlug as g, each as h, escape as i, getProudct as j, getCategories as k, validate_component as v };
