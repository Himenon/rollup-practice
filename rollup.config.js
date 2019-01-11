import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
export default {
    input: "./src/index.ts",
    plugins: [typescript({ module: "CommonJS" }), commonjs({ extensions: [".js", ".ts"] })],
};
