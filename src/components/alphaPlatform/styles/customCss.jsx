export const customStyles = {

    singleValue:(styles) => ({
      ...styles,
      color:'#fff',
      overflow: 'hidden',
      textAlign: 'start',
      border:"none",
      background:"transparent"
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
      border:"none",
    ":hover": {
        boxShadow: "none",
        border:"none"
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        color:'black',
        fontSize: "0.8rem",
        lineHeight: "1.5rem",
        width: "100%",
        fontweight: "bold",
        opacity: "1",
        textAlign: "left",
        overflow:"hidden",
        whiteSpace: "nowrap",
        background:"white",
        color:"blue",

        ":hover": {
          cursor: "pointer",
          transition: "0.2s",
          color: "#3B82F6",
          fontSize: "1rem",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        maxWidth: "12rem",
        zIndex:"100",
        overflow:"hidden",
        border:"none",
        borderRadius:"3px",
        background:"transparent",
    };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#fff",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
        border:"none"

      };
    },
  };
  