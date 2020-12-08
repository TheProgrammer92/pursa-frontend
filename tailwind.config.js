module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
      extend: {},
  
      screens: {
        
        'xs': '100px',
        'sm': '400px',
        // => @media (min-width: 640px) { ... }
        'md': '800px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      colors: {
 
        green : {
            light:  "rgb(16, 51, 31)",
            DEFAULT:  "rgb(16, 51, 31)",
            dark:  "rgb(16, 51, 31)",
          },
     
        
        
      }
  
  
  
    },
    variants: {},
    plugins: [],
  }
  