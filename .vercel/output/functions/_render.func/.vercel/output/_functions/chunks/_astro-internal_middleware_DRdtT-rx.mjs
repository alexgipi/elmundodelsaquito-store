import 'cookie';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest$1 = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname;
  const PROTECTED_PREFIX = "/mi-cuenta";
  if (pathname.startsWith(PROTECTED_PREFIX)) {
    const isLoggedIn = context.cookies.has("identity");
    if (isLoggedIn) {
      return next();
    } else {
      return context.redirect(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  } else {
    return next();
  }
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest as o, sequence as s };
