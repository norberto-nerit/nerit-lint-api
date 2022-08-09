module.exports = {
    root: true,
    parserOptions: {
        project: '../../tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-import-helpers'
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    rules: {

        '@typescript-eslint/naming-convention': [
            'error',

            // propriedade

            /**
             * Propriedades PUBLIC com modificador OMITIDO:
             *
             * ?? :??
             * ?? :(string|number|function)
             * ?? :array
             * ?? :boolean
             */

            {   // ?? :??
                selector: 'property',
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // ?? :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // ?? :array
                selector: 'property',
                types: ['array'],
                format: ['camelCase'],
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
                },
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // ?? :boolean
                selector: 'property',
                types: ['boolean'],
                format: ['camelCase'],
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|force)"
                },
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            /**
             * Propriedades PUBLIC READONLY com modificador OMITIDO:
             *
             * ?? readonly :??
             * ?? readonly :(string|number|function)
             * ?? readonly :array
             * ?? readonly :boolean
             */

            {   // ?? readonly :??
                selector: 'property',
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // ?? readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // ?? readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // ?? readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PUBLIC static com modificador OMITIDO:
             *
             * ?? static :??
             * ?? static :(string|number|function)
             * ?? static :array
             * ?? static :boolean
             */

            {   // ?? static :??
                selector: 'property',
                modifiers: ['static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // ?? static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // ?? static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // ?? static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PUBLIC static READONLY com modificador OMITIDO:
             *
             * ?? static readonly :??
             * ?? static readonly :(string|number|function)
             * ?? static readonly :array
             * ?? static readonly :boolean
             */

            {   // ?? static readonly :??
                selector: 'property',
                modifiers: ['static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // ?? static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // ?? static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // ?? static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PUBLIC com modificador EXPLICITO:
             *
             * public :??
             * public :(string|number|function)
             * public :array
             * public :boolean
             */

            {   // public :??
                selector: 'property',
                modifiers: ['public'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // public :(string|number|function)
                selector: 'property',
                modifiers: ['public'],
                types: ['string', 'number', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // public :array
                selector: 'property',
                modifiers: ['public'],
                types: ['array'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
                }
            },
            {   // public :boolean
                selector: 'property',
                modifiers: ['public'],
                types: ['boolean'],
                format: ['camelCase'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force)"
                }
            },

            /**
             * Propriedades PUBLIC READONLY com modificador EXPLICITO:
             *
             * public readonly :??
             * public readonly :(string|number|function)
             * public readonly :array
             * public readonly :boolean
             */

            {   // public readonly :??
                selector: 'property',
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // public readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // public readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // public readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PUBLIC static com modificador EXPLICITO:
             *
             * public static :??
             * public static :(string|number|function)
             * public static :array
             * public static :boolean
             */

            {   // public static :??
                selector: 'property',
                modifiers: ['public', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // public static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // public static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // public static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PUBLIC static READONLY com modificador EXPLICITO:
             *
             * public static readonly :??
             * public static readonly :(string|number|function)
             * public static readonly :array
             * public static readonly :boolean
             */

            {   // public static readonly :??
                selector: 'property',
                modifiers: ['public', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },

            {   // public static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['public', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
            },
            {   // public static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['public', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // public static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['public', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'forbid',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PROTECTED:
             *
             * protected :??
             * protected :(string|number|function)
             * protected :array
             * protected :boolean
             */

            {   // protected :??
                selector: 'property',
                modifiers: ['protected'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // protected :(string|number|function)
                selector: 'property',
                modifiers: ['protected'],
                types: ['string', 'number', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // protected :array
                selector: 'property',
                modifiers: ['protected'],
                types: ['array'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
                }
            },
            {   // protected :boolean
                selector: 'property',
                modifiers: ['protected'],
                types: ['boolean'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force)"
                }
            },

            /**
             * Propriedades PROTECTED readonly:
             *
             * protected readonly :??
             * protected readonly :(string|number|function)
             * protected readonly :array
             * protected readonly :boolean
             */

            {   // protected readonly :??
                selector: 'property',
                modifiers: ['protected', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // protected readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // protected readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // protected readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PROTECTED static:
             *
             * protected static :??
             * protected static :(string|number|function)
             * protected static :array
             * protected static :boolean
             */

            {   // protected static :??
                selector: 'property',
                modifiers: ['protected', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // protected static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // protected static array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // protected static boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PROTECTED static READONLY:
             *
             * protected static readonly :??
             * protected static readonly :(string|number|function)
             * protected static readonly :array
             * protected static readonly :boolean
             */

            {   // protected static readonly :??
                selector: 'property',
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // protected static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // protected static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // protected static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['protected', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PRIVATE:
             *
             * private :??
             * private :(string|number|function)
             * private :array
             * private :boolean
             */

            {   // private :??
                selector: 'property',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // private :(string|number|function)
                selector: 'property',
                modifiers: ['private'],
                types: ['string', 'number', 'function'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // private :array
                selector: 'property',
                modifiers: ['private'],
                types: ['array'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))$"
                }
            },
            {   // private :boolean
                selector: 'property',
                modifiers: ['private'],
                types: ['boolean'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force)"
                }
            },

            /**
             * Propriedades PRIVATE readonly:
             *
             * private readonly :??
             * private readonly :(string|number|function)
             * private readonly :array
             * private readonly :boolean
             */

            {   // private readonly :??
                selector: 'property',
                modifiers: ['private', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // private readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // private readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // private readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PRIVATE static:
             *
             * private static :??
             * private static :(string|number|function)
             * private static :array
             * private static :boolean
             */

            {   // private static :??
                selector: 'property',
                modifiers: ['private', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // private static :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // private static :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // private static :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'static'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

            /**
             * Propriedades PRIVATE static READONLY:
             *
             * private static readonly :??
             * private static readonly :(string|number|function)
             * private static readonly :array
             * private static readonly :boolean
             */

            {   // private static readonly :??
                selector: 'property',
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },

            {   // private static readonly :(string|number|function)
                selector: 'property',
                types: ['string', 'number', 'function'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
            },
            {   // private static readonly :array
                selector: 'property',
                types: ['array'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(list|array|([a-z\\d]+([A-Z][a-z\\d]+)*(s|Array|List)))|(LIST|ARRAY|([A-Z\\d]+(_[A-Z\\d]+)*(S|_ARRAY|_LIST)))$"
                }
            },
            {   // private static readonly :boolean
                selector: 'property',
                types: ['boolean'],
                modifiers: ['private', 'static', 'readonly'],
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'require',
                trailingUnderscore: 'forbid',
                custom: {
                    match: true,
                    regex: "^(is|are|should|must|can|have|has|did|dont|will|enable|require|force|IS|ENABLE|REQUIRE|FORCE|DONT)"
                }
            },

        ],

        '@typescript-eslint/ban-types': ['error', {
            extendDefaults: false,
            types: {
                String: {
                    message: 'Use string instead',
                    fixWith: 'string',
                },
                Boolean: {
                    message: 'Use boolean instead',
                    fixWith: 'boolean',
                },
                Number: {
                    message: 'Use number instead',
                    fixWith: 'number',
                },
                Symbol: {
                    message: 'Use symbol instead',
                    fixWith: 'symbol',
                },
                // object typing
                Object: {
                    message: 'Avoid using this as it doesn\'t really mean anything. Some meaningful better options: "AnyObjTP", "unknown", etc.',
                    fixWith: '{}',
                },
                '{}': {
                    message: 'Avoid using this as it doesn\'t really mean anything. Some meaningful better options: "AnyObjTP", "unknown", etc.',
                    fixWith: '{}',
                },
                object: {
                    fixWith: '{}',
                    message: [
                        'The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)).',
                        'Some meaningful better options: "AnyObjectTP", "unknown", etc.',
                    ].join('\n'),
                },
            }
        }],

        //não permitir variáveis ​​não utilizadas
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false
            }
        ],

        // TODO: Reabilitar essas regras & fazer elas funcinarem direito        
        '@getify/proper-arrows/where': 'off',

        // TODO: Artualizar valor no pacote com configuracoes padrao da empresa
        //'@typescript-eslint/unbound-method': ['warn', { ignoreStatic: true }],
        '@getify/proper-arrows/where': 'off',

        //não permitir espaços mistos e tabulações para recuo
        'no-mixed-spaces-and-tabs': 'off',

        'unicorn/no-fn-reference-in-iterator': 'off',

        //exigir ou não permitir ponto e vírgula em vez de ASI
        'semi': ['error', 'never'],

        //requerem declarações `const` para variáveis ​​que nunca são reatribuídas após serem declaradas
        'prefer-const': 'error',

        //não permitir importações de módulos duplicados
        'no-duplicate-imports': 'error',

        // Organiza os imports em grupos para facilitar leitura.
        'import-helpers/order-imports': [
            'error',
            {
                'newlinesBetween': 'always',
                'groups': [
                    '/^type/',
                    'module',
                    '/^@common/',
                    ['parent', 'sibling', 'index']
                ],
                'alphabetize': { 'order': 'asc', 'ignoreCase': true }
            }
        ],

        //obriga o uso de aspas simples
        'quotes': [
            'error',
            'single'
        ],

        //obriga espaco depois da virgula.
        'comma-spacing': ['error', { 'before': false, 'after': true }],

        //Requer ou não permite um espaço antes de parênteses de função
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }],

        // Obrigado tres iguais
        'eqeqeq': ['error', 'always'],

        // Permite apenas console info 
        'no-console': ['warn', { 'allow': ['info'] }],

        // Nao permite usar variavel Any
        '@typescript-eslint/no-explicit-any': 'error',

        // Nao permite espacos seguidos.
        'no-trailing-spaces': ['error', { 'ignoreComments': true }],

        //Não permite returnantes else
        'no-else-return': 'error',

        //Não permite a sintaxe de espaço reservado literal de modelo em strings regulares.
        'no-template-curly-in-string': 'error',

        //impor um estilo específico para comentários de várias linhas
        'multiline-comment-style': ['error', 'starred-block'],

        //Impõe um recuo consistente
        'indent': 'error'
    }
}
