module.exports = {
    "extends": ["standard", "plugin:react/recommended"],
    "plugins": [
        "standard",
        "promise",
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "camelcase": ["error", {"properties": "never"}],
        "space-before-function-paren": ["error", "never"],
        "one-var": "off",
        "react/prop-types": "off"
    }
};
