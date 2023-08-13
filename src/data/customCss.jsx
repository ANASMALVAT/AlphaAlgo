export const customStyles = {
  singleValue:(styles) => ({
    ...styles,
    color:'#fff',
    borderOpacity: "1",
    border: "1 px solid rgb(59 130 246)",
    overflow: 'hidden',
    textAlign: 'start',



  }),
    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "14rem",
      minWidth: "12rem",
      borderRadius: "3px",
      fontSize: "1rem",
      lineHeight: "1.75rem",
      background:"transparent",
      cursor: "pointer",
      className: "basic-single",
      minWidth:'175px',
      maxWidth:'215px',
      width:'200px',

      overflow: 'hidden',
      ":hover": {
        order: "2px solid #000000",
        boxShadow: "none",
      },
    borderOpacity: "1",
    border: "1 px solid rgb(59 130 246)",
    boxShadow: "4px 4px 0px 0px rgba(255,255,255);",

    }),
    option: (styles) => {
      return {
        ...styles,
        color:'black',
        fontSize: "0.8rem",
        lineHeight: "1.5rem",
        width: "100%",
        fontweight: "bold",
        background:"white",
        opacity: "1",
        ":hover": {
        cursor: "pointer",
        transition: "0.2s",
        color: "#3B82F6",
        fontSize: "1rem",

        },
        boxShadow: "5px 5px 0px 0px rgba(255,255,255);",
        textAlign: "left",
        overflow:"hidden",
        whiteSpace: "nowrap"


      };
    },
    menu: (styles) => {
      return {
        ...styles,
        
        maxWidth: "12rem",
        borderRadius: "10px",
        background:"transparent",
        boxShadow: "5px 5px 0px 0px rgba(255,255,255);",
        zIndex:"100",
        overflow:"hidden"


    };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#fff",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
      };
    },
  };
  