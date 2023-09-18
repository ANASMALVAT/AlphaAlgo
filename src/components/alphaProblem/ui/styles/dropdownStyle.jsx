export const customStyles = {

  singleValue:(styles) => ({
    ...styles,
    color:'#fff',
    
  }),

  control: (styles) => ({
    ...styles,
    borderRadius: "3px",
    fontSize: "1.3rem",
    lineHeight: "2rem",
    background:"#00182D",
    cursor: "pointer",
    maxWidth: "18rem",
    minWidth: "16rem",
    height:"4rem",
    width:"175px",
    borderBottom:"8px solid #4C5ADF",
  ":hover": {
      boxShadow: "none",
    },
    overflow:"auto",
    borderRadius:"5px",
    textAlign:"center"

  }),

  option: (styles) => {
    return {
      ...styles,
      color:'black',
      fontSize: "1rem",
      lineHeight:"1.5rem",
      fontweight: "bold",
      opacity: "1",
      textAlign: "left",
      whiteSpace: "nowrap",
      background:"#00182D",
      color:"white",
      border:"none",
      ":hover": {
        cursor: "pointer",
        transition: "0.1s",
        color: "white",
        background:"#4C5ADF",
      },
      overflow:"hidden",
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      maxWidth: "18rem",
      zIndex:"100",
      border:"none",
      background:"#00182D",
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
