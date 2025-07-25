export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["1.png","23.jpg","360.jpg","favicon.png","favicon.svg","kontakt.avif","logo.jpg","noisetexture.jpg","programing.jpg","smallroom.hdr","sounds/hit1.ogg","sounds/hit2.ogg","sounds/hit3.ogg","stul.png","variant2_android-chrome-192.png","variant2_apple-touch-icon.png","variant2_favicon-32.png","variant2_favicon.ico","vr.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml",".avif":"image/avif",".ogg":"audio/ogg"},
	_: {
		client: {start:"_app/immutable/entry/start.XT7uwdHI.js",app:"_app/immutable/entry/app.CktRS1ET.js",imports:["_app/immutable/entry/start.XT7uwdHI.js","_app/immutable/chunks/BDPlx2mt.js","_app/immutable/chunks/Hz4EThx8.js","_app/immutable/chunks/DyMacgXJ.js","_app/immutable/entry/app.CktRS1ET.js","_app/immutable/chunks/Hz4EThx8.js","_app/immutable/chunks/BFqQpsmr.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js'))
		],
		routes: [
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/contact/_server.ts.js'))
			},
			{
				id: "/api/preview",
				pattern: /^\/api\/preview\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/preview/_server.ts.js'))
			},
			{
				id: "/[[preview=preview]]/blog/[uid]",
				pattern: /^(?:\/([^/]+))?\/blog\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/project/[uid]",
				pattern: /^(?:\/([^/]+))?\/project\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[[preview=preview]]/[uid]",
				pattern: /^(?:\/([^/]+))?\/([^/]+?)\/?$/,
				params: [{"name":"preview","matcher":"preview","optional":true,"rest":false,"chained":true},{"name":"uid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/slice-simulator","/slice-simulator/__data.json","/sluzby","/sluzby/__data.json","/","/__data.json","/blog/navrh-obchodu","/blog/navrh-obchodu/__data.json","/blog/navrh-bytu-pro-par","/blog/navrh-bytu-pro-par/__data.json","/blog/navrh-interieru-pro-instituci-kivvi","/blog/navrh-interieru-pro-instituci-kivvi/__data.json","/blog/vr-interier","/blog/vr-interier/__data.json","/blog/pasport-stavby","/blog/pasport-stavby/__data.json","/blog/stare-projekty","/blog/stare-projekty/__data.json","/blog/navrh-jidelniho-stolu","/blog/navrh-jidelniho-stolu/__data.json","/o-mne","/o-mne/__data.json","/projekty","/projekty/__data.json","/home","/home/__data.json"]),
		matchers: async () => {
			const { match: preview } = await import ('../output/server/entries/matchers/preview.js')
			return { preview };
		},
		server_assets: {}
	}
}
})();
