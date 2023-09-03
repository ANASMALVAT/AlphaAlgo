export const customStyles = {

    singleValue:(styles) => ({
      ...styles,
      color:'white',
      background:'#4C5ADF', 
    }),

    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "14rem",
      minWidth: "12rem",
      borderRadius: "3px",
      fontSize: "0.9rem",
      lineHeight: "2rem",
      background:'#4C5ADF',
      cursor: "pointer",
      minWidth:'150px',
      maxWidth:'215px',
      width:"175px",
      border:"1px solid #4C5ADF",
      borderBottom:"5px solid #4C5ADF",
    ":hover": {
        boxShadow: "none",
        border:"none"
      },
      overflow:"auto",
      borderRadius:"5px",
    }),
    option: (styles) => {
      return {
        ...styles,
        color:'black',
        fontSize: "1rem",
        lineHeight:"1.3rem",
        width: "100%",
        fontweight: "bold",
        opacity: "1",
        textAlign: "left",
        whiteSpace: "nowrap",
        background:"white",
        color:"#4C5ADF",
        ":hover": {
          cursor: "pointer",
          transition: "0.1s",
          color: "white",
          background:"#4C5ADF",
          border:"none"

        },
        overflow:"hidden",
        borderRadius:"5px",
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        maxWidth: "12rem",
        zIndex:"100",
        border:"none",
        borderRadius:"5px",
        background:"transparent",
        overflow:"auto"

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
