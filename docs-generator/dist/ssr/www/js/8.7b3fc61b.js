(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[8],
	{
		cc1d: function (n, e, t) {
			"use strict";
			t.r(e);
			var o = function () {
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
								attrs: { src: n.markdown, toc: "" },
								on: { data: n.onToc },
							}),
						],
						1,
					);
				},
				a = [],
				i =
					'## Sustainability\nOne of the main goals of the organizational structure of Tauri is to guarantee the sustainability of Tauri and the health and well-being of its contributors. The world of Open Source is fraught with peril and discord, and we have taken measures to ensure the longevity of Tauri. This document explains how we go about doing so.\n\n### Organizational Structure\nTauri apps is governed by the community and work is done in the context of public working groups. Each working group has a dedicated channel on the Discord server as well as a Team on GitHub. Other than that, each WG is free to use whatever type of organizational model it chooses.\n\n The current working groups are:\n- WG Governance & Guidance\n- WG Tech\n- WG Education\n- WG Media\n- WG Security\n- WG Devops\n\nWith the exception of the security working group, which is by invite only and convenes privately, all other working groups are public and open to any and all participants.\n\nPlease visit [this repository](https://github.com/tauri-apps/governance-and-guidance) to get more information.\n\n### Code of Conduct\nEveryone participating in the Tauri commnunity is expected to follow a code of conduct that you can at the [Governance and Guidance:Code of Conduct](https://github.com/tauri-apps/governance-and-guidance/blob/master/CODE_OF_CONDUCT.md).\n\n### Social Contract\nWe have a Social Contract that informs our decision making and organization. You can read about it here: [Governance and Guidance:Social Contract](https://github.com/tauri-apps/governance-and-guidance/blob/master/SOCIAL_CONTRACT.md).\n\n### Licensing\nWe, the contributors to Tauri Apps, use the MIT and Apache licenses for all code content. Images and bodies of text, unless otherwise noted are CC-BY-ND-NC.\n\n### Trademark\nIt is a permissible use of the name "Tauri App" or the Tauri logo to show that a project uses Tauri. "Tauri Studio" is reserved for use by the organization.\n\nAny language that gives the impression that the Tauri organization approves, authorizes or otherwise supports a project, person or company is not permissible without written authorization from the Guidance and Governance Working Group.\n',
				r = {
					name: "Governance",
					data: function () {
						return { markdown: i };
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
				c = t("2877"),
				u = Object(c["a"])(s, o, a, !1, null, null, null);
			e["default"] = u.exports;
		},
	},
]);
