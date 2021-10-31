module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": ["airbnb-base", "prettier"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "quotes": ["error", "single"],
        "no-console": "off",
        "max-len": ["warn", { "code": 80 }],
        "semi": "warn"
    }
};
