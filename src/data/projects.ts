// Single source of truth for portfolio project data.
//
// - Consumed by src/components/Homepage.astro (rail: featured only)
// - Consumed by src/pages/work/index.astro (full index: all)
// - Consumed by src/pages/work/[slug].astro (per-project case study)
//
// File-naming convention (per Ben, 2026-07-26):
//   /public/assets/client-project/<slug>/<code>-thumb.jpg
//     — used on the homepage rail card + /work index row
//   /public/assets/client-project/<slug>/<code>-thumb-large.jpg
//     — used as the case study hero (optional; falls back to thumb)
// Gallery images live in the same subfolder with meaningful names.
//
// Cernago-era entries deliberately credit only the disciplines Ben
// led or delivered (design, build, positioning, content, video,
// creative direction). The growth and campaign strategy work sits
// with Cernago's other side (Adrian) and is either omitted or
// referenced as "Cernago's other side".

export type Project = {
	slug: string;
	client: string;
	year?: string;
	title: string;
	summary: string;
	role: string;
	thumb: string;      // required — card / index row image
	hero?: string;      // optional — case study hero image; falls back to thumb
	gallery?: string[];
	body: string[];
	liveUrl?: string;
	featured?: boolean;
	era: 'ventures' | 'cernago' | 'redweb';
	workingWith?: string;
};

export const projects: Project[] = [
	// --- Own ventures ----------------------------------------------------
	{
		slug: 'bookbag',
		client: 'Bookbag',
		title: 'The advertising channel that funds primary schools',
		summary:
			'Co-founded venture — designed and built the marketing site and the web application end to end with AI-assisted development.',
		role: 'Co-founder / Product design / Web design & build',
		thumb: '/assets/client-project/bookbag/bb-thumb.jpg',
		hero: '/assets/client-project/bookbag/bb-thumb-large.jpg',
		gallery: [
			'/assets/client-project/bookbag/bb-schools.webp',
			'/assets/client-project/bookbag/bb-brands.webp',
		],
		body: [
			"Bookbag is an advertising channel that funds primary schools. Trusted businesses reach school families through printed activity resources; schools earn a 60% share of every campaign — £1,800–3,600 a year in direct, no-strings funding — with zero data collected from students or families.",
			"Co-founded Bookbag and designed and built the marketing site and the web application end to end, with AI-assisted development and no development team. The product has three user roles: brands assemble campaigns, choose schools and customise creative in a self-serve builder; schools review, approve or decline anything before it is printed; and the Bookbag team runs the operational and approval layers connecting the two.",
			"A dedicated print-processing workflow hands approved assets straight to a professional print partner, who prints on FSC-certified, fully recyclable paper and delivers directly to schools. What starts as a brand's campaign in the app ends as a physical activity sheet in a child's bookbag, with no manual step in between.",
			"The result: money that would have gone to Meta or Google stays in the community, and schools get a funding channel they can trust.",
		],
		liveUrl: 'https://bookbagmedia.com',
		featured: true,
		era: 'ventures',
	},

	// --- Cernago era (2021 — ) -------------------------------------------
	{
		slug: 'osmond-ergonomics',
		client: 'Osmond Ergonomics',
		title: 'A new service launch',
		summary:
			'Brand positioning, audience strategy, website and video for a launch into new sectors with a new service offering.',
		role: 'Positioning / Design / Video',
		thumb: '/assets/client-project/osmond-ergonomics/oe-thumb.jpg',
		body: [
			"Osmond Ergonomics & Wellbeing needed to break into new sectors with a brand-new service offering. Clarified the positioning, defined the right audience and shaped a launch that delivered immediate traction and higher-quality conversations.",
			"Led brand positioning, audience strategy, website enhancement and video production. The growth and paid-media programme ran alongside from Cernago's other side.",
		],
		era: 'cernago',
	},
	{
		slug: 'lf3d',
		client: 'LF3D',
		title: 'A large-format 3D print capability launch',
		summary:
			'Positioning, messaging, competitor research and a high-conversion website for a pioneering print capability launch.',
		role: 'Positioning / Content / Web design & build',
		thumb: '/assets/client-project/lf3d/lf3d-thumb.jpg',
		body: [
			"LF3D had world-class equipment, strong partnerships and deep expertise. What they needed was clarity — clear positioning, a defined ideal customer and a repeatable way to turn interest into qualified conversations.",
			"Led positioning and messaging, competitor and best-in-class research, buyer-centered content, and a high-conversion website designed to surface a technical capability commercially — to the right buyers, in the right way, at the right moment.",
		],
		era: 'cernago',
	},
	{
		slug: 'solstice-robotics',
		client: 'Solstice Robotics',
		title: 'Service and utility robotics positioning',
		summary:
			'Positioning, buyer-centered content and a high-conversion website translating complex robotics into clear operational benefits.',
		role: 'Positioning / Content / Web design & build',
		thumb: '/assets/client-project/solstice-robotics/sr-thumb.jpg',
		body: [
			"Solstice Robotics wanted to promote cutting-edge service and utility robots and clearly demonstrate their value across multiple sectors.",
			"Sharpened positioning and translated complex robotics capability into clear, operational benefits buyers could quickly understand. Delivered alongside a high-conversion website designed to help end users and resellers explore use cases, build confidence, and move from pilot to deployment.",
		],
		era: 'cernago',
	},
	{
		slug: 'wholegood',
		client: 'Wholegood',
		title: 'A sales and marketing engine',
		summary:
			'Positioning, ideal-client-profile work and a website + campaign landing pages for a £20m business.',
		role: 'Positioning / Web design & build',
		thumb: '/assets/client-project/wholegood/wg-thumb.jpg',
		body: [
			"A £20m turnover business, Wholegood needed to turn brand momentum into a predictable source of opportunities.",
			"Led the ideal-client-profile and buyer-persona work, positioning and messaging, and the website and campaign landing pages. The outbound and paid programmes — data sourcing, direct mail, automated email outreach, Google Ads — ran alongside from Cernago's other side.",
		],
		era: 'cernago',
	},
	{
		slug: 'philips-pds',
		client: 'Philips PDS',
		title: 'High Bright LED launch campaign',
		summary:
			'Landing page design and build, motion graphics and audience research for a global product launch.',
		role: 'Design / Build / Motion',
		thumb: '/assets/client-project/philips-pds/phi-thumb.jpg',
		body: [
			"To celebrate the launch of the new Philips High Bright LED, produced a campaign to amplify the launch to a targeted audience of retailers and system integrators.",
			"Led landing-page design and front-end build, and produced the launch motion graphics. Customer research and audience insights shaped the creative direction. The lead-generation and nurture campaign ran alongside from Cernago's other side.",
		],
		era: 'cernago',
	},
	{
		slug: 'solstice-av',
		client: 'Solstice AV',
		title: 'Three-year retained web and creative',
		summary:
			'Web presence and marketing literature across a three-year retainer supporting the team\'s growth.',
		role: 'Design / Build / Creative direction',
		thumb: '/assets/client-project/solstice-av/sav-thumb.jpg',
		body: [
			"For three years, worked as part of the Solstice AV team — leading design, build and creative direction of Solstice's web presence and marketing literature.",
			"The retained campaign strategy, planning and execution — which supported the team's growth from £7.7m towards £20m — ran alongside from Cernago's other side.",
		],
		era: 'cernago',
	},
	{
		slug: 'golf-club-media',
		client: 'Golf Club Media',
		title: 'Business launch design support',
		summary:
			'Design and content contribution to the launch of a specialist media business.',
		role: 'Design / Content',
		thumb: '/assets/client-project/golf-club-media/gcm-thumb.jpg',
		body: [
			"When Golf Club Media first launched, they needed senior sales, marketing and design support across all areas of their business — from scratch, and fast.",
			"Contributed design and content to the launch. The sales, marketing and lead-generation programme ran alongside from Cernago's other side.",
		],
		era: 'cernago',
	},
	{
		slug: 'traeger',
		client: 'Traeger',
		title: 'Scottish market competition mechanic',
		summary:
			'Design and content for a competition mechanic driving product awareness in the Scottish market.',
		role: 'Design / Content',
		thumb: '/assets/client-project/traeger/tra-thumb.jpg',
		body: [
			"Traeger set a clear objective: create awareness of their product range and deliver qualified sales opportunities for their Scottish distribution partner.",
			"Led the design and content for the competition mechanic that anchored the campaign. The wider growth programme — media planning and buying, lead generation, marketing automation — sat with Cernago's other side.",
		],
		era: 'cernago',
	},

	// --- Redweb era (2006 – 2015) ----------------------------------------
	{
		slug: 'royal-society',
		client: 'The Royal Society',
		year: '2014',
		title: 'A digital experience for a prestigious scientific organisation',
		summary:
			"Visual rebrand paired with a complete overhaul of the site's information architecture and content.",
		role: 'Creative direction / UX / Visual design',
		thumb: '/assets/client-project/royal-society/rs-thumb.jpg',
		gallery: [
			'/assets/client-project/royal-society/rs-home.jpg',
			'/assets/client-project/royal-society/rs-devices.jpg',
			'/assets/client-project/royal-society/rs-topic-top.jpg',
			'/assets/client-project/royal-society/rs-topic-rd.jpg',
			'/assets/client-project/royal-society/rs-events-top.jpg',
			'/assets/client-project/royal-society/rs-event-item.jpg',
			'/assets/client-project/royal-society/rs-event-results.jpg',
		],
		body: [
			"The Royal Society web site redesign combined a visual rebrand with a complete overhaul of the existing site's information architecture and content.",
			"As Creative Director at Redweb, led the design that brought the client's identity up to date while delivering on their digital strategy. A new responsive visual system and content restructure made the Society's scholarship, events and research pathways navigable to a modern audience — while keeping the tone appropriate to a 350-year-old scientific institution.",
			"Worked with the Royal Society's in-house team to translate a comprehensive brand refresh into a working set of components, page templates and interaction patterns that the wider Redweb build team could deliver.",
		],
		liveUrl: 'https://royalsociety.org',
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
	{
		slug: 'stand-up-to-cancer',
		client: 'Stand Up To Cancer',
		year: '2014',
		title: 'A campaign homepage for Channel 4 and Cancer Research',
		summary:
			'Unconventional layout, eye-catching colour and photography for an attention-grabbing single-page design.',
		role: 'Visual design',
		thumb: '/assets/client-project/stand-up-to-cancer/sutc-thumb.jpg',
		body: [
			"Stand Up To Cancer is a groundbreaking initiative created to accelerate innovative cancer research and get new therapies to patients faster.",
			"Working with Redweb, submitted a visual design idea for the Stand Up To Cancer homepage that combined unconventional layout, eye-catching colour and photography to create an attention-grabbing single-page design — one that communicated the power and confidence of the Channel 4 / Cancer Research UK collaboration.",
		],
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
	{
		slug: 'department-for-education',
		client: 'Department for Education',
		year: '2013',
		title: 'Get Into Teaching — a recruitment tool',
		summary:
			'Responsive designs for a new site supporting people through the teacher training journey.',
		role: 'Responsive visual design',
		thumb: '/assets/client-project/department-for-education/dfe-thumb.jpg',
		body: [
			"Get Into Teaching is a Department for Education initiative that supports people at all stages of the teacher training journey. The DfE brief was a new site that both informed potential teachers what support was on offer, and gave them an online tool to manage their own journey into teaching.",
			"Working with Redweb, designed a set of responsive visuals that presented teaching as a challenge worth taking — speaking to the rewarding nature of inspiring and nurturing young minds.",
			"One of the client's primary objectives was to increase the ease with which users could complete the registration form. The original form was long and had many steps. The idea I pitched was to give users a more intuitive, more motivating experience — providing information in segments appropriate to their stage in the journey, with feedback on what they could expect to receive once they had provided each additional piece of information. Simple, to-the-point layout, vibrant imagery, and a bright, positive palette.",
		],
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
	{
		slug: 'digital-wave',
		client: 'Digital Wave',
		year: '2015',
		title: 'Brand identity for a digital conference',
		summary:
			"Brand and website design for Bournemouth's digital conference for young people.",
		role: 'Brand / Visual design',
		thumb: '/assets/client-project/digital-wave/dw-thumb.jpg',
		body: [
			"Brand and website design for Bournemouth's newest digital conference for young people.",
			"An opportunity to build a brand from the ground up. Extensive user testing with the target youth audience shaped a logo mark and typeface that felt cutting-edge yet approachable — the kind of identity that would look at home on a lanyard, a poster and a phone screen.",
		],
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
];

export const featuredProjects = projects.filter((p) => p.featured);
