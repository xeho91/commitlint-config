import { UserConfig } from "@commitlint/types";

const config: UserConfig = {
	// https://github.com/conventional-changelog/commitlint/
	extends: ["@commitlint/config-conventional"],

	rules: {
		"scope-case": [0],
	},

	defaultIgnores: true,

	helpUrl: "https://github.com/conventional-changelog/commitlint/#what-is-commitlint",
};

module.exports = config;
