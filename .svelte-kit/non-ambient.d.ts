
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/archive" | "/contact" | "/news" | "/people" | "/positions" | "/privacy" | "/publications" | "/research" | "/resources" | "/testimonials";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/archive": Record<string, never>;
			"/contact": Record<string, never>;
			"/news": Record<string, never>;
			"/people": Record<string, never>;
			"/positions": Record<string, never>;
			"/privacy": Record<string, never>;
			"/publications": Record<string, never>;
			"/research": Record<string, never>;
			"/resources": Record<string, never>;
			"/testimonials": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/archive" | "/archive/" | "/contact" | "/contact/" | "/news" | "/news/" | "/people" | "/people/" | "/positions" | "/positions/" | "/privacy" | "/privacy/" | "/publications" | "/publications/" | "/research" | "/research/" | "/resources" | "/resources/" | "/testimonials" | "/testimonials/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.nojekyll" | "/404.html" | "/assets/download/Defining_theories_in_evolution.pdf" | "/assets/download/fintess-landscape-simulation.nb" | "/assets/img/home-bg@1x.jpg" | "/assets/img/home-bg@2x.jpg" | "/assets/img/logos/HFSP_horizontal_blue_0.jpg" | "/assets/img/logos/SNF_logo_standard_web_color_pos_e.png" | "/assets/img/logos/embo-logo.jpg" | "/assets/img/logos/erc-logo-0 copy.png" | "/assets/img/logos/erc-logo-0.png" | "/assets/img/logos/erc-logo.png" | "/assets/img/logos/fcg-logo.jpg" | "/assets/img/logos/fct-logo.jpg" | "/assets/img/media.jpg" | "/assets/img/misc/bright-forrest-artsy-bg.jpg" | "/assets/img/news/default-conference.jpg" | "/assets/img/news/default-defense.jpg" | "/assets/img/news/default-grant.jpg" | "/assets/img/news/default-meeting.jpg" | "/assets/img/news/default-seminar.jpg" | "/assets/img/news/default-welcome.jpg" | "/assets/img/random images for placeholders/Bliss.jpg" | "/assets/img/random images for placeholders/Bluehills.jpg" | "/assets/img/random images for placeholders/Desert.jpg" | "/assets/img/random images for placeholders/Follow.jpg" | "/assets/img/random images for placeholders/Stonehenge.jpg" | "/assets/img/random images for placeholders/Tulips.jpg" | "/assets/img/research/holey.png" | "/assets/img/research/peak.png" | "/assets/img/research/phenotype.png" | "/assets/img/research/research-2020.jpg" | "/assets/img/teaching.jpg" | "/assets/img/team/2016_claudia_bank_320x320.jpg" | "/assets/img/team/Carole_24.jpg" | "/assets/img/team/Catalina.jpeg" | "/assets/img/team/Catalina_24.jpg" | "/assets/img/team/Claudia_24.jpg" | "/assets/img/team/Hermina_new_photo.jpg" | "/assets/img/team/Ianis_24.jpg" | "/assets/img/team/James_24.jpg" | "/assets/img/team/Julio.jpg" | "/assets/img/team/Julio_24.jpg" | "/assets/img/team/Loic_24.jpg" | "/assets/img/team/Loraine.jpeg" | "/assets/img/team/Loraine_24.jpg" | "/assets/img/team/Mado_24.jpg" | "/assets/img/team/Profilbild_jerome_staeheli.jpg" | "/assets/img/team/Profilbild_jerome_staeheli.png" | "/assets/img/team/Rieder-Jessica_w.jpg" | "/assets/img/team/Russ.jpeg" | "/assets/img/team/Russ_24.jpg" | "/assets/img/team/Suman.jpeg" | "/assets/img/team/Suman_24.jpg" | "/assets/img/team/SusanneHolenstein.png" | "/assets/img/team/Swastik.jpeg" | "/assets/img/team/Xiaoyue.jpg" | "/assets/img/team/Yannick_24.jpg" | "/assets/img/team/Zach.jpeg" | "/assets/img/team/Zach_24.jpg" | "/assets/img/team/adamandia_kapopoulou_320x320.jpg" | "/assets/img/team/ana_morales_320x320.jpg" | "/assets/img/team/andre_amado_320x320.jpg" | "/assets/img/team/claudia_bank_320x320.jpg" | "/assets/img/team/david_mcleod_resized.jpg" | "/assets/img/team/david_mcleod_square.jpg" | "/assets/img/team/davide_cusseddu_320x320.jpg" | "/assets/img/team/default_person.jpg" | "/assets/img/team/dragan_stajic_320x320.jpg" | "/assets/img/team/hermina_ghenu_320x320.jpg" | "/assets/img/team/li_juan_320x320.jpg" | "/assets/img/team/loic_marrec_320x320.jpg" | "/assets/img/team/marco_louro_320x320.jpg" | "/assets/img/team/mark_schmitz_320x320.jpg" | "/assets/img/team/massimo_amicone_320x320.jpg" | "/assets/img/team/rsz_david_mcleod_square.jpg" | "/assets/img/team/team_24.jpg" | "/assets/img/team/team_25.jpg" | "/assets/img/team/white-Rieder-Jessica_w.jpg" | "/assets/img/tools.jpg" | "/favicon.png" | "/og-image.png" | string & {};
	}
}