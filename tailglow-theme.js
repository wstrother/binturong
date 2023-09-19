export const tailglow = {
    name: 'tailglow',
    properties: {
        "--theme-font-family-base":
            "Quicksand, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-family-heading":
            "Quicksand, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "4px",
        "--theme-rounded-container": "4px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "255 255 255",
        "--on-success": "255 255 255",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #3f5a4f 
        "--color-primary-50": "226 230 229", // #e2e6e5
        "--color-primary-100": "217 222 220", // #d9dedc
        "--color-primary-200": "207 214 211", // #cfd6d3
        "--color-primary-300": "178 189 185", // #b2bdb9
        "--color-primary-400": "121 140 132", // #798c84
        "--color-primary-500": "63 90 79", // #3f5a4f
        "--color-primary-600": "57 81 71", // #395147
        "--color-primary-700": "47 68 59", // #2f443b
        "--color-primary-800": "38 54 47", // #26362f
        "--color-primary-900": "31 44 39", // #1f2c27
        // secondary | #0cae2c 
        "--color-secondary-50": "219 243 223", // #dbf3df
        "--color-secondary-100": "206 239 213", // #ceefd5
        "--color-secondary-200": "194 235 202", // #c2ebca
        "--color-secondary-300": "158 223 171", // #9edfab
        "--color-secondary-400": "85 198 107", // #55c66b
        "--color-secondary-500": "12 174 44", // #0cae2c
        "--color-secondary-600": "11 157 40", // #0b9d28
        "--color-secondary-700": "9 131 33", // #098321
        "--color-secondary-800": "7 104 26", // #07681a
        "--color-secondary-900": "6 85 22", // #065516
        // tertiary | #6a4a55 
        "--color-tertiary-50": "233 228 230", // #e9e4e6
        "--color-tertiary-100": "225 219 221", // #e1dbdd
        "--color-tertiary-200": "218 210 213", // #dad2d5
        "--color-tertiary-300": "195 183 187", // #c3b7bb
        "--color-tertiary-400": "151 128 136", // #978088
        "--color-tertiary-500": "106 74 85", // #6a4a55
        "--color-tertiary-600": "95 67 77", // #5f434d
        "--color-tertiary-700": "80 56 64", // #503840
        "--color-tertiary-800": "64 44 51", // #402c33
        "--color-tertiary-900": "52 36 42", // #34242a
        // success | #521d87 
        "--color-success-50": "229 221 237", // #e5dded
        "--color-success-100": "220 210 231", // #dcd2e7
        "--color-success-200": "212 199 225", // #d4c7e1
        "--color-success-300": "186 165 207", // #baa5cf
        "--color-success-400": "134 97 171", // #8661ab
        "--color-success-500": "82 29 135", // #521d87
        "--color-success-600": "74 26 122", // #4a1a7a
        "--color-success-700": "62 22 101", // #3e1665
        "--color-success-800": "49 17 81", // #311151
        "--color-success-900": "40 14 66", // #280e42
        // warning | #ce3b91 
        "--color-warning-50": "248 226 239", // #f8e2ef
        "--color-warning-100": "245 216 233", // #f5d8e9
        "--color-warning-200": "243 206 228", // #f3cee4
        "--color-warning-300": "235 177 211", // #ebb1d3
        "--color-warning-400": "221 118 178", // #dd76b2
        "--color-warning-500": "206 59 145", // #ce3b91
        "--color-warning-600": "185 53 131", // #b93583
        "--color-warning-700": "155 44 109", // #9b2c6d
        "--color-warning-800": "124 35 87", // #7c2357
        "--color-warning-900": "101 29 71", // #651d47
        // error | #86b0bd 
        "--color-error-50": "237 243 245", // #edf3f5
        "--color-error-100": "231 239 242", // #e7eff2
        "--color-error-200": "225 235 239", // #e1ebef
        "--color-error-300": "207 223 229", // #cfdfe5
        "--color-error-400": "170 200 209", // #aac8d1
        "--color-error-500": "134 176 189", // #86b0bd
        "--color-error-600": "121 158 170", // #799eaa
        "--color-error-700": "101 132 142", // #65848e
        "--color-error-800": "80 106 113", // #506a71
        "--color-error-900": "66 86 93", // #42565d
        // surface | #2e302f 
        "--color-surface-50": "224 224 224", // #e0e0e0
        "--color-surface-100": "213 214 213", // #d5d6d5
        "--color-surface-200": "203 203 203", // #cbcbcb
        "--color-surface-300": "171 172 172", // #abacac
        "--color-surface-400": "109 110 109", // #6d6e6d
        "--color-surface-500": "46 48 47", // #2e302f
        "--color-surface-600": "41 43 42", // #292b2a
        "--color-surface-700": "35 36 35", // #232423
        "--color-surface-800": "28 29 28", // #1c1d1c
        "--color-surface-900": "23 24 23", // #171817
    }
}