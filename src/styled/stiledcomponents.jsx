import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const NetflixButton = styled.button(
  ({color, wd, fixed, started, medium}) => ({
          height:"50.8px",
          position: fixed? "fixed":'relative',
          top: fixed? "20px":'',
          right: fixed? "20px":'',
          minWidth: wd? "200px": medium?"200px":"auto",
          zIndex: 15,
          width: color? "200px":"auto",
          backgroundColor: color||'red',
          color: 'white',
          borderRadius: started?'0 5px 5px 0':'5px',
          textTransform: "inherit",
          padding: '15px',
          fontSize:'1.1rem',
          border:'none',
          outline:'none',
          cursor: 'pointer'
        }) 
)

export const NetflixInput = styled(InputBase)(
  ({border, placeholder}) => ({
        zIndex:30,
        height: '30px',
        padding: "25.5px",
        borderRadius: border? '5px':'5px 0 0 5px',
        background: '#fff',
        border:'none',
        marginBottom: placeholder == 'Email'? '16px': '32px'
      })
)
