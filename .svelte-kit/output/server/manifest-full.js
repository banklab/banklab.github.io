export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "banlklab-poc/_app",
	assets: new Set([".nojekyll","404.html","assets/download/Defining_theories_in_evolution.pdf","assets/download/fintess-landscape-simulation.nb","assets/img/home-bg@1x.jpg","assets/img/home-bg@2x.jpg","assets/img/logos/HFSP_horizontal_blue_0.jpg","assets/img/logos/SNF_logo_standard_web_color_pos_e.png","assets/img/logos/embo-logo.jpg","assets/img/logos/erc-logo-0 copy.png","assets/img/logos/erc-logo-0.png","assets/img/logos/erc-logo.png","assets/img/logos/fcg-logo.jpg","assets/img/logos/fct-logo.jpg","assets/img/media.jpg","assets/img/misc/bright-forrest-artsy-bg.jpg","assets/img/news/default-conference.jpg","assets/img/news/default-defense.jpg","assets/img/news/default-grant.jpg","assets/img/news/default-meeting.jpg","assets/img/news/default-seminar.jpg","assets/img/news/default-welcome.jpg","assets/img/random images for placeholders/Bliss.jpg","assets/img/random images for placeholders/Bluehills.jpg","assets/img/random images for placeholders/Desert.jpg","assets/img/random images for placeholders/Follow.jpg","assets/img/random images for placeholders/Stonehenge.jpg","assets/img/random images for placeholders/Tulips.jpg","assets/img/research/holey.png","assets/img/research/peak.png","assets/img/research/phenotype.png","assets/img/research/research-2020.jpg","assets/img/teaching.jpg","assets/img/team/2016_claudia_bank_320x320.jpg","assets/img/team/Carole_24.jpg","assets/img/team/Catalina.jpeg","assets/img/team/Catalina_24.jpg","assets/img/team/Claudia_24.jpg","assets/img/team/Hermina_new_photo.jpg","assets/img/team/Ianis_24.jpg","assets/img/team/James_24.jpg","assets/img/team/Julio.jpg","assets/img/team/Julio_24.jpg","assets/img/team/Loic_24.jpg","assets/img/team/Loraine.jpeg","assets/img/team/Loraine_24.jpg","assets/img/team/Mado_24.jpg","assets/img/team/Profilbild_jerome_staeheli.jpg","assets/img/team/Profilbild_jerome_staeheli.png","assets/img/team/Rieder-Jessica_w.jpg","assets/img/team/Russ.jpeg","assets/img/team/Russ_24.jpg","assets/img/team/Suman.jpeg","assets/img/team/Suman_24.jpg","assets/img/team/SusanneHolenstein.png","assets/img/team/Swastik.jpeg","assets/img/team/Xiaoyue.jpg","assets/img/team/Yannick_24.jpg","assets/img/team/Zach.jpeg","assets/img/team/Zach_24.jpg","assets/img/team/adamandia_kapopoulou_320x320.jpg","assets/img/team/ana_morales_320x320.jpg","assets/img/team/andre_amado_320x320.jpg","assets/img/team/claudia_bank_320x320.jpg","assets/img/team/david_mcleod_resized.jpg","assets/img/team/david_mcleod_square.jpg","assets/img/team/davide_cusseddu_320x320.jpg","assets/img/team/default_person.jpg","assets/img/team/dragan_stajic_320x320.jpg","assets/img/team/hermina_ghenu_320x320.jpg","assets/img/team/li_juan_320x320.jpg","assets/img/team/loic_marrec_320x320.jpg","assets/img/team/marco_louro_320x320.jpg","assets/img/team/mark_schmitz_320x320.jpg","assets/img/team/massimo_amicone_320x320.jpg","assets/img/team/rsz_david_mcleod_square.jpg","assets/img/team/team_24.jpg","assets/img/team/team_25.jpg","assets/img/team/white-Rieder-Jessica_w.jpg","assets/img/tools.jpg","favicon.png","og-image.png"]),
	mimeTypes: {".html":"text/html",".pdf":"application/pdf",".nb":"application/mathematica",".jpg":"image/jpeg",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.CtRBlEpO.js",app:"_app/immutable/entry/app.CuiZf_jc.js",imports:["_app/immutable/entry/start.CtRBlEpO.js","_app/immutable/chunks/BirH-aP5.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/URdBUpre.js","_app/immutable/chunks/BcY-0ED0.js","_app/immutable/entry/app.CuiZf_jc.js","_app/immutable/chunks/IkLcW2bu.js","_app/immutable/chunks/CcqWtd-5.js","_app/immutable/chunks/CzN5fCK0.js","_app/immutable/chunks/BcY-0ED0.js","_app/immutable/chunks/Do45u0hF.js","_app/immutable/chunks/DBuXyFtC.js","_app/immutable/chunks/DocIaeTk.js","_app/immutable/chunks/URdBUpre.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/archive",
				pattern: /^\/archive\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/news",
				pattern: /^\/news\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/people",
				pattern: /^\/people\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/positions",
				pattern: /^\/positions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/publications",
				pattern: /^\/publications\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/research",
				pattern: /^\/research\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/resources",
				pattern: /^\/resources\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/testimonials",
				pattern: /^\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
