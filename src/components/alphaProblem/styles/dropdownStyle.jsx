export const customStyles = {

    singleValue:(styles) => ({
      ...styles,
      background:"#4C5ADF",
      fontweight:"bold",
      fontSize:"19px",
      fontFamily: "Ubuntu,Helvetica,Arial,sans-serif",
      color: "white",
      "input:focus":{
        border:"none"
      }
    }),

    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "16rem",
      minWidth: "14rem",
      height:"55px",
      borderRadius: "3px",
      fontSize: "19px",
      fontweight:"bold",
      color: "white",
      lineHeight: "1.75rem",
      background:'#4C5ADF',
      cursor: "pointer",
      width:"175px",
      borderBottom:"5px solid #2D33CA",
    ":hover": {
      },
      overflow:"auto",
      borderRadius:"5px",
    }),

    option: (styles) => {
      return {
        ...styles,
        color:"white",
        fontSize: "1rem",
        lineHeight:"1.5rem",
        width: "100%",
        fontweight: "bold",
        textAlign: "left",
        whiteSpace: "nowrap",
        background:"white",
        color:"black",
        fontSize: "19px",
        fontFamily: "Ubuntu,Helvetica,Arial,sans-serif",
        fontweight:"bold",
        background:"#F5F5F5",
        ":hover": {
          cursor: "pointer",
          transition: "0.2s",
          color: "white",
          background:"#4C5ADF",
        },
        borderRadius:"3px",
      };
    },

    menu: (styles) => {
      return {
        ...styles,
        maxWidth: "14rem",
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
      };
    },
  };
