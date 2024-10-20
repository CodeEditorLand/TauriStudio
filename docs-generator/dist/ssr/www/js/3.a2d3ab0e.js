(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[3],
	{
		1499: function (n, e, t) {
			"use strict";
			t.r(e);
			var i = function () {
					var n = this,
						e = n.$createElement,
						t = n._self._c || e;
					return t(
						"div",
						[
							t("div", {
								staticStyle: { "padding-top": "40px" },
								attrs: { id: "padding" },
							}),
							t("q-markdown", {
								attrs: {
									src: n.markdown,
									toc: "",
									"no-line-numbers": "",
									"no-highlight": "",
								},
								on: { data: n.onToc },
							}),
						],
						1,
					);
				},
				a = [],
				o =
					'<div style="text-align:center">\n    <img src="/statics/images/bookCover.png" alt="Tauri - From Theory to Practice" title="Book Cover Mockup" style="max-width:80%">\n</div>\n\n## Get the Book\n::: info Tauri: From Theory to Practice\nArchitecting Next-Gen Native-Apps for all Platforms [v1:Rust Edition]\nAuthors: [Daniel Thompson-Yvetot, Lucas Fernandes Gonçalves Nogueira]\nPublisher: TBD\nRelease: late 2020\n:::\n\n### tl;dr;\nVisit https://opencollective.com/tauri and preorder your copy of the book today. Your donation will support the ongoing development of Tauri, and you will receive advance digital pdf\'s for your review as chapters are completed. The final book will ship concurrently with the release of 1.0.0 stable.\n\nIf you donate 10 USD / month to Tauri, you will get the advance PDF versions as soon as they are released. If you just want to donate once: 15 USD for pdf and e-book, 30 USD for print version and pdf, 40 USD for all three.\n\nAll tutorial subscription tiers receive the rolling PDF free of additional charge.\n\n### Introduction\nIn 2020, the manufacture of native-apps has become easier and more accessible than ever before. All the same, beginners and seasoned developers alike are confronted with tough choices in a rapidly changing landscape of security and privacy. This is especially true in the semi-trusted environment of user devices.\n\nTauri takes the guesswork out of the equation, as it was designed from the ground up to embrace new paradigms of secure development and creative flexibility that leverage the language features of Rust and lets you build an app using any frontend framework you like. Find out how you can design, build, audit and deploy tiny, fast, robust, and secure native applications for the major Desktop and Mobile platforms, all from the exact same codebase and in record time - without even needing to know the Rust programming language.\n\nAuthors Daniel and Lucas, the architects behind Tauri take you on a journey from theory to execution, during which you will learn why Tauri was built and how it works under the hood. Together with guest personalities that specialize in OpenSource, DevOps, Security and Enterprise Architecture, this book also presents discourse-formated philosophical discussions and open-source sustainability viewpoints from which your next-gen apps will profit - and your users will benefit.\n\nIn this book you will follow the authors in the iterative evolution of a real project from conception to distribution - all with commentary, complete code resources, built, and packaged Native Apps for reference and staged Capture the Flag (CTF) challenges that progress in difficulty as your comprehension of the system grows.\n\n### About the Topic\nTauri is a brand new way to make cross-platform native-apps for web, desktop and mobile. At this very moment, the pre-alpha version of this MIT licensed community-based software is being prepared for public release: https://github.com/tauri-apps/tauri\n\nTauri introduces novel methods for Webview integration and innovative patterns for robust threat evasion. The 1.0 release will ship with a multipurpose white-box analyzer and decompiler for any kind of binary and an integrated CLI for ingesting any type of html; which, when combined, provides developers and security teams with a holistic platform that has never existed as a single unit before.\n\nTauri bridges communities and opens up new opportunities for everyone from the front end developer all the way to the low-level security and network administrators. Due to this level of complexity and robustness, it is important to publish a reference guide that will necessarily be updated as major versions are released.\n\n### What you will learn\nBy the end of this book you will understand:\n- The method and reasoning behind the design of Tauri\n- The options you have when building with Tauri\n- That having a moral compass is possible in software development\n- Why the Rust language makes the most sense as a binding and application layer\n- Why Electron, Cordova, React Native, Capacitor and others are no longer the best choice\n- Why a binary review is important\n\nAnd you will be able to:\n- Transform a simple website project into a Tauri Native-App\n- Make a variety of Tauri Application Types based on the main Patterns\n- Decompile and analyze your App for Security Issues\n- Publish your App to a variety of App Stores\n- Read and write Rust code\n\n### Stuff you\'ll get if you preorder\n- Access to a real demo App built for all platforms available at respective stores (that includes CTF Flags).\n- Exclusive One-Pager cheat sheets made available for each section of the book, including the Appendices.\n- Early access to videos / webcasts.\n- Discounted participation in the “Capture the Flag” event hosted at the launch of the book.\n\n## Outline\nThis is an early outline of the contents that we expect to publish. Contents subject to change.\n\n### Chapter 1 - Theory\n(ca. 50 pages - mostly conversational / technical, graphics)\n```\n 1. Security Starts with You\n 2. Privacy Ends with ${you}\n 3. Languages, Dialects and Patterns\n 4. Toolchains and Syntactic Sugar\n 5. Production Methodologies\n 6. Enterprise Readiness\n 7. Message Queueing\n 8. Embracing Chaos\n 9. Distribution Techniques\n10. Licensing Strategies\n```\n\n### Chapter 2 - Practice\n(ca. 130 pages w/ charts, screenshots, code samples)\n\n```\n 1. Environment Prerequisites\n    - Node, Npm, Yarn, Rustc, Rustup, Buildtools\n 2. Development Platform Details\n        - MacOS\n        - Windows\n        - Linux\n        - Docker\n        - Virtual Machines\n        - CI / CD\n 3. Tauri Introduction\n 4. Tauri Anatomy\n 5. Tauri Configuration\n    - Files & Folders\n    - Icons\n    - Splash Screens\n    - Window\n    - `src-tauri/tauri.conf.json`\n 6. Preparing your code\n    - Transpile dynamic imports\n    - Remove webpack chunking\n    - Monolithic Files\n    - Minification strategies\n 7. Tauri API\n    - Design Considerations\n    - API Usage Patterns\n    - Custom API Functions\n    - Endpoints\n        - All\n        - Answer\n        - Bridge\n        - Event\n        - Execute\n        - List Files\n        - Open\n        - Read Binary File\n        - Read Text File\n        - Set Title\n        - Window\n        - Write File\n 8. Web APIs\n 9. Tauri App Extensions\n    - Anatomy\n    - Flow\n    - Registration\n    - Publication\n    - API\n10. Taskbar Integration (Desktop Only)\n    - Anatomy\n    - Integrations\n        - MacOS\n        - Windows\n        - Linux\n11. Security Features\n    - Baseline Rust Features\n    - Functional Address Space Layout Randomization (fASLR)\n    - Ahead of Time (AoT) Compilation\n    - Content Security Policy (CSP)\n    - One Time Pads (OTP)\n    - Embedded Server: False\n    - API Tree-Shaking\n    - Matryoschkasumming (with Tauri-Frida)\n12. Bridges and Brokers\n    - Bridge Patterns\n    - Message hashing with OTP\n    - Plugin Pattern\n    - Kamikaze Function Injection (KFI) Closures\n13. Testing\n    - Unit Testing\n        - Rust\n        - JS\n    - Integration Testing\n    - e2e Testing\n14. Building\n    - Debugging\n    - Packaging\n    - Minification\n    - Distribution Platform Details\n        - MacOS (.app / .dmg)\n        - Win (.exe / .msi)\n        - Linux Arm64 (.appImage / .deb)\n        - Linux x64 (.appImage / .deb)\n        - iOS (.ipa)\n        - Android (.apk)\n        - PWA Website (with wasm)\n    - Code Signing\n        - Keystores\n        - Certs\n        - Fingerprints\n    - Providing License for End Users\n        - Providers\n        - Keys Files\n    - Self-Updater\n        - Anatomy\n        - Service Provisioning\n            - Github\n            - AWS\n            - Homegrown\n    - Cross-Platform Bundler\n15. Tauri-Frida Harness\n    - Introduction to Reverse Engineering\n    - Toolchain\n    - Usage\n    - Binary Hooking at Runtime\n    - Pointer Evaluation\n    - Spraying, Fuzzing, Spoofing\n    - Report Generation\n    - Recompilation\n    - Post-Binary Analysis\n16. Distribution\n    - Git\n    - Mac Store\n    - iOS Store\n    - Play store\n    - Windows Store\n    - Snap Store\n    - PureOS Store\n    - .deb channels\n    - .tar.gz\n    - homebrew\n    - Fdroid\n    - Cydia\n    - ChromeOS\n    - WASM\n```\n\n###  Chapter 3 - Philosophical Discourses\n(ca. 40 pages of essays, some graphics)\n```\n1.  Rights and Responsibilities (with Robin van Boven (SFOSC))\n    - Who You are Responsible To\n    - Being a Vendor Comes with Duties\n    - Ubiquitous Resources are Still Precious\n    - Use Policy to Address Responsibilities\n    - Take a Hippocratic Development Oath\n2.  Take a More Secure Stance (with Liran Tal (SNYK))\n    - Security Benefits of Frameworks\n    - Encrypt All the Things, All the Time\n    - Constantly Audit Project Dependencies\n    - Harden Yourself, Your Organization and Your Ecosystem\n    - “Do What You Can Until You Run Out of Time.” - [ROBERT C. SEACORD]\n3.  Production Strategies for Sustainability (with Rhys Parry (Independent))\n    - Develop in the “Perfect” Environment\n    - Minimal Impact for Existing Enterprise Architectures\n    - Use Low-Barrier Tools for Ensuring Wholestack Security\n    - Test the Right Things Intelligently\n    - Post-Binary Analysis and Redistribution - The Last Mile\n```\n\n###  Chapter 4 - Execution\n(ca. 100 pages w/ code examples, screenshots, graphics)\n```\n1.  Base Pattern Evolution\n    - Hermit\n    - Bridge\n    - Cloudish\n    - Cloudbridge\n    - Kamikaze\n    - Multiwin\n    - GLUI\n2.  Advanced Patterns\n    - Cryptographic Enclave\n    - Identity Management\n    - Combine an App with a Daemon\n    - IPC / RPC\n    - Integrate with DENO\n3.  UI Source Complilation\n    - React\n    - Vue\n    - Angular\n    - Svelte\n    - Gatsby\n4.  Building a Real App\n    - Multiparty Password Manager\n        - Design\n        - Prototyping\n        - Testing\n        - Debugging\n        - Packaging\n        - Checksumming\n5.  Tauri-Frida\n    - White Box Reversing\n        - Analyzing with Frida\n        - Chaos Experiments\n            - Interface Jacking\n            - Disk Change\n            - Latency\n            - Process Kill\n            - CPU Throttle\n        - Static Analysis Reporting\n    -  Binary Repackaging\n        - Inject License Keys\n        - Clear Dead Codepoints\n        - Recalculate Integrated Checksum\n6.  Publishing the App\n    - Git\n    - Mac Store\n    - iOS Store\n    - Play store\n    - Windows Store\n    - Snap Store\n    - PureOS Store\n    - .deb channels\n    - .tar.gz\n    - homebrew\n    - Fdroid\n    - Cydia\n    - ChromeOS\n    - WASM\n7.  Publishing an Update\n```\n\n###  Chapter 5 - Appendices\n(ca. 120 pages)\n```\n 1. Configuration Options\n 2. Files and Repositories\n 3. Tauri CLI references\n 4. Tauri API references\n 5. ES6 References\n 6. Rust References\n 7. App Pattern Charts\n 8. Tauri-Frida Reference\n 9. Glossary\n10. Index\n```\n\n## Errata\nGot something that you think should be in the book? Want to be our publisher? Reach out to us and let us know!\n',
				r = {
					name: "PageIndex",
					data: function () {
						return { markdown: o };
					},
					computed: {
						toc: {
							get: function () {
								return this.$store.state.common.toc;
							},
							set: function (n) {
								this.$store.commit("common/toc", n);
							},
						},
					},
					methods: {
						onToc: function (n) {
							this.toc = n;
						},
					},
				},
				s = r,
				l = (t("f510"), t("2877")),
				u = Object(l["a"])(s, i, a, !1, null, null, null);
			e["default"] = u.exports;
		},
		"67de": function (n, e, t) {},
		f510: function (n, e, t) {
			"use strict";
			var i = t("67de"),
				a = t.n(i);
			a.a;
		},
	},
]);
