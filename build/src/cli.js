"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cac_1 = __importDefault(require("cac"));
var package_json_1 = __importDefault(require("../package.json"));
var process_1 = __importDefault(require("process"));
var cli = cac_1.default(package_json_1.default.name)
    .version(package_json_1.default.version)
    .help();
exports.cli = cli;
cli.on('command:*', function () {
    console.error("Unknown sub command: " + cli.args[0]);
    process_1.default.exit(1);
});
