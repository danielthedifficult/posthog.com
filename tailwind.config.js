module.exports = {
    mode: 'jit',
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './safelist.txt'],
        options: {
            safelist: [
                'justify-start',
                'h-full',
                'flex',
                'gap-y-4',
                '-mt-2',
                '-mt-4',
                '-ml-2',
                '-mr-2',
                '-mb-2',
                '-mt-4',
                '-mr-4',
                '-mr-8',
                '-mb-4',
                '-ml-4',
                '-mb-12',
                'mt-16',
                'mb-4',
                'pr-32',
                'rotate-45',
                'rotate-90',
                'rotate-180',
                'max-w-xl',
                'max-w-2xl',
                'max-w-3xl',
                'max-w-4xl',
                'max-w-5xl',
                'w-full',
                'w-2/12',
                'w-4/12',
                'w-56',
                'w-64',
                'w-72',
                'text-opacity-50',
                'text-opacity-100',
                'opacity-40',
                'opacity-60',
                'opacity-75',
                'opacity-100',
                'border-opacity-75',
                'border-opacity-100',
                'text-green',
            ],
        },
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fill: {
            current: 'currentColor',
            'almost-black': '#151515',
            white: 'white',
            blue: '#1D4AFF',
            yellow: '#F7A501',
            red: '#F54E00',
            green: '#6AA84F',
            primary: '#151515',
            'gray-accent': '#D0D1C9',
            'gray-accent-dark': '#2C2C2C',
            'gray-accent-dark-hover': '#3D3D3D',
            'gray-accent-light': '#E5E7E0',
            'gray-accent-light-hover': '#C5C6C2',
        },
        rotate: {
            '-31': '-31deg',
            45: '45deg',
            '-45': '-45deg',
            180: '180deg',
        },
        screens: {
            xs: '482px',
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            mdlg: '900px',
            // specifically for plans

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        scale: {
            '-1': '-1',
            75: '.75',
            100: '1',
        },
        flex: {
            1: '1',
            '1/3': '0 0 33%',
            '2/3': '0 0 66%',
            half: '0 0 49%',
            full: '0 0 100%',
        },
        backgroundColor: (theme) => ({
            white: '#fff',
            black: '#000',
            primary: '#151515',
            'primary-dark': '#EEEFE9',
            orange: '#EF7632',
            'deep-blue': '#160431',
            'royal-blue': '#232D69',
            yellow: '#F7A501',
            footer: '#08042f',
            pink: '#A970DC',
            transparent: 'transparent',
            'dark-yellow': '#DC9300',
            'light-yellow': '#F1A82C',
            'almost-black': '#151515',
            tan: '#EEEFE9',
            'gray-accent': '#D0D1C9',
            'gray-accent-dark': '#2C2C2C',
            'gray-accent-dark-hover': '#3D3D3D',
            'gray-accent-light': '#E5E7E0',
            'gray-accent-light-hover': '#C5C6C2',
            blue: '#1D4AFF',
            red: '#F54E00',
        }),
        extend: {
            fontFamily: {
                serif: ['MatterVF', 'Arial', 'Helvetica', 'sans-serif'],
                sans: [
                    'MatterVF',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'avenir next',
                    'avenir',
                    'segoe ui',
                    'helvetica neue',
                    'helvetica',
                    'Ubuntu',
                    'roboto',
                    'noto',
                    'arial',
                    'sans-serif',
                ],
                button: ['MatterVF', 'sans-serif'],
                nav: ['MatterVF', 'sans-serif'],
                code: ['Source Code Pro', 'Menlo', 'Consolas', 'monaco', 'monospace'],
            },
            fontSize: {
                '2xs': '0.65rem',
                base: '16px',
                'base-larger': '.933rem',
                'text-sm': '.8rem',
            },
            colors: {
                primary: '#151515',
                'primary-dark': '#EEEFE9',
                orange: '#EF7632',
                'deep-blue': '#160431',
                'royal-blue': '#232D69',
                yellow: '#F7A501',
                footer: '#08042f',
                pink: '#A970DC',
                'dark-yellow': '#DC9300',
                'light-yellow': '#F1A82C',
                'almost-black': '#151515',
                tan: '#EEEFE9',
                gray: '#8F8F8C',
                'gray-2': '#777',
                'gray-accent': '#E5E7E0',
                'gray-accent-dark': '#2C2C2C',
                'gray-accent-light': '#BFBFBC',
                red: '#F54E00',
                'dashed-line-dark': '#4b4b4b',
                'dashed-line-light': '#D0D1C9',
                blue: '#1D4AFF',
                green: '#6AA84F',
            },
            minHeight: {
                780: '780px',
            },
            borderColor: {
                'dashed-line-dark': '#4B4B4B',
                'dashed-line-light': '#D0D1C9',
            },
            borderRadius: {
                sm: '4px',
                lg: '20px',
            },
            borderWidth: {
                half: '.5px',
                1: '1px',
                3: '3px',
                8: '8px',
                12: '12px',
                16: '16px',
            },
            padding: {
                'fluid-video': '56.25%',
                '1/2': '50%',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
