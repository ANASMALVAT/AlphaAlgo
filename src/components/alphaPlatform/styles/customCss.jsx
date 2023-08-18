export const customStyles = {

    singleValue:(styles) => ({
      ...styles,
      color:'#fff',
      
    }),

    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "14rem",
      minWidth: "12rem",
      borderRadius: "3px",
      fontSize: "0.9rem",
      lineHeight: "2rem",
      background:"transparent",
      cursor: "pointer",
      minWidth:'150px',
      maxWidth:'215px',
      width:"175px",
      border:"1px solid #07A7C3",
    ":hover": {
        boxShadow: "none",
        border:"none"
      },
      overflow:"auto"
      


    }),
    option: (styles) => {
      return {
        ...styles,
        color:'black',
        fontSize: "0.8rem",
        lineHeight:"1.3rem",
        width: "100%",
        fontweight: "bold",
        opacity: "1",
        textAlign: "left",
        whiteSpace: "nowrap",
        background:"#1c283b",
        color:"white",
        ":hover": {
          cursor: "pointer",
          transition: "0.1s",
          color: "white",
          fontSize: "1rem",
        },
        border:"2px solid #161D26",
        overflow:"hidden",


      };
    },
    menu: (styles) => {
      return {
        ...styles,
        maxWidth: "12rem",
        zIndex:"100",
        // overflow:"hidden",
        border:"none",
        borderRadius:"3px",
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
  