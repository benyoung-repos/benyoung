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
	hidden?: boolean;
	era: 'ventures' | 'cernago' | 'redweb';
	workingWith?: string;
};

export const projects: Project[] = [
	// --- Own ventures ----------------------------------------------------
	{
		slug: 'bookbag',
		client: 'Bookbag',
		title: 'An advertising marketplace funding UK primary schools',
		summary:
			'Co-founded venture. A three-role marketplace with a physical print-and-deliver pipeline putting direct funding into UK primary schools.',
		role: 'Co-founder / Product design / Full-stack build / Print pipeline',
		thumb: '/assets/client-project/bookbag/bb-thumb.jpg',
		hero: '/assets/client-project/bookbag/bb-thumb-large.jpg',
		gallery: [
			'/assets/client-project/bookbag/bb-gal1.jpg',
			'/assets/client-project/bookbag/bb-gal2.jpg',
			'/assets/client-project/bookbag/bb-gal3.jpg',
		],
		body: [
			// Product context + design problem
			"Bookbag is a marketplace for a physical advertising channel. Brands pay to run educational activity campaigns for UK primary school families: wordsearches, colouring sheets and scavenger hunts that schools review and approve, that are then printed and delivered by post to arrive in pupils' bookbags. Schools earn 60% of every campaign in direct funding, and no data on individual children is ever collected. The idea came from my Cernago co-founder, Adrian; I joined as co-founder to build it out with him, designing and developing the product and the platform behind it.",

			// Design problem
			"Three very different user types (brand, school and Bookbag team), each with their own purpose-built interface, a strict approval flow between them, and a physical fulfilment pipeline behind them.",

			// What shipped
			"I designed and built the whole thing: a marketing site, the signed-in web app for all three user types, a brand campaign-creation wizard, the school review-and-approve flow, an activity-sheet engine that generated the wordsearches, colouring pages and scavenger hunts, an operational back-office for the Bookbag team, and a print pipeline that handed press-ready artwork straight to the professional print partner. Payments sat in escrow until schools confirmed the campaign had been delivered.",

			// AI-assisted build
			"No development team. I coded the platform myself, working with AI in the loop, which compressed what would normally be a multi-quarter engineering programme into single-founder cycles. The design work itself was unchanged: the decisions still needed designer judgement, pattern-thinking and craft. What changed was the distance from a sketch to shipped code, which came down from weeks to hours.",

			// Testing / security programme
			"Testing was taken just as seriously as the build. Every release was checked against an internal adversarial security programme covering data isolation between brands and schools, the payment state machine, file uploads, invite tokens, authentication and audit-log integrity: the full set of things a bad actor would try, worked through internally so that any external penetration test would find what we'd missed rather than what we already knew about.",

			// Outcome / positioning
			"Live product. Schools that take on 10–20 campaigns a year earn £1,800–3,600 in direct, no-strings funding. Brands reach families through a school-endorsed channel with no third-party tracking and no data collected from children. Money that would have gone to Meta or Google stays in local communities.",
		],
		liveUrl: 'https://bookbagmedia.com',
		featured: true,
		era: 'ventures',
	},

	// --- Cernago era (2021 — ) -------------------------------------------
	{
		slug: 'osmond-ergonomics',
		client: 'Osmond Ergonomics',
		title: 'Repositioning a workplace-wellbeing specialist to reach more of its ideal clients',
		summary:
			"Repositioning, ideal-client work and a full website redesign for a workplace-wellbeing specialist. A launch campaign for the Accelerated Outcome Process, Osmond's commercial alternative to the government's Access to Work scheme, ran as a sub-project.",
		role: 'Positioning / Design / Video',
		thumb: '/assets/client-project/osmond-ergonomics/oe-thumb.jpg',
		hero: '/assets/client-project/osmond-ergonomics/osmond-hero.jpg',
		gallery: [
			'/assets/client-project/osmond-ergonomics/osmond-gal1.jpg',
			'/assets/client-project/osmond-ergonomics/osmond-gal2.jpg',
			'/assets/client-project/osmond-ergonomics/osmond-gal3.jpg',
		],
		body: [
			"Osmond Ergonomics & Wellbeing had built a strong specialist reputation but were reaching a narrower slice of their potential market than the business could support. The engagement set out to reposition Osmond for the next stage of growth: sharpening who the ideal client was, how the offer was described, and how the whole brand met the world online.",
			"Working within Cernago, I led a full redesign of the Osmond Ergonomics website. The existing site had served the business well but had grown up around the older product ranges. The redesign restructured the content around the customer, brought the brand's visual system up to date and gave the newly-shaped service line-up a proper home on the site rather than a bolt-on. I led the design end-to-end; an external partner delivered the build.",
			"A sub-project within the wider engagement was the launch of the Accelerated Outcome Process, Osmond's commercial alternative to the government's Access to Work scheme. Where the government route can leave people waiting many months for the workplace adjustments they need, Osmond's offer brought the same journey down to weeks. I led the brand positioning, audience strategy, campaign messaging and the launch video that anchored the creative. Cernago's growth team ran a supporting paid-media and outreach programme alongside it, including a cold-email campaign that opened conversations directly with the people the new service was built for.",
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
			"LF3D had world-class equipment, strong partnerships and deep expertise. What they needed was clarity: clear positioning, a defined ideal customer and a repeatable way to turn interest into qualified conversations.",
			"Working within Cernago, I led the positioning and messaging, the competitor and best-in-class research, the buyer-centred content, and a high-conversion website designed to surface a technical capability commercially: to the right buyers, in the right way, at the right moment.",
		],
		era: 'cernago',
	},
	{
		slug: 'solstice-robotics',
		client: 'Solstice Robotics',
		title: 'A dedicated home for a bold new robotics proposition',
		summary:
			'A new venture for a long-standing client. A purpose-built website showcasing a broad range of service and utility robots across sectors and use cases.',
		role: 'Positioning / Content / Web design & build',
		thumb: '/assets/client-project/solstice-robotics/sr-thumb.jpg',
		body: [
			"Solstice AV, a long-standing Cernago client, were stepping into new territory: bringing cutting-edge service and utility robotics to the UK market. It was an exciting new proposition for the brand that deserved its own home, its own voice and its own way of showing what the technology could actually do in the field.",
			"Working within Cernago, I designed and built a dedicated Solstice Robotics website that brought the capability to life in a way it hadn't been shown before for Solstice: a broad range of robots framed across the sectors and use cases they were built for, with content that translated the technology into clear operational benefits for end users and resellers alike, and a high-conversion structure designed to move buyers from curiosity to pilot to deployment.",
		],
		era: 'cernago',
	},
	{
		slug: 'wholegood',
		client: 'Wholegood',
		title: 'A sales and marketing engine for one of the UK\'s leading organic wholesalers',
		summary:
			'A refreshed brand delivered on the web, a rebuilt online store and new functionality for a £20m organic, biodynamic and sustainable-produce business.',
		role: 'Positioning / Web design & build',
		thumb: '/assets/client-project/wholegood/wg-thumb.jpg',
		body: [
			"Wholegood are one of the UK\'s leading wholesalers of organic, biodynamic and sustainably-produced food. A £20m business with a clear purpose: better food for people, better outcomes for the planet, and a better deal for the growers behind it. They needed to turn strong brand momentum into a predictable source of new opportunities.",
			"Working within Cernago, I led the ideal-client-profile and buyer-persona work, the positioning and messaging, and the delivery of the refreshed brand on the web, alongside a rebuilt online store and new functionality introduced into the existing site. Campaign landing pages sat alongside. Cernago's other side ran the outbound and paid programme: data sourcing, direct mail, automated email outreach and Google Ads.",
		],
		era: 'cernago',
	},
	{
		slug: 'philips-pds',
		client: 'PPDS',
		title: 'Launching Philips\' new High Bright LED range',
		summary:
			'Landing page, motion graphics and audience research for a global product launch aimed at retailers and system integrators.',
		role: 'Design / Build / Motion',
		thumb: '/assets/client-project/philips-pds/phi-thumb.jpg',
		body: [
			"PPDS were bringing a new range of Philips High Bright LED displays to market, and needed a launch campaign that would land with retailers and system integrators without disappearing into the noise of a saturated category.",
			"Working within Cernago, I led the landing-page design and front-end build, and produced the launch motion graphics that anchored the campaign creative. Customer research and audience insights shaped the direction from the start. Cernago's other side ran the lead-generation and nurture programme alongside it.",
		],
		era: 'cernago',
	},
	{
		slug: 'solstice-av',
		client: 'Solstice AV',
		title: 'A long-running partnership across the whole marketing spectrum',
		summary:
			'A multi-year retainer in partnership with Solstice AV, spanning brand, design, digital, campaigns, landing pages, AI-assisted content pipelines and PR.',
		role: 'Design / Build / Creative direction',
		thumb: '/assets/client-project/solstice-av/sav-thumb.jpg',
		body: [
			"A partnership that has now spanned many years. Cernago works with Solstice AV as an embedded marketing and design function, sitting alongside their marketing director and running huge swathes of the marketing spectrum: brand, graphic design, digital, campaigns, landing pages, AI-assisted content pipelines, PR support, and autonomously-run cold-email programmes.",
			"On the design and build side, I lead the direction and delivery of Solstice's web presence, campaign landing pages and marketing collateral. The remit stretches from long-form brochureware and technical sales tools through to fast-turnaround campaign assets.",
			"The work has supported the team's growth from £7.7m turnover towards £20m. Paid media is the one part of the mix that sits elsewhere.",
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
			"When Golf Club Media first launched, they needed senior sales, marketing and design support across every part of their business, from scratch and fast.",
			"Working within Cernago, I led the design and content contribution to the launch. Cernago's other side ran the sales, marketing and lead-generation programme alongside it.",
		],
		era: 'cernago',
	},
	{
		slug: 'traeger',
		client: 'Traeger',
		title: 'A Scottish launch campaign for a global grilling brand',
		summary:
			'Landing page and paid campaign for a competition mechanic bringing Traeger, one of the world\'s best-known wood-pellet grill brands, to the Scottish market.',
		role: 'Design / Content',
		thumb: '/assets/client-project/traeger/tra-thumb.jpg',
		body: [
			"Traeger, the pioneers of the wood-pellet grill and one of the biggest names in premium outdoor cooking, wanted to raise awareness of their range in Scotland and deliver qualified sales opportunities for their Scottish distribution partner.",
			"Working within Cernago, I led the design and content for the landing page and the competition mechanic that anchored the campaign. Cernago's other side ran the wider growth programme, covering media planning and buying, lead generation and marketing automation.",
		],
		era: 'cernago',
	},

	// --- Redweb era (2006 – 2015) ----------------------------------------
	{
		slug: 'royal-society',
		client: 'The Royal Society',
		year: '2014',
		title: 'A digital rebuild for the world\'s oldest scientific institution',
		summary:
			"Visual rebrand paired with a complete overhaul of the site's information architecture and content.",
		role: 'Creative direction / UX / Visual design',
		thumb: '/assets/client-project/royal-society/rs-thumb.jpg',
		gallery: [
			'/assets/client-project/royal-society/rs-gal1.jpg',
			'/assets/client-project/royal-society/rs-gal2.jpg',
			'/assets/client-project/royal-society/rs-gal3.jpg',
			'/assets/client-project/royal-society/rs-gal4.jpg',
			'/assets/client-project/royal-society/rs-gal5.jpg',
			'/assets/client-project/royal-society/rs-gal6.jpg',
			'/assets/client-project/royal-society/rs-gal7.jpg',
		],
		body: [
			"The Royal Society website redesign combined a visual rebrand with a complete overhaul of the existing site's information architecture and content.",
			"As Creative Director at Redweb, I led the design that brought the client's identity up to date while delivering on their digital strategy. A new responsive visual system and a full content restructure made the Society's scholarship, events and research pathways navigable to a modern audience, while keeping the tone appropriate to a 350-year-old scientific institution.",
			"I worked closely with the Royal Society's in-house team to translate a comprehensive brand refresh into a working set of components, page templates and interaction patterns that the wider Redweb build team could deliver.",
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
		title: 'A campaign homepage matching the boldness of the movement',
		summary:
			'Unconventional layout, eye-catching colour and photography for an attention-grabbing single-page design.',
		role: 'Visual design',
		thumb: '/assets/client-project/stand-up-to-cancer/sutc-thumb.jpg',
		body: [
			"Stand Up To Cancer is a groundbreaking initiative created to accelerate innovative cancer research and get new therapies to patients faster.",
			"When working with Redweb, I submitted a visual design idea for the Stand Up To Cancer homepage that combined unconventional layout, eye-catching colour and photography to create an attention-grabbing single-page design, one that communicated the power and confidence of the Channel 4 and Cancer Research UK collaboration.",
		],
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
	{
		slug: 'department-for-education',
		client: 'Department for Education',
		year: '2013',
		title: 'Rethinking how the DfE brings new teachers into the profession',
		summary:
			'Responsive designs for a new site supporting people through the teacher training journey.',
		role: 'Responsive visual design',
		thumb: '/assets/client-project/department-for-education/dfe-thumb.jpg',
		body: [
			"Get Into Teaching is a Department for Education initiative that supports people at all stages of the teacher training journey. The DfE brief was a new site that both informed potential teachers what support was on offer, and gave them an online tool to manage their own journey into teaching.",
			"When working with Redweb, I designed a set of responsive visuals that presented teaching as a challenge worth taking, speaking to the rewarding nature of inspiring and nurturing young minds.",
			"One of the client's primary objectives was to increase the ease with which users could complete the registration form. The original form was long and had many steps. The idea I pitched was to give users a more intuitive, more motivating experience: providing information in segments appropriate to their stage in the journey, with feedback on what they could expect to receive once they had provided each additional piece of information. Simple, to-the-point layout, vibrant imagery and a bright, positive palette.",
		],
		featured: true,
		hidden: true,
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
		thumb: '/assets/client-project/digital-wave/dw-hero.jpg',
		hero: '/assets/client-project/digital-wave/dw-hero.jpg',
		gallery: [
			'/assets/client-project/digital-wave/dw-gal1.jpg',
			'/assets/client-project/digital-wave/dw-gal2.jpg',
			'/assets/client-project/digital-wave/dw-gal3.jpg',
		],
		body: [
			"Brand and website design for Bournemouth's newest digital conference for young people.",
			"An opportunity to build a brand from the ground up. Extensive user testing with the target youth audience shaped a logo mark and typeface that felt cutting-edge yet approachable — the kind of identity that would look at home on a lanyard, a poster and a phone screen.",
		],
		featured: true,
		era: 'redweb',
		workingWith: 'Redweb Ltd',
	},
];

export const visibleProjects = projects.filter((p) => !p.hidden);
export const featuredProjects = visibleProjects.filter((p) => p.featured);
